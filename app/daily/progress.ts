"use client";

import { useSyncExternalStore } from "react";

// Shared progress storage for the Daily MCQ page and the home dashboard.
export const KEY_PREFIX = "dmcq:v1:";

// ---------- storage (localStorage with in-memory fallback) ----------

const memory = new Map<string, string>();
const listeners = new Set<() => void>();

export function readKey(key: string): string | null {
  if (memory.has(key)) return memory.get(key) ?? null;
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeKey(key: string, value: string) {
  memory.set(key, value);
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Storage unavailable: the in-memory copy keeps this session working.
  }
  listeners.forEach((listener) => listener());
}

export function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function useStoredValue(key: string): string | null {
  return useSyncExternalStore(
    subscribe,
    () => readKey(key),
    () => null,
  );
}

export function parse<T>(raw: string | null, fallback: T): T {
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

// ---------- dates and streaks ----------

export function todayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function shiftDay(key: string, delta: number) {
  const d = new Date(`${key}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + delta);
  return d.toISOString().slice(0, 10);
}

// Consecutive finished days ending today (or yesterday, if today isn't done yet).
export function countStreak(doneDays: string[], today: string) {
  const done = new Set(doneDays);
  let cursor = done.has(today) ? today : shiftDay(today, -1);
  let streak = 0;
  while (done.has(cursor)) {
    streak++;
    cursor = shiftDay(cursor, -1);
  }
  return streak;
}

export function longestStreak(doneDays: string[]) {
  const sorted = [...new Set(doneDays)].sort();
  let best = 0;
  let run = 0;
  sorted.forEach((day, i) => {
    run = i > 0 && shiftDay(sorted[i - 1], 1) === day ? run + 1 : 1;
    best = Math.max(best, run);
  });
  return best;
}

// Oldest first, ending today.
export function lastNDays(today: string, n: number) {
  return Array.from({ length: n }, (_, i) => shiftDay(today, i - (n - 1)));
}

// How often each question was answered wrong, and when last.
export type MistakeLog = Record<string, { wrong: number; last: string }>;

export function useProgressSummary() {
  const today = useSyncExternalStore(subscribe, todayKey, () => null);
  const doneDays = parse<string[]>(useStoredValue(`${KEY_PREFIX}done`), []);
  const mistakes = parse<string[]>(useStoredValue(`${KEY_PREFIX}mistakes`), []);
  if (!today) return null;
  return {
    today,
    doneToday: doneDays.includes(today),
    streak: countStreak(doneDays, today),
    best: longestStreak(doneDays),
    mistakeCount: mistakes.length,
    week: lastNDays(today, 7).map((day) => ({ day, done: doneDays.includes(day) })),
  };
}
