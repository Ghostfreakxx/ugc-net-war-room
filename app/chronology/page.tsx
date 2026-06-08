export default function ChronologyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <h1 className="text-4xl font-bold mb-2">Chronology Notes</h1>
      <p className="text-slate-400 mb-8">
        High-memory order-based facts for UGC NET Political Science.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section
          title="Feminism Waves"
          items={[
            "First Wave: Legal rights, voting rights, property rights.",
            "Second Wave: Equality at workplace, family, sexuality, patriarchy.",
            "Third Wave: Diversity, identity, race, class, intersectionality.",
            "Fourth Wave: Digital feminism, online activism, #MeToo movement.",
          ]}
        />

        <Section
          title="Western Political Thought Timeline"
          items={[
            "Plato: Ideal state, justice, philosopher king.",
            "Aristotle: State as natural, constitutionalism, classification of governments.",
            "Machiavelli: Power politics, realism, statecraft.",
            "Hobbes: Social contract, absolute sovereignty.",
            "Locke: Natural rights, limited government.",
            "Rousseau: General will, popular sovereignty.",
            "Hegel: State as ethical idea.",
            "Marx: Class struggle, historical materialism.",
            "Gramsci: Hegemony and civil society.",
            "Rawls: Justice as fairness.",
            "Nozick: Minimal state and entitlement theory.",
          ]}
        />

        <Section
          title="Indian Constitutional Cases"
          items={[
            "1951: Shankari Prasad case.",
            "1965: Sajjan Singh case.",
            "1967: Golaknath case.",
            "1973: Kesavananda Bharati case and Basic Structure Doctrine.",
            "1975: Indira Gandhi vs Raj Narain.",
            "1980: Minerva Mills case.",
            "1994: S. R. Bommai case on federalism and Article 356.",
          ]}
        />

        <Section
          title="Important Constitutional Amendments"
          items={[
            "1st Amendment: 1951, reasonable restrictions and land reform protection.",
            "42nd Amendment: 1976, called mini Constitution.",
            "44th Amendment: 1978, restored civil liberties after Emergency.",
            "52nd Amendment: 1985, anti-defection law.",
            "61st Amendment: 1988, voting age reduced from 21 to 18.",
            "73rd Amendment: Panchayati Raj.",
            "74th Amendment: Urban local bodies.",
            "86th Amendment: Right to education.",
            "101st Amendment: GST.",
            "103rd Amendment: EWS reservation.",
          ]}
        />

        <Section
          title="Indian Political Thinkers"
          items={[
            "Raja Ram Mohan Roy: Liberal reform, social reform.",
            "Dayanand Saraswati: Revivalism and Arya Samaj.",
            "Vivekananda: Spiritual nationalism.",
            "Gandhi: Non-violence, satyagraha, swaraj.",
            "Ambedkar: Social justice, annihilation of caste, constitutionalism.",
            "Nehru: Democratic socialism, secularism, planning.",
            "Lohia: Socialism and anti-Congressism.",
            "Jayaprakash Narayan: Total revolution.",
          ]}
        />

        <Section
          title="International Relations Theory Order"
          items={[
            "Classical Realism: Morgenthau, power and human nature.",
            "Neo-realism: Kenneth Waltz, structure and anarchy.",
            "Liberalism: Cooperation, institutions, interdependence.",
            "Neo-liberal Institutionalism: Keohane and Nye.",
            "Constructivism: Wendt, identity and ideas.",
            "Dependency Theory: Underdevelopment caused by unequal global structure.",
            "World System Theory: Wallerstein, core, semi-periphery, periphery.",
          ]}
        />

       <Section
  title="Paper 1 Research Methodology Traps"
  items={[
    "Research Problem: The first serious step. It decides what the study is about.",
    "Literature Review: Used to find research gaps, not just to collect definitions.",
    "Hypothesis: A tentative statement to be tested. It is not the final conclusion.",
    "Variable: Anything that can change or be measured. Example: income, age, attitude, score.",
    "Independent Variable: The cause or factor that influences another variable.",
    "Dependent Variable: The effect or outcome being studied.",
    "Validity: Whether the tool measures what it is supposed to measure.",
    "Reliability: Whether the result remains consistent when repeated.",
    "Sampling: Selecting a smaller group from a larger population.",
    "Research Ethics: Consent, privacy, honesty, no plagiarism, and no manipulation of data.",
  ]}
/>

<Section
  title="Paper 1 Teaching Aptitude Traps"
  items={[
    "Formative Evaluation: Done during the learning process to improve teaching and learning.",
    "Summative Evaluation: Done at the end of a course, unit, or semester.",
    "Diagnostic Evaluation: Used to identify learning problems and weaknesses.",
    "Remedial Teaching: Done after diagnosing weakness to correct learning gaps.",
    "Learner-Centred Teaching: Focuses on student participation, activity, and understanding.",
    "Teacher-Centred Teaching: Teacher dominates the classroom and students mostly receive information.",
    "Micro Teaching: Small teaching practice using one skill at a time.",
    "Bloom’s Taxonomy Order: Remember, Understand, Apply, Analyze, Evaluate, Create.",
    "Teaching Aid: Any material or tool used to make learning easier.",
    "Feedback: Information given to improve performance. It is not the same as final marks.",
  ]}
/>

<Section
  title="Paper 1 ICT Traps"
  items={[
    "RAM: Temporary memory. Data is lost when power is off.",
    "ROM: Permanent memory. Used to store essential instructions.",
    "Hardware: Physical parts of a computer like keyboard, monitor, CPU, and mouse.",
    "Software: Programs and instructions that run on a computer.",
    "HTTP: Protocol used for communication on the web.",
    "HTTPS: More secure version of HTTP because it uses encryption.",
    "URL: The address of a web page.",
    "HTML: Language used to structure web pages.",
    "IP Address: Unique address used to identify a device on a network.",
    "Malware: General term for harmful software.",
    "Virus: A type of malware that attaches to files and spreads.",
    "Phishing: Fraud attempt using fake links, messages, or websites to steal information.",
    "Firewall: Security system that monitors and controls network traffic.",
    "Cloud Storage: Saving data on internet-based servers instead of only on a local device.",
    "E-mail Trap: CC is visible to all recipients. BCC hides recipients from each other.",
  ]}
/>
      </div>
    </main>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h2 className="text-2xl font-bold mb-4 text-purple-300">{title}</h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={item} className="rounded-xl bg-slate-950 p-4">
            <span className="text-purple-300 font-bold mr-2">{index + 1}.</span>
            <span className="text-slate-200">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}