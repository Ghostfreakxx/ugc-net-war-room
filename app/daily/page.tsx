"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { paper1Bank, paper2Bank, type MCQ } from "./questions";

const PAPER2_PER_DAY = 7;
const PAPER1_PER_DAY = 3;
const KEY_PREFIX = "dmcq:v1:";

// ---------- storage (localStorage with in-memory fallback) ----------

const memory = new Map<string, string>();
const listeners = new Set<() => void>();

function readKey(key: string): string | null {
  if (memory.has(key)) return memory.get(key) ?? null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeKey(key: string, value: string) {
  memory.set(key, value);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: the in-memory copy keeps this session working.
  }
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function useStoredValue(key: string): string | null {
  return useSyncExternalStore(
    subscribe,
    () => readKey(key),
    () => null,
  );
}

function parse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// ---------- deterministic daily selection ----------

function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function dayNumber(key: string) {
  return Math.floor(Date.parse(`${key}T00:00:00Z`) / 86_400_000);
}

function seededRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], seed: number): T[] {
  const random = seededRandom(seed);
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function hash(text: string) {
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Walks a fixed shuffled order so every question appears once before any repeats.
function rotate(bank: MCQ[], perDay: number, day: number, seed: number) {
  const order = shuffle(bank, seed);
  const start = (day * perDay) % order.length;
  return Array.from({ length: Math.min(perDay, order.length) }, (_, i) => order[(start + i) % order.length]);
}

type DisplayOption = { text: string; correct: boolean };

function displayOptions(question: MCQ, day: number): DisplayOption[] {
  const options = question.options.map((text, index) => ({ text, correct: index === question.answer }));
  return shuffle(options, hash(`${question.id}:${day}`));
}

// ---------- page ----------

type Mode = "all" | "pyq";
type DayAnswers = Record<string, number>;

export default function DailyMcqPage() {
  const today = useSyncExternalStore(subscribe, todayKey, () => null);
  const mode = parse<Mode>(useStoredValue(`${KEY_PREFIX}mode`), "all");
  const rawAnswers = useStoredValue(`${KEY_PREFIX}${today}:${mode}`);
  const doneDays = parse<string[]>(useStoredValue(`${KEY_PREFIX}done`), []);
  const mistakes = parse<string[]>(useStoredValue(`${KEY_PREFIX}mistakes`), []);

  if (!today) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
        <p className="text-slate-400">Loading today&apos;s set…</p>
      </main>
    );
  }

  const day = dayNumber(today);
  const answers = parse<DayAnswers>(rawAnswers, {});

  const pastPaper = (q: MCQ) => q.source !== undefined;
  const p2Pool = mode === "pyq" ? paper2Bank.filter(pastPaper) : paper2Bank;
  const p1Pool = mode === "pyq" ? paper1Bank.filter(pastPaper) : paper1Bank;
  const todaysSet =
    mode === "pyq"
      ? rotate([...p2Pool, ...p1Pool], PAPER2_PER_DAY + PAPER1_PER_DAY, day, 7)
      : [...rotate(p2Pool, PAPER2_PER_DAY, day, 2), ...rotate(p1Pool, PAPER1_PER_DAY, day, 1)];

  const answeredCount = todaysSet.filter((q) => answers[q.id] !== undefined).length;
  const correctCount = todaysSet.filter((q) => {
    const picked = answers[q.id];
    return picked !== undefined && displayOptions(q, day)[picked]?.correct;
  }).length;
  const finished = answeredCount === todaysSet.length;

  const streak = countStreak(doneDays, today);
  const allQuestions = [...paper2Bank, ...paper1Bank];
  const mistakeQuestions = mistakes
    .map((id) => allQuestions.find((q) => q.id === id))
    .filter((q): q is MCQ => q !== undefined);

  function pick(question: MCQ, optionIndex: number) {
    if (!today || answers[question.id] !== undefined) return;
    const next = { ...answers, [question.id]: optionIndex };
    writeKey(`${KEY_PREFIX}${today}:${mode}`, JSON.stringify(next));

    const correct = displayOptions(question, day)[optionIndex].correct;
    const nextMistakes = correct
      ? mistakes.filter((id) => id !== question.id)
      : Array.from(new Set([question.id, ...mistakes]));
    writeKey(`${KEY_PREFIX}mistakes`, JSON.stringify(nextMistakes));

    if (Object.keys(next).length === todaysSet.length && !doneDays.includes(today)) {
      writeKey(`${KEY_PREFIX}done`, JSON.stringify([...doneDays, today]));
    }
  }

  function setMode(next: Mode) {
    writeKey(`${KEY_PREFIX}mode`, JSON.stringify(next));
  }

  const pyqCount = allQuestions.filter(pastPaper).length;

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <Link href="/" className="text-sm text-purple-300 hover:underline">
        ← Back to War Room
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-2">Daily MCQ</h1>
      <p className="text-slate-400 mb-6 max-w-3xl">
        10 new questions every day ({PAPER2_PER_DAY} Paper 2 + {PAPER1_PER_DAY} Paper 1). The set
        rotates through the whole bank before repeating, and options are shuffled
        daily so you learn the fact, not the position.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Stat label="Today" value={`${correctCount} / ${todaysSet.length}`} />
        <Stat label="Answered" value={`${answeredCount} / ${todaysSet.length}`} />
        <Stat label="Streak" value={`${streak} day${streak === 1 ? "" : "s"}`} />
        <Stat label="Mistake bank" value={`${mistakeQuestions.length}`} />
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <ModeButton active={mode === "all"} onClick={() => setMode("all")}>
          All questions ({allQuestions.length})
        </ModeButton>
        <ModeButton active={mode === "pyq"} onClick={() => setMode("pyq")}>
          Past-paper only ({pyqCount})
        </ModeButton>
      </div>

      {finished && (
        <div className="rounded-2xl border border-green-500/40 bg-green-500/10 p-5 mb-6">
          <p className="text-green-300 font-bold text-lg">
            Done for today: {correctCount}/{todaysSet.length}
          </p>
          <p className="text-slate-300 mt-1">
            Anything you got wrong is in the mistake bank below. Come back tomorrow for a new set.
          </p>
        </div>
      )}

      <div className="space-y-5">
        {todaysSet.map((question, index) => (
          <QuestionCard
            key={question.id}
            number={index + 1}
            question={question}
            options={displayOptions(question, day)}
            picked={answers[question.id]}
            onPick={(optionIndex) => pick(question, optionIndex)}
          />
        ))}
      </div>

      {mistakeQuestions.length > 0 && (
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-2">Mistake Bank</h2>
          <p className="text-slate-400 mb-4">
            Questions you got wrong. A question leaves the bank when you get it right on a later day.
          </p>
          <div className="space-y-3">
            {mistakeQuestions.map((q) => (
              <details key={q.id} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
                <summary className="cursor-pointer text-slate-200">{q.question}</summary>
                <p className="mt-2 text-green-300 font-semibold">Answer: {q.options[q.answer]}</p>
                <p className="mt-1 text-slate-300">{q.explain}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <p className="mt-12 text-sm text-slate-500 max-w-3xl">
        Labels: <span className="text-emerald-300">Past-paper question</span> means the stem and
        answer were confirmed from a published past-paper source. Options may be rebuilt where
        the original options were not visible. <span className="text-sky-300">Past-paper topic</span>{" "}
        means the topic was confirmed as asked, but the question is written in NTA style.{" "}
        <span className="text-slate-300">Practice</span> means a question written in the PYQ
        pattern, not taken from a paper. Your answers are saved only in this browser.
      </p>
    </main>
  );
}

function countStreak(doneDays: string[], today: string) {
  const done = new Set(doneDays);
  const cursor = new Date(`${today}T00:00:00Z`);
  if (!done.has(today)) cursor.setUTCDate(cursor.getUTCDate() - 1);
  let streak = 0;
  while (done.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setUTCDate(cursor.getUTCDate() - 1);
  }
  return streak;
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl transition ${
        active ? "bg-fuchsia-600 text-white" : "bg-slate-800/70 text-slate-300 hover:bg-slate-800"
      }`}
    >
      {children}
    </button>
  );
}

function SourceBadge({ question }: { question: MCQ }) {
  if (!question.source) {
    return <span className="text-xs rounded-full bg-slate-700/60 text-slate-300 px-3 py-1">Practice</span>;
  }
  const isPyq = question.source.kind === "pyq";
  return (
    <a
      href={question.source.url}
      target="_blank"
      rel="noreferrer"
      title={question.source.label}
      className={`text-xs rounded-full px-3 py-1 hover:underline ${
        isPyq ? "bg-emerald-500/20 text-emerald-300" : "bg-sky-500/20 text-sky-300"
      }`}
    >
      {isPyq ? "Past-paper question" : "Past-paper topic"} ↗
    </a>
  );
}

function QuestionCard({
  number,
  question,
  options,
  picked,
  onPick,
}: {
  number: number;
  question: MCQ;
  options: DisplayOption[];
  picked: number | undefined;
  onPick: (optionIndex: number) => void;
}) {
  const answered = picked !== undefined;
  const gotItRight = answered && options[picked].correct;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs uppercase tracking-wide text-purple-300 font-semibold">
          Q{number} • Paper {question.paper} • {question.unit} • {question.format}
        </span>
        <SourceBadge question={question} />
      </div>

      <p className="text-slate-100 leading-relaxed mb-4">{question.question}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {options.map((option, index) => {
          let style = "border-slate-700 bg-slate-950 hover:border-fuchsia-500";
          if (answered && option.correct) style = "border-green-500 bg-green-500/15";
          else if (answered && index === picked) style = "border-red-500 bg-red-500/15";
          else if (answered) style = "border-slate-800 bg-slate-950 opacity-60";

          return (
            <button
              key={option.text}
              onClick={() => onPick(index)}
              disabled={answered}
              className={`text-left rounded-xl border px-4 py-3 transition ${style}`}
            >
              <span className="font-bold text-purple-300 mr-2">({index + 1})</span>
              {option.text}
            </button>
          );
        })}
      </div>

      {answered && (
        <div className="mt-4 rounded-xl bg-slate-950 p-4">
          <p className={`font-semibold ${gotItRight ? "text-green-300" : "text-red-300"}`}>
            {gotItRight ? "Correct" : "Not quite"}
          </p>
          <p className="text-slate-300 mt-1">{question.explain}</p>
          {question.source && (
            <p className="text-xs text-slate-500 mt-2">Source: {question.source.label}</p>
          )}
        </div>
      )}
    </div>
  );
}
