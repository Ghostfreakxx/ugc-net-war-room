"use client";

import Link from "next/link";
import { useProgressSummary } from "./progress";

// Home-screen card: today's Daily MCQ status, streak and mistake count.
export default function TodayBanner() {
  const p = useProgressSummary();
  if (!p) return null;

  return (
    <Link
      href="/daily"
      className={`block rounded-2xl border p-5 mb-8 transition ${
        p.doneToday
          ? "border-green-500/50 bg-green-500/10 hover:border-green-400"
          : "border-fuchsia-500/60 bg-fuchsia-500/10 hover:border-fuchsia-400"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-2xl font-bold">
            🔥 {p.streak} day{p.streak === 1 ? "" : "s"} streak
            <span className="text-sm font-normal text-slate-400 ml-2">best {p.best}</span>
          </p>
          <p className={`mt-1 ${p.doneToday ? "text-green-300" : "text-fuchsia-200"}`}>
            {p.doneToday
              ? "Today's set is done. See you tomorrow."
              : p.streak > 0
                ? "Do today's Daily MCQ to keep your streak alive →"
                : "Start today's Daily MCQ →"}
          </p>
          {p.mistakeCount > 0 && (
            <p className="text-sm text-red-300 mt-1">
              {p.mistakeCount} question{p.mistakeCount === 1 ? "" : "s"} waiting in your mistake log
            </p>
          )}
        </div>
        <div className="flex gap-1.5">
          {p.week.map((d) => (
            <div
              key={d.day}
              title={d.day}
              className={`w-7 h-7 rounded-md ${d.done ? "bg-green-500/80" : "bg-slate-800"} ${
                d.day === p.today ? "ring-2 ring-fuchsia-400" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
