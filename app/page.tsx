"use client";

import { useMemo, useState, type ReactNode } from "react";

type PYQNote = {
  year: string;
  unit: string;
  title: string;
  memory: string;
  trap: string;
  importance: string;
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [search, setSearch] = useState("");
  const [unitFilter, setUnitFilter] = useState("All");

  const sections = [
    "Dashboard",
    "PYQ Notes",
    "Topic Notes",
    "Trap Notes",
    "Prediction Notes",
  ];

  const pyqNotes: PYQNote[] = [
    {
      year: "2025",
      unit: "International Relations",
      title: "Realism in International Relations",
      memory:
        "Realism sees international politics as a struggle for power among states. It focuses on national interest, security, military strength, and survival.",
      trap:
        "Do not confuse Classical Realism with Neo-realism. Morgenthau focuses on human nature, while Waltz focuses on the international system.",
      importance: "Very Important",
    },
    {
      year: "2024",
      unit: "Indian Government and Politics",
      title: "Federalism in India",
      memory:
        "Indian federalism has both federal and unitary features. The Constitution divides powers between Union, State, and Concurrent Lists.",
      trap:
        "India is not a pure federation like the USA. It is often called quasi-federal or federation with a strong centre.",
      importance: "Very Important",
    },
    {
      year: "2021",
      unit: "Political Theory",
      title: "Rawls and Justice as Fairness",
      memory:
        "John Rawls is linked with justice as fairness, original position, veil of ignorance, and the difference principle.",
      trap:
        "Do not confuse Rawls with Nozick. Rawls supports distributive justice, while Nozick supports minimal state and entitlement theory.",
      importance: "Very Important",
    },
    {
      year: "2020",
      unit: "Comparative Politics",
      title: "Behaviouralism vs Post-behaviouralism",
      memory:
        "Behaviouralism focuses on facts, observation, scientific method, and value-neutral study. Post-behaviouralism demands relevance and action.",
      trap:
        "Behaviouralism asks for scientific neutrality. Post-behaviouralism says political science must also respond to social problems.",
      importance: "High",
    },
    {
      year: "2018",
      unit: "Political Theory",
      title: "Plato’s Ideal State",
      memory:
        "Plato’s ideal state is based on justice, division of labour, philosopher king, and harmony among classes.",
      trap:
        "Plato is idealist. Aristotle is more empirical and practical. Do not mix their approaches.",
      importance: "High",
    },
    {
      year: "2024",
      unit: "Political Theory",
      title: "Nozick and Minimal State",
      memory:
        "Robert Nozick is linked with libertarianism, minimal state, entitlement theory, and criticism of redistributive justice.",
      trap:
        "Nozick is not a welfare state thinker. He attacks patterned distribution and defends individual rights.",
      importance: "High",
    },
    {
      year: "2025",
      unit: "Indian Government and Politics",
      title: "Basic Structure Doctrine",
      memory:
        "The basic structure doctrine limits Parliament’s amending power. It came from the Kesavananda Bharati case of 1973.",
      trap:
        "Parliament can amend the Constitution, but it cannot destroy its basic structure.",
      importance: "Very Important",
    },
    {
      year: "2024",
      unit: "Public Administration",
      title: "New Public Administration",
      memory:
        "New Public Administration focuses on social equity, change, relevance, and citizen-oriented administration.",
      trap:
        "Traditional public administration is efficiency-oriented. New Public Administration is value and equity-oriented.",
      importance: "High",
    },
    {
      year: "2021",
      unit: "International Relations",
      title: "Neo-realism",
      memory:
        "Neo-realism was developed by Kenneth Waltz. It explains state behaviour through the structure of the international system.",
      trap:
        "Classical realism focuses on human nature. Neo-realism focuses on system structure and anarchy.",
      importance: "High",
    },
    {
      year: "2020",
      unit: "Political Theory",
      title: "Gramsci and Hegemony",
      memory:
        "Antonio Gramsci used the idea of hegemony to explain how ruling classes maintain control through consent and ideology.",
      trap:
        "Hegemony is not only force. It is domination through culture, education, religion, and common sense.",
      importance: "Very Important",
    },
    {
      year: "2018",
      unit: "Indian Government and Politics",
      title: "Judicial Review",
      memory:
        "Judicial review allows courts to examine whether laws and executive actions are constitutional.",
      trap:
        "Judicial review is not the same as judicial activism. Review is constitutional checking, activism is a more active judicial role.",
      importance: "High",
    },
    {
      year: "2025",
      unit: "Research Methodology",
      title: "Hypothesis",
      memory:
        "A hypothesis is a tentative statement or assumption that is tested through research.",
      trap:
        "A hypothesis is not the final answer. It is tested using evidence and method.",
      importance: "Very Important",
    },
    {
      year: "2024",
      unit: "Comparative Politics",
      title: "Political Culture",
      memory:
        "Political culture means the attitudes, beliefs, values, and orientations of people toward politics.",
      trap:
        "Political culture is about people’s attitudes. Political socialization is the process through which those attitudes are learned.",
      importance: "High",
    },
    {
      year: "2021",
      unit: "Political Theory",
      title: "Liberty",
      memory:
        "Liberty means freedom. Negative liberty means absence of restraint. Positive liberty means capacity to develop oneself.",
      trap:
        "Negative liberty asks for non-interference. Positive liberty asks for enabling conditions.",
      importance: "Very Important",
    },
    {
      year: "2020",
      unit: "Indian Government and Politics",
      title: "Pressure Groups",
      memory:
        "Pressure groups influence public policy without directly contesting elections for power.",
      trap:
        "Political parties seek power. Pressure groups seek influence over power.",
      importance: "High",
    },
    {
      year: "2018",
      unit: "International Relations",
      title: "Dependency Theory",
      memory:
        "Dependency theory argues that underdevelopment is produced by the unequal relationship between core and peripheral countries.",
      trap:
        "It rejects the idea that poor countries are poor only because of internal weakness.",
      importance: "High",
    },
    {
      year: "2025",
      unit: "Political Theory",
      title: "Feminism",
      memory:
        "Feminism studies patriarchy, gender inequality, women’s rights, representation, and the politics of private and public life.",
      trap:
        "Liberal feminism seeks equality within the existing system. Radical feminism attacks patriarchy at its root.",
      importance: "Very Important",
    },
    {
      year: "2024",
      unit: "Public Administration",
      title: "Good Governance",
      memory:
        "Good governance includes transparency, accountability, rule of law, participation, responsiveness, and efficiency.",
      trap:
        "Good governance is not only about economic growth. It also includes ethics, rights, and citizen participation.",
      importance: "Very Important",
    },
    {
      year: "2021",
      unit: "Political Theory",
      title: "Marx and Class Struggle",
      memory:
        "Marx explains history through class struggle between those who own the means of production and those who sell labour.",
      trap:
        "Marx is not mainly about charity for workers. His theory is about structural exploitation and class power.",
      importance: "Very Important",
    },
    {
      year: "2020",
      unit: "Comparative Politics",
      title: "Political Development",
      memory:
        "Political development refers to institutional growth, political participation, legitimacy, capacity, and modernization.",
      trap:
        "Do not reduce political development to economic development only.",
      importance: "Medium",
    },
    {
      year: "2018",
      unit: "Indian Government and Politics",
      title: "Directive Principles of State Policy",
      memory:
        "DPSPs are non-justiciable guidelines for the state to establish social and economic democracy.",
      trap:
        "Fundamental Rights are justiciable. DPSPs are not directly enforceable in court.",
      importance: "Very Important",
    },
    {
      year: "2025",
      unit: "Research Methodology",
      title: "Qualitative Research",
      memory:
        "Qualitative research studies meaning, experience, behaviour, context, and interpretation using interviews, observation, and documents.",
      trap:
        "Qualitative research is not weak research. It is suitable when depth and meaning are more important than numerical measurement.",
      importance: "High",
    },
    {
      year: "2024",
      unit: "International Relations",
      title: "Soft Power",
      memory:
        "Soft power means the ability to influence others through attraction, culture, values, diplomacy, and legitimacy.",
      trap:
        "Hard power uses military and economic coercion. Soft power uses attraction and persuasion.",
      importance: "High",
    },
    {
      year: "2021",
      unit: "Political Theory",
      title: "Machiavelli",
      memory:
        "Machiavelli separated politics from morality and focused on power, statecraft, security, and practical rule.",
      trap:
        "Machiavelli is not an idealist like Plato. He is a realist thinker of power politics.",
      importance: "High",
    },
  ];

  const topicNotes = [
    "Political Theory: Revise Plato, Aristotle, Machiavelli, Hobbes, Locke, Rousseau, Marx, Gramsci, Rawls, Nozick, feminism, liberty, equality, justice, rights, democracy, and power.",
    "Indian Government and Politics: Focus on Constitution, federalism, Parliament, judiciary, executive, election commission, pressure groups, party system, social movements, and local government.",
    "International Relations: Focus on realism, neo-realism, liberalism, constructivism, dependency theory, world system theory, balance of power, collective security, soft power, and India’s foreign policy.",
    "Public Administration: Focus on bureaucracy, scientific management, human relations theory, New Public Administration, New Public Management, good governance, accountability, public policy, and e-governance.",
    "Comparative Politics: Focus on political culture, political socialization, political development, modernization, dependency, state, civil society, revolution, and democratic transition.",
    "Research Methodology: Focus on hypothesis, variables, sampling, qualitative method, quantitative method, case study, survey, observation, interview, validity, reliability, and ethics.",
    "Indian Political Thought: Focus on Gandhi, Ambedkar, Nehru, Tagore, Savarkar, Lohia, Aurobindo, Phule, Periyar, and modern debates on caste, nationalism, and democracy.",
    "Western Political Thought: Focus on thinker-to-concept matching. Plato means ideal state. Aristotle means constitutionalism. Machiavelli means power. Hobbes means sovereignty. Locke means rights. Rousseau means general will.",
    "Current Trend: NTA is moving from direct memory questions to statement-based and application-based questions. Learn concepts, not only facts.",
    "High-Risk Area: Books, authors, committees, chronology, articles, amendments, and landmark cases must be revised carefully.",
  ];

  const trapNotes = [
    "Rawls vs Nozick: Rawls means justice as fairness and redistribution. Nozick means minimal state and entitlement theory.",
    "Morgenthau vs Waltz: Morgenthau is classical realism and human nature. Waltz is neo-realism and international structure.",
    "Behaviouralism vs Post-behaviouralism: Behaviouralism means scientific neutrality. Post-behaviouralism means relevance and action.",
    "Plato vs Aristotle: Plato is idealist. Aristotle is empirical and practical.",
    "Negative Liberty vs Positive Liberty: Negative liberty means absence of restraint. Positive liberty means capacity for self-development.",
    "Political Party vs Pressure Group: Party seeks political power. Pressure group seeks influence over policy.",
    "Judicial Review vs Judicial Activism: Review checks constitutionality. Activism means an active role of judiciary in policy and rights.",
    "Fundamental Rights vs DPSP: Fundamental Rights are justiciable. DPSPs are non-justiciable but important for welfare state.",
    "Liberal Feminism vs Radical Feminism: Liberal feminism seeks legal equality. Radical feminism attacks patriarchy itself.",
    "Hard Power vs Soft Power: Hard power uses force or money. Soft power uses culture, attraction, values, and diplomacy.",
    "Classical Liberalism vs Modern Liberalism: Classical liberalism supports limited state. Modern liberalism accepts welfare state.",
    "Marx vs Weber: Marx focuses on class and economy. Weber focuses on authority, bureaucracy, status, and legitimacy.",
    "Power vs Authority: Power may use force. Authority is accepted as legitimate.",
    "State vs Government: State is permanent. Government changes.",
    "Nation vs State: Nation is cultural or identity-based. State is political and legal.",
    "Qualitative vs Quantitative: Qualitative studies meaning and depth. Quantitative studies numbers and measurement.",
    "Validity vs Reliability: Validity asks whether we measure the right thing. Reliability asks whether results are consistent.",
    "Federalism vs Decentralization: Federalism is constitutional division of power. Decentralization is transfer of power to lower levels.",
    "Public Administration vs Public Policy: Administration implements. Policy decides goals and direction.",
    "Modernization Theory vs Dependency Theory: Modernization blames internal backwardness. Dependency blames unequal global structure.",
  ];

  const predictionNotes = [
    "Dec 2026 cycle (exam ~Jan 2027) will likely keep the statement-based, match-list and chronology formats. Direct one-line memory questions keep shrinking.",
    "Political Theory and Indian Government will remain high-value areas.",
    "International Relations may include current global issues with theory-based framing.",
    "Research Methodology can appear indirectly through political analysis questions.",
    "Chronology, committees, books, and thinkers must be revised carefully.",
    "NTA may ask more application questions like: what would an administrator, officer, court, or state do in a situation?",
    "Federalism, governance, public policy, and constitutional morality are likely to remain important.",
    "Thinker comparison questions will be dangerous: Rawls vs Nozick, Marx vs Weber, Morgenthau vs Waltz, Plato vs Aristotle.",
    "Indian Political Thought may become more important because it connects theory, nationalism, caste, democracy, and social justice.",
    "Paper 2 may continue mixing traditional Political Science with current governance issues.",
    "Do not depend only on coaching mocks. PYQs must be converted into memory notes and trap notes.",
    "Your safest strategy is concept clarity plus elimination method, not blind memorization.",
    "Constitutional changes since 2024 are prime statement-question material: One Nation One Election (129th Bill), 130th Amendment Bill, Governor's assent, delimitation after Census 2027.",
    "India's Foreign Policy is your thinnest unit in these notes. Operation Sindoor, the Indus Waters Treaty, BRICS 2026 and MAHASAGAR are likely hooks.",
  ];

  const units = ["All", ...Array.from(new Set(pyqNotes.map((note) => note.unit)))];

  const filteredPYQNotes = useMemo(() => {
    return pyqNotes.filter((note) => {
      const text = `${note.year} ${note.unit} ${note.title} ${note.memory} ${note.trap} ${note.importance}`.toLowerCase();
      const matchesSearch = text.includes(search.toLowerCase());
      const matchesUnit = unitFilter === "All" || note.unit === unitFilter;
      return matchesSearch && matchesUnit;
    });
  }, [search, unitFilter]);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="flex min-h-screen">
        <aside className="w-72 border-r border-slate-800 bg-slate-900/70 p-6 hidden md:block">
          <div className="mb-10">
            <h1 className="text-3xl font-bold tracking-wide">UGC NET</h1>
            <p className="text-sm text-slate-300 mt-1">Political Science</p>
            <p className="text-purple-400 font-semibold mt-1">War Room</p>
          </div>

          <nav className="space-y-3">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`w-full text-left px-4 py-3 rounded-xl transition ${
                  activeSection === section
                    ? "bg-fuchsia-600 text-white"
                    : "bg-slate-800/50 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {section}
              </button>
            ))}
          </nav>

          <div className="mt-12 rounded-2xl border border-purple-500/40 p-5 bg-slate-950">
            <p className="text-purple-300 text-3xl">“</p>
            <p className="font-semibold text-lg">
              Discipline today, success tomorrow.
            </p>
            <p className="text-sm text-slate-400 mt-3">Stay consistent.</p>
          </div>
        </aside>

        <section className="flex-1 p-5 md:p-10 overflow-hidden">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
             Welcome to the UGC NET Political Science War Room
            </h2>
            <p className="text-slate-400 mt-2">
              UGC NET Political Science Seig HEil
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 mb-8">
            <Card title="PYQ Notes" value={`${pyqNotes.length} notes`} icon="📄" />
            <Card title="Topic Notes" value={`${topicNotes.length} notes`} icon="📚" />
            <Card title="Trap Notes" value={`${trapNotes.length} traps`} icon="⚠️" />
            <a
  href="/jrf-2027"
  className="rounded-2xl border border-fuchsia-500/60 bg-slate-900/70 p-5 flex flex-col justify-center hover:border-fuchsia-400 transition"
>
  <div className="text-4xl mb-4">🎯</div>
  <h3 className="text-xl font-bold">JRF Jan 2027</h3>
  <p className="text-slate-400 mt-1">Review + predictions</p>
</a>
            <Card title="Memory Bank" value="Active" icon="🧠" />
            
          <a
  href="/paper2"
  className="block rounded-2xl border border-slate-700 bg-slate-900 p-5 hover:bg-slate-800"
>
  <div className="text-3xl">📚</div>
  <div className="mt-3 text-lg font-bold text-white">Paper 2</div>
  <div className="text-sm text-slate-400">Political Science</div>
</a>

<a
  href="/paper1"
  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 flex flex-col justify-center hover:border-fuchsia-500 transition"
>
  <div className="text-4xl mb-4">🧠</div>

  <h3 className="text-xl font-bold">Paper 1</h3>

  <p className="text-slate-400 mt-1">
    Teaching and research aptitude
  </p>
</a>
</div>

          {activeSection === "Dashboard" && (
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
              <Panel title="Recent PYQ Notes">
                {pyqNotes.slice(0, 7).map((note) => (
                  <SmallNote key={`${note.year}-${note.title}`} note={note} />
                ))}
              </Panel>

              <Panel title="Most Important Units">
                <NumberList
                  items={[
                    "Political Theory",
                    "Indian Government and Politics",
                    "International Relations",
                    "Public Administration",
                    "Research Methodology",
                    "Comparative Politics",
                    "Indian Political Thought",
                    "Western Political Thought",
                  ]}
                />
              </Panel>

              <Panel title="Dec 2026 Cycle Focus">
                <NumberList items={predictionNotes.slice(0, 8)} />
              </Panel>
            </div>
          )}

          {activeSection === "PYQ Notes" && (
            <Panel title="PYQ Notes Memory Bank">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-6">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search Rawls, federalism, realism..."
                  className="lg:col-span-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                />

                <select
                  value={unitFilter}
                  onChange={(event) => setUnitFilter(event.target.value)}
                  className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-fuchsia-500"
                >
                  {units.map((unit) => (
                    <option key={unit} value={unit}>
                      {unit}
                    </option>
                  ))}
                </select>
              </div>

              <p className="text-slate-400 mb-5">
                Showing {filteredPYQNotes.length} of {pyqNotes.length} PYQ memory
                notes.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {filteredPYQNotes.map((note) => (
                  <BigPYQCard key={`${note.year}-${note.title}`} note={note} />
                ))}
              </div>
            </Panel>
          )}

          {activeSection === "Topic Notes" && (
            <Panel title="Topic Notes">
              <NumberList items={topicNotes} />
            </Panel>
          )}

          {activeSection === "Trap Notes" && (
            <Panel title="Trap Notes">
              <NumberList items={trapNotes} />
            </Panel>
          )}

          {activeSection === "Prediction Notes" && (
            <Panel title="Prediction Notes">
              <NumberList items={predictionNotes} />
            </Panel>
          )}
        </section>
      </div>
    </main>
  );
}

function Card({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-black/20">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-400 mt-1">{value}</p>
    </div>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-black/20">
      <h3 className="text-2xl font-bold mb-5">{title}</h3>
      {children}
    </div>
  );
}

function SmallNote({ note }: { note: PYQNote }) {
  return (
    <div className="border-b border-slate-800 pb-4 mb-4 last:border-0">
      <div className="flex justify-between gap-3">
        <div>
          <p className="font-semibold">{note.title}</p>
          <p className="text-sm text-slate-400">
            {note.year} • {note.unit}
          </p>
        </div>
        <span className="text-xs h-fit rounded-full bg-purple-500/20 text-purple-300 px-3 py-1 whitespace-nowrap">
          {note.importance}
        </span>
      </div>
    </div>
  );
}

function BigPYQCard({ note }: { note: PYQNote }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-5">
      <div className="flex justify-between gap-3 mb-3">
        <div>
          <p className="text-sm text-purple-300 font-semibold">{note.year}</p>
          <h4 className="text-xl font-bold">{note.title}</h4>
          <p className="text-sm text-slate-400">{note.unit}</p>
        </div>
        <span className="text-xs h-fit rounded-full bg-orange-500/20 text-orange-300 px-3 py-1 whitespace-nowrap">
          {note.importance}
        </span>
      </div>

      <div className="mt-4">
        <p className="text-green-300 font-semibold">Memory Note</p>
        <p className="text-slate-300 mt-1 leading-relaxed">{note.memory}</p>
      </div>

      <div className="mt-4">
        <p className="text-red-300 font-semibold">Exam Trap</p>
        <p className="text-slate-300 mt-1 leading-relaxed">{note.trap}</p>
      </div>
    </div>
  );
}

function NumberList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={`${index}-${item}`} className="rounded-xl bg-slate-950 p-4">
          <span className="text-purple-300 font-bold mr-2">{index + 1}.</span>
          <span className="text-slate-200 leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}