import Link from "next/link";

type Tier = "Very Likely" | "Likely" | "Watch";

type UnitPrediction = {
  unit: string;
  tier: Tier;
  why: string;
  focus: string[];
};

type PracticeQuestion = {
  format: string;
  question: string;
  answer: string;
};

const targetPlan = [
  "Target cycle: UGC NET December 2026. NTA usually holds it in late December or early January. Confirm dates on ugcnet.nta.ac.in.",
  "Pattern: Paper 1 has 50 questions (100 marks) and Paper 2 has 100 questions (200 marks). There is no negative marking.",
  "Personal JRF target: about 210/300 (70%). That means 38+ in Paper 1 and 67+ in Paper 2.",
  "Check the official Political Science JRF cut-off for your category from the last 2 cycles, and keep a 5–8 mark buffer above it.",
  "Paper 1 is the cheapest place to gain marks. Every extra mark there matters as much as one in Paper 2.",
];

const fixesMade = [
  "61st Amendment year: changed 1989 to 1988 on Paper 2, so it now matches the Chronology page. The Act is from 1988 and came into force in 1989.",
  "\"CAG 1960\" in the Public Administration chronology: renamed to Comparative Administration Group, so it is not confused with the Comptroller and Auditor General.",
  "CAG chronology: added K. Sanjay Murthy, current CAG since November 2024.",
  "Low fluoride: your note said it prevents dental caries. Low fluoride actually causes caries. It is the optimal level that prevents them.",
  "E-Waste Rules: added that the 2016 rules were replaced by the E-Waste (Management) Rules, 2022.",
  "Nanavati Commission: it inquired into the 1984 anti-Sikh riots. The Gujarat 2002 inquiry was the Nanavati–Mehta Commission.",
  "Panchayati Raj committees: added years (Balwant Rai Mehta 1957 → Ashok Mehta 1977–78 → Dantwala 1978 → Hanumantha Rao 1984 → GVK Rao 1985 → Singhvi 1986 → Thungon 1988). Also corrected the Dantwala and GVK Rao mandates.",
  "Stratified vs Cluster sampling: \"groups first vs clusters first\" was misleading. Stratified takes a sample from EVERY group. Cluster picks SOME whole groups.",
  "Alan Turing is the father of theoretical computer science and AI. Charles Babbage is the \"Father of the Computer\". NTA uses this trap.",
  "Contraposition: E contraposes only by limitation, and I never contraposes.",
  "NEP 4-year exit: this gives an Honours degree, or Honours with Research, not simply a \"degree with research\".",
  "Percentage increase formula: added the brackets, (New − Old) ÷ Old × 100. Type II error is now worded as \"failing to reject a false H0\".",
];

const verifyYourself = [
  "SAARC Years chronology (Girl Child 1990 → Disabled Persons 1991 → …): my recollection is Shelter 1991, Environment 1992, Disabled Persons 1993, Youth 1994, Poverty Eradication 1995, Literacy 1996. Check this against an official SAARC source before trusting either version.",
  "Construction & Demolition Waste Rules 2016: newer 2025 rules have been notified. Check which year NTA's answer key expects.",
  "Hobbes \"no right to rebellion\": this is true in general. The exception is that the subject keeps the right of self-preservation, which statement-based questions can exploit.",
  "Fayol: control is not one of the 14 principles, but it IS one of his 5 functions of management (POCCC). Statement questions can mix these up.",
  "The year labels on the home-page PYQ cards (2018, 2020, 2021, 2024, 2025) are theme labels. Match them to actual question papers when you solve PYQs.",
];

const gaps = [
  "India's Foreign Policy (a full syllabus unit): you have only about 5 items. Add Panchsheel, NAM, Gujral Doctrine, Act East, Neighbourhood First, SAGAR/MAHASAGAR, Quad, IMEC, BRICS, SCO and India–US relations.",
  "Political Processes in India: add party system phases (Rajni Kothari's 'Congress System'), electoral behaviour, caste and politics, identity movements, the Mandal era, and regional parties.",
  "Governance and Public Policy: add policy models (Dror, Lindblom, Simon), Mission Karmayogi, DBT and JAM, social audit, RTI after the DPDP Act, and aspirational districts.",
  "Comparative Politics: add Sartori's party system typology, Lipset and Rokkan's cleavages, Barrington Moore, Skocpol (States and Social Revolutions), O'Donnell (bureaucratic authoritarianism) and Huntington's Third Wave.",
  "Contemporary Political Theory: add Arendt, Habermas, Foucault, Kymlicka, Walzer, Sandel, Pateman, Nancy Fraser, Iris Marion Young, and Sen–Nussbaum capabilities.",
  "Indian Political Thought: add Phule, Pandita Ramabai, Periyar, Iqbal, Tilak, Gokhale, Syed Ahmad Khan and Deendayal Upadhyaya, each with their main book and year.",
];

const unitPredictions: UnitPrediction[] = [
  {
    unit: "Political Institutions in India",
    tier: "Very Likely",
    why: "Many constitutional events have happened since 2024. NTA tends to frame these as statement-based questions.",
    focus: [
      "One Nation One Election: 129th Amendment Bill 2024 (new Article 82A; amends Articles 83, 172, 327), Kovind Committee",
      "130th Amendment Bill 2025: removal of PM/CM/Ministers held in custody for 30 days (referred to a JPC)",
      "Governor's assent: Articles 200/201, the Tamil Nadu Governor case (2025) and the Presidential Reference under Article 143",
      "Delimitation freeze (84th Amendment) until the first census after 2026, Census 2027 with caste enumeration, and the 106th Amendment linked to both",
      "Election Commission: CEC & ECs Act 2023, Anoop Baranwal (2023), Special Intensive Revision of electoral rolls",
      "Current office-holders: VP C.P. Radhakrishnan, CJI Surya Kant, CEC Gyanesh Kumar, CAG K. Sanjay Murthy, 16th Finance Commission (Arvind Panagariya)",
    ],
  },
  {
    unit: "Political Theory + Western Thought",
    tier: "Very Likely",
    why: "This is the most repeated area in PYQs. Recent papers ask thinker ↔ book ↔ concept in match-list format.",
    focus: [
      "Justice debates: Rawls vs Nozick vs Sandel vs Walzer (Spheres of Justice) vs Sen (The Idea of Justice)",
      "Liberty: Berlin, Mill, Green (positive liberty), and Quentin Skinner (republican liberty)",
      "Arendt (The Human Condition, Origins of Totalitarianism), Habermas (public sphere), Foucault (power/knowledge)",
      "Multiculturalism: Kymlicka, Parekh, Taylor (politics of recognition)",
      "Feminism: Pateman (The Sexual Contract), Fraser (redistribution vs recognition), Crenshaw (intersectionality)",
    ],
  },
  {
    unit: "Indian Political Thought",
    tier: "Very Likely",
    why: "The easiest area for NTA to build chronology and book-matching questions on.",
    focus: [
      "Book chronology: Gulamgiri 1873 → Hind Swaraj 1909 → Essentials of Hindutva 1923 → Annihilation of Caste 1936 → Integral Humanism 1965",
      "Ambedkar: States and Minorities, Who Were the Shudras, constitutional morality",
      "Gandhi: Swaraj, Trusteeship, Sarvodaya; Aurobindo; Tagore's Nationalism (1917)",
      "Kautilya: Saptanga, Mandala theory, Shadgunya (six-fold foreign policy)",
    ],
  },
  {
    unit: "India's Foreign Policy",
    tier: "Very Likely",
    why: "A lot has changed since 2025, and this is your weakest unit in the notes.",
    focus: [
      "Operation Sindoor (May 2025) after Pahalgam, and the Indus Waters Treaty (1960) placed in abeyance",
      "BRICS expansion (Indonesia joined 2025) and India's BRICS chairship in 2026; SCO; Quad",
      "SAGAR (2015) → MAHASAGAR (2025, Mauritius); Neighbourhood First; Act East (2014)",
      "Strategic autonomy / multi-alignment, US tariffs, IMEC; G20 New Delhi (African Union made a permanent member)",
    ],
  },
  {
    unit: "International Relations",
    tier: "Likely",
    why: "Theory questions increasingly use current events as their examples.",
    focus: [
      "Realism variants: offensive (Mearsheimer), defensive (Waltz), neoclassical (Rose), security dilemma (Herz, Jervis)",
      "Weaponised interdependence (Farrell & Newman) and economic statecraft: the tariff war as an example",
      "Constructivism (Wendt), English School (Bull), critical theory (Cox), feminist IR (Tickner, Enloe)",
      "UN at 80, UNSC reform (G4), NATO expansion (Finland 2023 → 31st, Sweden 2024 → 32nd)",
    ],
  },
  {
    unit: "Political Processes in India",
    tier: "Likely",
    why: "The census, caste enumeration and delimitation debates make this area topical.",
    focus: [
      "Caste and politics: Kothari (Caste in Indian Politics), Srinivas, the Mandal Commission",
      "SC sub-classification: State of Punjab v Davinder Singh (2024) overruled E.V. Chinnaiah",
      "Electoral bonds struck down: ADR v Union of India (2024)",
      "Social movements, regionalism, and the coalition era compared with the dominant-party system",
    ],
  },
  {
    unit: "Governance and Public Policy",
    tier: "Likely",
    why: "Topics that overlap Paper 1 (ICT, data, e-governance) are low-hanging fruit.",
    focus: [
      "DPDP Act 2023 and the DPDP Rules 2025; the DPDP Act's amendment to RTI Section 8(1)(j)",
      "GST Council (Article 279A) and the 2025 GST rate rationalisation; cooperative vs competitive federalism; NITI Aayog",
      "Policy models: Dror (optimal), Lindblom (incrementalism), Simon (bounded rationality), Easton (systems)",
      "Mission Karmayogi, the lateral entry debate, social audit, citizen's charter",
    ],
  },
  {
    unit: "Public Administration",
    tier: "Likely",
    why: "Stable repeat area where thinker-concept matching is almost guaranteed.",
    focus: [
      "Riggs: prismatic-sala model; Simon: Administrative Behavior; Waldo: The Administrative State",
      "Denhardt: New Public Service; Osborne & Gaebler: Reinventing Government; Hood: NPM",
      "Weber's ideal-type bureaucracy vs Merton's dysfunctions; Argyris; McGregor X/Y; Herzberg",
    ],
  },
  {
    unit: "Comparative Political Analysis",
    tier: "Watch",
    why: "Fewer questions, but they are hard. Almond and Huntington repeat.",
    focus: [
      "Sartori (polarised pluralism), Duverger's law, Lipset & Rokkan (freezing hypothesis)",
      "Barrington Moore, Skocpol, O'Donnell, Huntington's Third Wave (1991)",
      "Lijphart: majoritarian vs consensus democracy; Linz: perils of presidentialism",
    ],
  },
];

const paper1Predictions = [
  "Higher Education: NEP 2020 at 5 years, APAAR ID, One Nation One Subscription (2025), PM-Vidyalaxmi, NCrF, and the proposed single higher-education regulator replacing UGC/AICTE/NCTE (check its latest status).",
  "Research Ethics: FFP, predatory and clone journals, and the discontinuation of the UGC-CARE list (2025). Institutions now assess journals themselves using UGC's parameters.",
  "ICT: generative AI and LLM terms, the IndiaAI Mission, digital public infrastructure (Aadhaar, UPI, ONDC), CERT-In, and the DPDP Act.",
  "Environment: COP29 Baku (NCQG climate finance goal), COP30 Belém (2025), India's NDCs, Mission LiFE, the Green Credit Programme, and Net Zero by 2070.",
  "Teaching Aptitude: Bloom's taxonomy application questions, formative vs diagnostic evaluation, and case-based classroom situations.",
  "Reasoning: 1–2 questions on the Indian logic (Pramana) set, which many students skip. Revise Nyaya's four pramanas, Mimamsa's six, and Hetvabhasa.",
  "DI: one table or chart set with 5 questions. Expect percentage change, ratio and average. Do it in one pass as your notes suggest.",
];

const practiceQuestions: PracticeQuestion[] = [
  {
    format: "Chronology",
    question:
      "Arrange in order of publication: (A) Hind Swaraj (B) Annihilation of Caste (C) Gulamgiri (D) Integral Humanism (E) Essentials of Hindutva",
    answer: "C → A → E → B → D (1873, 1909, 1923, 1936, 1965)",
  },
  {
    format: "Match the List",
    question:
      "Match: (A) Hannah Arendt (B) Robert Nozick (C) Michael Walzer (D) Will Kymlicka — with (I) Spheres of Justice (II) Multicultural Citizenship (III) The Human Condition (IV) Anarchy, State and Utopia",
    answer: "A-III, B-IV, C-I, D-II",
  },
  {
    format: "Assertion–Reason",
    question:
      "A: Lok Sabha seat allocation among states is still based on the 1971 census. R: The 84th Amendment (2001) extended the freeze until the first census after 2026.",
    answer: "Both A and R are true, and R correctly explains A.",
  },
  {
    format: "Statements",
    question:
      "About the Constitution (129th Amendment) Bill, 2024: (1) It inserts Article 82A. (2) It provides for simultaneous elections to Lok Sabha and State Assemblies. (3) It also covers Panchayat and Municipal elections.",
    answer: "1 and 2 only. Local bodies are not part of the Bill.",
  },
  {
    format: "Match the List",
    question:
      "Match: (A) State of Punjab v Davinder Singh (B) ADR v Union of India (2024) (C) Anoop Baranwal v Union of India (D) K.S. Puttaswamy — with (I) Electoral bonds (II) EC appointments (III) Sub-classification of SCs (IV) Privacy",
    answer: "A-III, B-I, C-II, D-IV",
  },
  {
    format: "Chronology",
    question:
      "Arrange: (A) Act East Policy (B) Look East Policy (C) MAHASAGAR (D) Gujral Doctrine (E) SAGAR",
    answer: "B → D → A → E → C (1991, 1996, 2014, 2015, 2025)",
  },
  {
    format: "Concept Application",
    question:
      "A great power uses its control over financial networks and market access to coerce partners. Which IR concept best describes this?",
    answer: "Weaponised interdependence (Farrell & Newman). Trap: not 'complex interdependence' (Keohane & Nye).",
  },
  {
    format: "Match the List",
    question:
      "Match: (A) Fred Riggs (B) Herbert Simon (C) Charles Lindblom (D) Yehezkel Dror — with (I) Muddling through (II) Normative-optimum model (III) Prismatic-sala (IV) Bounded rationality",
    answer: "A-III, B-IV, C-I, D-II",
  },
  {
    format: "Match the List",
    question:
      "Match: (A) Sartori (B) Duverger (C) Lipset & Rokkan (D) Huntington — with (I) Third Wave (II) Freezing of cleavages (III) Polarised pluralism (IV) Plurality rule favours two-party system",
    answer: "A-III, B-IV, C-II, D-I",
  },
  {
    format: "Assertion–Reason",
    question:
      "A: For Gramsci, ruling-class domination rests mainly on consent. R: Hegemony works through civil society institutions like schools, church and media.",
    answer: "Both A and R are true, and R correctly explains A.",
  },
  {
    format: "Paper 1 – Research Ethics",
    question:
      "Which is NOT part of 'FFP' research misconduct? (1) Fabrication (2) Falsification (3) Plagiarism (4) Duplicate publication",
    answer: "4. Duplicate publication is a questionable research practice, but it is not in the FFP triad.",
  },
  {
    format: "Paper 1 – Indian Logic",
    question: "According to Nyaya, which are the valid means of knowledge (pramanas)?",
    answer: "Pratyaksha, Anumana, Upamana, Shabda (4). Mimamsa adds Arthapatti and Anupalabdhi (6).",
  },
];

const studyPlan = [
  "Weeks 1–4 (Oct): Fill the gaps listed above. Take one weak unit per week: Foreign Policy → Political Processes → Governance → Comparative. Turn every new fact into a one-liner on this site.",
  "Weeks 5–8 (Nov): Solve the last 10+ PYQ papers unit-wise, not paper-wise. Log every wrong answer into Trap Notes with the reason you got it wrong.",
  "Weeks 9–11 (early Dec): Take 2 full mocks a week under timed conditions. Analysis takes longer than the mock, so give it 2 hours each time.",
  "Weeks 12–13: Current affairs sweep for Jan–Dec 2026: amendments, SC judgements, summits, reports, appointments.",
  "Final week: Use only the 30 Second Revision Sheet, One Question One Trigger, and the practice questions on this page. Learn nothing new.",
  "Daily non-negotiable: the 10-question Daily MCQ set on this site, plus 10 extra Paper 1 questions (reasoning + DI), because Paper 1 is where marks are cheapest.",
];

export default function Jrf2027Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <Link href="/" className="text-sm text-purple-300 hover:underline">
        ← Back to War Room
      </Link>

      <h1 className="text-4xl font-bold mt-4 mb-2">JRF Mission: December 2026 Cycle</h1>
      <p className="text-slate-400 mb-3 max-w-3xl">
        A review of every note on this site, plus predictions for the exam expected
        around January 2027.
      </p>
      <p className="text-sm text-amber-300/90 mb-8 max-w-3xl">
        Predictions are educated guesses based on PYQ patterns and events up to 2026.
        They are not leaked or official information. Always verify dates and
        office-holders against a current source before the exam.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <Section title="🎯 Target and Score Plan" items={targetPlan} />
        <Section title="🗓️ 14-Week Plan to January" items={studyPlan} />
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-4">Review of Your Notes</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Section title="✅ Corrected on the site" items={fixesMade} accent="text-green-300" />
        <Section title="🔍 Verify these yourself" items={verifyYourself} accent="text-amber-300" />
        <Section title="🕳️ Coverage gaps" items={gaps} accent="text-red-300" />
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-4">Paper 2: Unit-wise Predictions</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {unitPredictions.map((unit) => (
          <UnitCard key={unit.unit} unit={unit} />
        ))}
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-4">Paper 1: Predictions</h2>
      <Section title="🧠 Likely Paper 1 areas" items={paper1Predictions} />

      <h2 className="text-3xl font-bold mt-10 mb-4">Predicted-Style Practice Questions</h2>
      <p className="text-slate-400 mb-2">
        To learn how to crack each format, see the{" "}
        <Link href="/question-lab" className="text-purple-300 hover:underline">
          Question Lab
        </Link>
        .
      </p>
      <p className="text-slate-400 mb-5">
        Try each one, then open the answer.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {practiceQuestions.map((q, index) => (
          <div key={q.question} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
            <p className="text-xs uppercase tracking-wide text-purple-300 font-semibold">
              Q{index + 1} • {q.format}
            </p>
            <p className="mt-2 text-slate-200 leading-relaxed">{q.question}</p>
            <details className="mt-3">
              <summary className="cursor-pointer text-green-300 font-semibold">Show answer</summary>
              <p className="mt-2 text-slate-300">{q.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </main>
  );
}

const tierStyles: Record<Tier, string> = {
  "Very Likely": "bg-red-500/20 text-red-300",
  Likely: "bg-orange-500/20 text-orange-300",
  Watch: "bg-sky-500/20 text-sky-300",
};

function UnitCard({ unit }: { unit: UnitPrediction }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <div className="flex justify-between gap-3 mb-2">
        <h3 className="text-xl font-bold text-purple-300">{unit.unit}</h3>
        <span className={`text-xs h-fit rounded-full px-3 py-1 whitespace-nowrap ${tierStyles[unit.tier]}`}>
          {unit.tier}
        </span>
      </div>
      <p className="text-sm text-slate-400 mb-4">{unit.why}</p>
      <div className="space-y-2">
        {unit.focus.map((item) => (
          <div key={item} className="rounded-xl bg-slate-950 p-3 text-slate-200">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({
  title,
  items,
  accent = "text-purple-300",
}: {
  title: string;
  items: string[];
  accent?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className={`text-2xl font-bold mb-4 ${accent}`}>{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item} className="rounded-xl bg-slate-950 p-4">
            <span className={`font-bold mr-2 ${accent}`}>{index + 1}.</span>
            <span className="text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
