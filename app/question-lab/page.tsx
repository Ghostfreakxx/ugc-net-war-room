import Link from "next/link";

type Format = {
  name: string;
  share: string;
  looksLike: string;
  howBuilt: string;
  crack: string[];
};

type Worked = {
  title: string;
  question: string;
  options: string[];
  steps: string[];
  answer: string;
};

type Fingerprint = {
  unit: string;
  loves: string[];
};

type Sighting = {
  exam: string;
  item: string;
  lesson: string;
};

const formats: Format[] = [
  {
    name: "Direct one-liner",
    share: "~35–45 of 100",
    looksLike: "\"Who coined the term…\", \"Which Article deals with…\", \"Who is the author of…\"",
    howBuilt:
      "The question is a fact from a standard textbook or Wikipedia opening line. The 3 wrong options are the same kind of thing: 4 thinkers from the same school, 4 Articles within ±10 of each other, or 4 years close together.",
    crack: [
      "Learn in pairs and families, not isolated facts. The distractors come from the same family.",
      "\"First / coined / founder\" wording is a signal. NTA loves origin questions, e.g. Bentham coined the word \"international\".",
    ],
  },
  {
    name: "Multiple statements (code options)",
    share: "~15–20",
    looksLike: "Five statements A–E, then options like \"A, B and D only\" / \"B, C and E only\"",
    howBuilt:
      "Usually 2–3 true statements plus 2 false ones. Each false one is a true statement with ONE word swapped: the thinker, a number, 'only', 'always', or 'not'.",
    crack: [
      "Never evaluate all five. Pick the statement you are MOST sure about and strike every option that disagrees with it.",
      "A statement that appears in all 4 options needs no checking. It is only there to fill the options.",
      "Usually 2 sure statements settle the answer.",
    ],
  },
  {
    name: "Match List-I with List-II",
    share: "~12–18",
    looksLike: "4 items × 4 items, with options like A-II, B-IV, C-I, D-III",
    howBuilt:
      "The two columns come from one family: thinker ↔ book, thinker ↔ concept, Article ↔ subject, or treaty ↔ year. Two pairs are easy and two are hard.",
    crack: [
      "Lock in the 2 pairs you know. With 4 options, 2 correct pairs almost always identify a single option.",
      "Never try to solve the whole 4×4 grid. It wastes time.",
    ],
  },
  {
    name: "Chronology / sequence",
    share: "~8–12",
    looksLike: "\"Arrange in chronological order\" with options like B, A, D, C, E",
    howBuilt:
      "4–5 events, books or institutions spread over decades. Usually 2 items are close in time; that close pair is the trap.",
    crack: [
      "Find the EARLIEST and LATEST items first. That alone usually leaves 1–2 options.",
      "Only then decide the close pair.",
      "Memorise years in chains (your Super Chronology sheet is exactly the right tool).",
    ],
  },
  {
    name: "Assertion–Reason / Statement I & II",
    share: "~6–10",
    looksLike:
      "\"Given below are two statements…\" with options: both true + R explains A / both true, R doesn't explain / A true R false / A false R true",
    howBuilt:
      "NTA most often makes both statements true, then tests whether R really explains A. The Statement I/II version has no 'explains' option, only true/false combinations.",
    crack: [
      "Judge A alone, then R alone. Only if both are true, ask whether A happens BECAUSE of R.",
      "If R is a general truth that doesn't mention A's mechanism, it usually does not explain A.",
    ],
  },
  {
    name: "Passage (last 5 questions)",
    share: "5",
    looksLike: "A political science paragraph (public policy, democracy, federalism…) followed by 5 sub-questions",
    howBuilt:
      "The answers are inside the passage. The wrong options are true in real life but NOT stated in the passage.",
    crack: [
      "These are the safest 10 marks in Paper 2. Do them slowly and only from the text.",
      "Reject any option that brings in outside knowledge, even if it is correct.",
    ],
  },
];

const worked: Worked[] = [
  {
    title: "Multiple statements: 2-statement kill",
    question:
      "Which of the following belong to John Rawls? A. Original position  B. Entitlement theory  C. Difference principle  D. Veil of ignorance  E. Minimal state",
    options: ["(1) A, B and C only", "(2) A, C and D only", "(3) B, D and E only", "(4) C, D and E only"],
    steps: [
      "B (entitlement) is Nozick, so strike options 1 and 3.",
      "E (minimal state) is Nozick, so strike option 4.",
      "Only option 2 is left. You never had to check A, C or D.",
    ],
    answer: "(2) A, C and D only",
  },
  {
    title: "Match list: 2-pair lock",
    question:
      "Match: A. Marx  B. Lenin  C. Gramsci  D. Togliatti — with I. Hegemony  II. Dictatorship of the proletariat  III. Polycentrism  IV. Vanguard party",
    options: [
      "(1) A-II, B-IV, C-I, D-III",
      "(2) A-IV, B-II, C-III, D-I",
      "(3) A-II, B-I, C-IV, D-III",
      "(4) A-I, B-IV, C-II, D-III",
    ],
    steps: [
      "Marx means dictatorship of the proletariat (A-II). That leaves options 1 and 3.",
      "Gramsci means hegemony (C-I). Only option 1 remains. You didn't need to know Togliatti.",
    ],
    answer: "(1) A-II, B-IV, C-I, D-III",
  },
  {
    title: "Chronology: anchors first",
    question:
      "Arrange these High Courts by year of establishment: A. Karnataka (Mysore)  B. Guwahati  C. Kerala  D. Punjab & Haryana  E. Sikkim",
    options: ["(1) A, D, B, C, E", "(2) D, A, B, E, C", "(3) A, B, D, C, E", "(4) B, D, A, C, E"],
    steps: [
      "Earliest anchor: Mysore High Court 1884, so the answer starts with A. That leaves options 1 and 3.",
      "Latest anchor: Sikkim 1975, which both remaining options already end with.",
      "Close pair: Punjab (East Punjab HC, 1947) comes before Guwahati (Assam HC, 1948). That gives option 1.",
    ],
    answer: "(1) A, D, B, C, E (1884, 1947, 1948, 1956, 1975)",
  },
  {
    title: "Assertion–Reason: the 'because' test",
    question:
      "A: Morgenthau holds that states pursue national interest defined as power. R: International politics is governed by objective laws rooted in human nature.",
    options: [
      "(1) Both true, R explains A",
      "(2) Both true, R does not explain A",
      "(3) A true, R false",
      "(4) A false, R true",
    ],
    steps: [
      "A is true (Morgenthau's 2nd principle). R is true (his 1st principle).",
      "Ask whether states seek power BECAUSE of objective laws rooted in human nature. For classical realism, yes.",
    ],
    answer: "(1) Both true, R explains A",
  },
];

const obviousRules = [
  "The option-code structure gives the answer away. In statement, match and chronology questions you only need 2 certain facts, not 4–5. Around 40% of Paper 2 falls to this.",
  "The distractors come from the same family. Wrong options are almost never random: Morgenthau vs Waltz, 73rd vs 74th, 1947 vs 1948. If one option comes from a different family, it is usually wrong.",
  "NTA's 'current affairs' is usually 2–10 years old. The January 2026 paper asked about Saad Hariri's 2017 resignation. Events that have reached textbooks and Wikipedia are the ones that get asked.",
  "Textbook wording is a clue. The correct option often repeats standard textbook phrasing (Heywood, Gauba, Laxmikanth, IGNOU). An option that sounds like an opinion is usually wrong.",
  "One-word swaps make statements false: only, all, never, always, first, not, exclusively. Circle that word before you judge the statement.",
  "Origin questions ('first', 'coined', 'founded', 'father of') appear in every paper. If you know who coined a term, you have probably answered a question.",
  "NTA repeats PYQs, often worded differently. The same fact returns as a match pair one year and a statement the next. That is why logging PYQs into your trap notes works.",
  "The passage set is free marks. Everything needed is in the text, and outside knowledge is the trap.",
];

const fingerprints: Fingerprint[] = [
  {
    unit: "1. Political Theory",
    loves: [
      "Definitions of politics: Easton ('authoritative allocation of values'), Lasswell ('who gets what, when, how')",
      "Types of liberty, equality, justice and rights (Berlin, Rawls, Nozick, Walzer, Sen)",
      "Ideology families from Heywood: feminist waves, ecologism vs environmentalism, eco-feminism origins",
      "Famous quotes → thinker ('Property is theft' → Proudhon)",
    ],
  },
  {
    unit: "2. Western Political Thought",
    loves: [
      "Book ↔ author ↔ year chains: Prince 1513 → Leviathan 1651 → Two Treatises 1689 → Social Contract 1762 → On Liberty 1859 → Capital 1867",
      "Marxist family match: Marx / Lenin / Gramsci / Togliatti / Althusser",
      "Arendt, Rawls, Nozick, Hegel's civil society, Plato's classes, Aristotle's six forms",
    ],
  },
  {
    unit: "3. Indian Political Thought",
    loves: [
      "Book ↔ author (Hind Swaraj, Gulamgiri, Annihilation of Caste, Discovery of India, Essentials of Hindutva)",
      "Gandhi statements: trusteeship, swaraj, satyagraha, critique of modern civilisation",
      "Kautilya: saptanga, mandala; Ambedkar; Pandita Ramabai; Periyar; Lohia; JP",
    ],
  },
  {
    unit: "4. Comparative Political Analysis",
    loves: [
      "Approach ↔ founder: systems (Easton), structural-functional (Almond), communication (Deutsch)",
      "Party typologies (Duverger, Sartori), political development (Pye's crises, Huntington)",
      "Foreign constitutions: US Articles I legislature, II executive, III judiciary (Article III was asked in Jan 2026)",
    ],
  },
  {
    unit: "5. International Relations",
    loves: [
      "Treaty and event chronology: Westphalia 1648 → Vienna 1815 → Versailles 1919 → UN 1945 → WTO 1995",
      "Theory ↔ thinker; 'who began IR as a discipline' type questions (Bentham appeared in June 2026)",
      "UN environmental conferences: Stockholm 1972 → Rio 1992 → Johannesburg 2002 → Rio+20 2012",
      "Cold War events and alliance formation (Axis pacts 1936–40)",
    ],
  },
  {
    unit: "6. India's Foreign Policy",
    loves: [
      "India–China chronology (asked in June 2026): Panchsheel 1954 → war 1962 → Rajiv visit 1988 → 1993/1996 border agreements → Doklam 2017 → Galwan 2020",
      "Military exercises ↔ partner country (asked in Dec 2023)",
      "QUAD, Indo-Pacific, Look/Act East, Gujral Doctrine, NAM",
    ],
  },
  {
    unit: "7. Political Institutions in India",
    loves: [
      "Article ↔ subject, amendment ↔ change, case ↔ doctrine",
      "Institution founding chronology (High Courts were asked in June 2025), lists of AGs and CECs",
      "Constituent Assembly committees and their chairmen",
    ],
  },
  {
    unit: "8. Political Processes in India",
    loves: [
      "Party system models: Kothari's 'Congress System', Morris-Jones",
      "Caste: Srinivas (dominant caste, Sanskritisation); social movements with years (Chipko 1973)",
      "Electoral reform committees: Tarkunde 1975, Dinesh Goswami 1990, Indrajit Gupta 1998",
    ],
  },
  {
    unit: "9. Public Administration",
    loves: [
      "Thinker ↔ theory: Barnard's acceptance theory (asked Dec 2023), Likert's Systems 1–4 (asked June 2025), Follett, Simon, Riggs",
      "Likert order: 1 Exploitative-authoritative → 2 Benevolent-authoritative → 3 Consultative → 4 Participative",
      "Comparative Public Administration, POSDCORB, Minnowbrook, NPM vs NPS",
    ],
  },
  {
    unit: "10. Governance & Public Policy",
    loves: [
      "Policy models and cycle; a public-policy passage (Dec 2023)",
      "RTI, Lokpal, citizen charter, social audit, e-governance, 2nd ARC",
      "Recent schemes and acts, asked as statements",
    ],
  },
];

const sightings: Sighting[] = [
  {
    exam: "Jan 2026 (Dec 2025 cycle)",
    item: "Which country's PM announced his resignation while in Saudi Arabia on 4 Nov 2017? → Lebanon (Saad Hariri)",
    lesson: "'Current affairs' can be 8+ years old. Revise major world political events from 2015 onwards, not just this year.",
  },
  {
    exam: "Jan 2026 (Dec 2025 cycle)",
    item: "Article of the US Constitution that deals with the judiciary → Article III",
    lesson: "Foreign constitutions are asked as Article-number one-liners. Learn US Articles I–VII.",
  },
  {
    exam: "Jan 2026 (Dec 2025 cycle)",
    item: "The paper was reported as chronology-heavy, factual and assertion-based, rated moderate to difficult.",
    lesson: "Chronology practice gives the best return per hour.",
  },
  {
    exam: "June 2026",
    item: "Chronology of India–China relations; Bentham as the answer to an 'origin of IR' question; QUAD / Indo-Pacific",
    lesson: "Origin and first-use questions, and bilateral chronologies, repeat.",
  },
  {
    exam: "June 2025",
    item: "Arrange High Courts (Karnataka, Guwahati, Kerala, Punjab & Haryana, Sikkim) chronologically; Likert's Systems 1–4",
    lesson: "Institution-founding chronology and PA thinker models appear every cycle.",
  },
  {
    exam: "Dec 2024 cycle (Jan 2025)",
    item: "Treaty of Westphalia, Axis alliance formation, WTO founding year, UN environmental conference timeline, Easton's definition of politics, eco-feminism origins",
    lesson: "Nearly all of these are chronology or origin questions.",
  },
  {
    exam: "Dec 2023",
    item: "Gandhi, IR since 1945, Comparative Public Administration, Barnard's Acceptance Theory, a public policy passage, military exercises, authors and books",
    lesson: "Author ↔ book matching and PA theories are constant.",
  },
  {
    exam: "Older PYQ (Testbook archive)",
    item: "Match: dictatorship of proletariat → Marx, Communist Party → Lenin, Hegemony → Gramsci, Polycentrism → Togliatti",
    lesson: "Family-based match lists. Know each family's 'fourth member' too.",
  },
];

const sources = [
  { label: "Adda247: memory-based questions, 6 Jan 2026 Shift 1 (PDF)", url: "https://www.adda247.com/jobs/wp-content/uploads/sites/13/2026/01/07180604/MEMORY-BASED-QUESTIONS-OF-UGC-NET-Political-Science-06-JAN-2026-SHIFT-1.pdf" },
  { label: "Shiksha: UGC NET 6 Jan 2026 exam analysis", url: "https://www.shiksha.com/sarkari-exams/articles/ugc-net-exam-analysis-january-6-2026-blogId-218098" },
  { label: "PW: June 2026 Political Science question paper", url: "https://www.pw.live/ugc-net/exams/ugc-net-june-2026-political-science-question-paper" },
  { label: "Prepp: June 2025 (26 June, Shift 2) paper", url: "https://prepp.in/paper/ugc-net-paper-2-political-science-26-jun-2025-shift-2-689bc7654f7583e6577d11ed" },
  { label: "Oliveboard: Dec 2024 cycle (6 Jan 2025) analysis", url: "https://www.oliveboard.in/blog/ugc-net-political-science-exam-analysis-2024-6-jan-2025/" },
  { label: "Shiksha: Dec 2023 analysis", url: "https://www.shiksha.com/sarkari-exams/teaching/articles/ugc-net-2023-exam-analysis-political-science-blogId-146139" },
  { label: "Testbook: Match-list PYQ (Marx/Lenin/Gramsci/Togliatti)", url: "https://testbook.com/question-answer/match-list-i-with-list-iilist-i--62207b5bbacbffc31d27a7de" },
  { label: "NTA official answer keys (Dec 2024 cycle)", url: "https://ugcnet.nta.ac.in/images/KEY_PDF/002.PDF" },
];

export default function QuestionLabPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <Link href="/" className="text-sm text-purple-300 hover:underline">
        ← Back to War Room
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-2">Question Lab: How NTA Sets Pol Sci Paper 2</h1>
      <p className="text-slate-400 mb-3 max-w-3xl">
        How NTA builds each type of question, and why the answer is often visible
        from the options alone.
      </p>
      <p className="text-sm text-amber-300/90 mb-8 max-w-3xl">
        Based on recent-paper analyses and memory-based questions (sources at the
        bottom), plus patterns from older PYQs. The share of each format is an
        estimate, not an official NTA figure. Check it yourself by tagging each
        question in the last 3 papers.
      </p>

      <h2 className="text-3xl font-bold mb-4">The 6 Question Formats</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {formats.map((f) => (
          <div key={f.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <div className="flex justify-between gap-3 mb-2">
              <h3 className="text-xl font-bold text-purple-300">{f.name}</h3>
              <span className="text-xs h-fit rounded-full bg-fuchsia-500/20 text-fuchsia-300 px-3 py-1 whitespace-nowrap">
                {f.share}
              </span>
            </div>
            <p className="text-sm text-slate-400 mb-3">{f.looksLike}</p>
            <p className="text-slate-200 mb-3">
              <span className="text-orange-300 font-semibold">How it is built: </span>
              {f.howBuilt}
            </p>
            <div className="space-y-2">
              {f.crack.map((c) => (
                <div key={c} className="rounded-xl bg-slate-950 p-3 text-slate-200">
                  <span className="text-green-300 font-semibold">Crack: </span>
                  {c}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-4">Why the Answer Is &quot;Always Obvious&quot;</h2>
      <NumberedList items={obviousRules} />

      <h2 className="text-3xl font-bold mt-10 mb-4">Worked Eliminations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {worked.map((w) => (
          <div key={w.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-3">{w.title}</h3>
            <p className="text-slate-200 mb-3">{w.question}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              {w.options.map((o) => (
                <div key={o} className="rounded-lg bg-slate-950 px-3 py-2 text-sm text-slate-300">
                  {o}
                </div>
              ))}
            </div>
            <details>
              <summary className="cursor-pointer text-green-300 font-semibold">Show elimination</summary>
              <ol className="mt-2 space-y-1 list-decimal list-inside text-slate-300">
                {w.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="mt-2 font-semibold text-green-300">Answer: {w.answer}</p>
            </details>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-4">What NTA Asked Recently</h2>
      <div className="space-y-3">
        {sightings.map((s) => (
          <div key={s.item} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-purple-300 font-semibold">{s.exam}</p>
            <p className="mt-1 text-slate-200">{s.item}</p>
            <p className="mt-2 text-sm text-amber-300">→ {s.lesson}</p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-4">Unit Fingerprints: What Each Unit Loves to Ask</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {fingerprints.map((f) => (
          <div key={f.unit} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-3">{f.unit}</h3>
            <div className="space-y-2">
              {f.loves.map((l) => (
                <div key={l} className="rounded-xl bg-slate-950 p-3 text-slate-200">
                  {l}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-4">How to Use This</h2>
      <NumberedList
        items={[
          "Take the last 3 official papers and tag every question with its format and unit. Your own counts will beat any coaching estimate.",
          "For every wrong answer, write down which family the distractor came from. Add the pair to Trap Notes.",
          "Practise elimination on purpose: in a mock, force yourself to answer statement and match questions using only 2 facts, then check.",
          "Every week, add 10 origin facts (first / coined / founder) and 2 chronology chains.",
          "Do the passage set with full attention every time. It is 10 marks you can guarantee.",
        ]}
      />

      <h2 className="text-2xl font-bold mt-10 mb-3">Sources</h2>
      <ul className="space-y-1 text-sm">
        {sources.map((s) => (
          <li key={s.url}>
            <a href={s.url} target="_blank" rel="noreferrer" className="text-sky-300 hover:underline">
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}

function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={item} className="rounded-xl bg-slate-900/70 border border-slate-800 p-4">
          <span className="text-purple-300 font-bold mr-2">{index + 1}.</span>
          <span className="text-slate-200">{item}</span>
        </div>
      ))}
    </div>
  );
}
