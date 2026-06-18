export default function Paper1Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
      <h1 className="text-4xl font-bold mb-2">Paper 1 Notes</h1>
      <p className="text-slate-400 mb-8">
        Quick revision notes for UGC NET Paper 1.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Section
          title="Teaching Aptitude"
          items={[
            "Teaching means planned interaction between teacher and learner.",
            "Learner-centred teaching is more important than teacher-centred teaching.",
            "Good teaching includes planning, communication, interaction, evaluation, and feedback.",
            "Formative evaluation is done during learning. Summative evaluation is done at the end.",
            "Remedial teaching is used after identifying learning weakness.",
          ]}
        />

        <Section
          title="Research Aptitude"
          items={[
            "Research means systematic search for knowledge.",
            "Basic research develops theory. Applied research solves practical problems.",
            "Qualitative research studies meaning and depth. Quantitative research studies numbers and measurement.",
            "Hypothesis is a tentative statement tested by research.",
            "Review of literature helps identify research gaps.",
          ]}
        />

        <Section
          title="Communication"
          items={[
            "Communication means transmission of meaning from sender to receiver.",
            "Elements: sender, message, medium, receiver, feedback, noise.",
            "Verbal communication uses words. Non-verbal communication uses gestures, signs, posture, and facial expression.",
            "Effective communication requires clarity, feedback, listening, and proper medium.",
            "Noise is any barrier that disturbs communication.",
          ]}
        />
<Section
  title="Higher Education Chronology War Room"
  items={[
    "1813 → Charter Act",
    "1835 → Macaulay's Minute",
    "1854 → Wood's Dispatch",
    "1857 → Universities of Calcutta, Bombay and Madras",
    "1882 → Hunter Commission",
    "1902 → Universities Commission",
    "1904 → Indian Universities Act",
    "1917 → Sadler Commission",
    "1929 → Hartog Committee",
    "1948 → Radhakrishnan Commission",
    "1952-53 → Mudaliar Commission",
    "1953 → UGC Established",
    "1956 → UGC Act",
    "1961 → NCERT",
    "1964-66 → Kothari Commission",
    "1968 → National Education Policy",
    "1976 → Education moved to Concurrent List",
    "1986 → National Policy on Education",
    "2020 → National Education Policy 2020",
  ]}
/>
        <Section
          title="ICT"
          items={[
            "ICT means Information and Communication Technology.",
            "Internet, email, digital library, online class, LMS, and smart classroom are ICT tools.",
            "URL means Uniform Resource Locator.",
            "HTTP means Hyper Text Transfer Protocol.",
            "Cyber security means protecting digital systems, data, and users from attacks.",
          ]}
        />
<Section
  title="Constitutional Bodies Quick Revision"
  items={[
    "UPSC → Constitutional Body",
    "State Public Service Commission → Constitutional Body",
    "Election Commission → Constitutional Body",
    "Finance Commission → Constitutional Body",
    "Attorney General of India → Constitutional Body",
    "Advocate General of State → Constitutional Body",
    "CAG → Constitutional Body",
    "NITI Aayog → Non-Constitutional Body",
    "CBI → Non-Constitutional Body",
    "NHRC → Statutory Body",
  ]}
/>
        <Section
          title="Higher Education"
          items={[
            "UGC regulates and maintains standards of higher education in India.",
            "NAAC assesses and accredits higher education institutions.",
            "NIRF ranks institutions in India.",
            "NEP 2020 promotes multidisciplinary education, flexibility, skill, and research.",
            "MOOCs are online courses available for large numbers of learners.",
          ]}
        />

        <Section
          title="People and Environment"
          items={[
            "Sustainable development means meeting present needs without harming future generations.",
            "Greenhouse gases include carbon dioxide, methane, nitrous oxide, and water vapour.",
            "Global warming means rise in average earth temperature.",
            "Biodiversity means variety of living organisms.",
            "Environmental protection is linked with climate justice and intergenerational equity.",
          ]}
        />

        <Section
          title="Logical Reasoning"
          items={[
            "Deductive reasoning moves from general to particular.",
            "Inductive reasoning moves from particular to general.",
            "An argument has premises and conclusion.",
            "A valid argument means conclusion logically follows from premises.",
            "Fallacy means error in reasoning.",
          ]}
        />

        <Section
          title="Data Interpretation"
          items={[
            "Read the title of the table or graph first.",
            "Check units carefully before calculation.",
            "For percentage increase: difference divided by original value × 100.",
            "For average: total divided by number of items.",
            "Do not rush. Most DI mistakes come from wrong reading, not difficult maths.",
          ]}
        />

        <Section
          title="Mathematical Reasoning"
          items={[
            "Percentage means value per hundred.",
            "Ratio compares two quantities.",
            "Profit = Selling Price minus Cost Price.",
            "Loss = Cost Price minus Selling Price.",
            "Simple Interest = Principal × Rate × Time divided by 100.",
          ]}
        />

        <Section
          title="Paper 1 Exam Strategy"
          items={[
            "Do not leave easy theory questions.",
            "Attempt reasoning and DI carefully, not emotionally.",
            "Skip difficult maths first and return later.",
            "Use elimination method when confused.",
            "Since there is no negative marking, attempt all questions.",
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