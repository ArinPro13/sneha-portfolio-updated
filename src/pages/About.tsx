const timeline = [
  {
    period: '2025 – Present',
    role: 'M.Sc. Quality Management Science',
    org: 'Indian Statistical Institute, Bangalore',
    grade: '92.67%',
    desc: 'Statistical process control, operations research, multivariate data analysis, machine learning applications, and time-series analysis for data-driven decision-making.',
  },
  {
    period: 'May 2024 – Jan 2025',
    role: 'Research Associate',
    org: 'Guided by Sanjana Ghosh',
    grade: null,
    desc: 'EDA with time-series plots and t-tests on pumpkin growth parameters; fitted linear models to assess growth trends linking soil microbial activity with sustainable plant productivity.',
  },
  {
    period: 'Aug – Sept 2024',
    role: 'Content Creator',
    org: 'Cheenta Academy',
    grade: null,
    desc: 'Designed educational content for statistics, probability, and mathematics. Created and formatted problem sets using LaTeX for professional presentation.',
  },
  {
    period: '2022 – 2025',
    role: 'B.Sc. Statistics (Hons.)',
    org: "St. Xavier's College (Autonomous), Kolkata",
    grade: 'CGPA 8.03',
    desc: 'Leveraged a full spectrum of statistical methods — from foundational principles to advanced modeling — to transform complex data into real-world solutions.',
  },
  {
    period: '2022',
    role: 'Higher Secondary Examination (CBSE)',
    org: 'Aditya Academy Secondary, Barasat',
    grade: '97.8%',
    desc: 'Ranked in the Top 1% nationwide in the CBSE Board examinations.',
  },
]

const skillGroups = [
  {
    title: 'Statistical Analysis',
    skills: ['Statistical Inference', 'Probability Theory', 'Regression Modeling', 'Hypothesis Testing', 'Time-Series Analysis', 'Multivariate Analysis'],
  },
  {
    title: 'Programming',
    skills: ['R', 'Python', 'SQL', 'Minitab', 'LaTeX'],
  },
  {
    title: 'Machine Learning',
    skills: ['Predictive Modeling', 'Classification', 'EDA', 'Feature Engineering', 'Class Imbalance Handling'],
  },
  {
    title: 'Quality & Operations',
    skills: ['Statistical Process Control', 'Operations Research', 'Quality Control', 'Process Optimization'],
  },
]

export default function About() {
  return (
    <main className="min-h-screen pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-16 animate-fade-up">
          <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-2">Background</p>
          <h1 className="font-playfair text-[clamp(2.2rem,4vw,3.2rem)] text-navy leading-tight tracking-tight mb-4">
            Education &amp; Experience
          </h1>
          <div className="w-12 h-[3px] bg-gold rounded-full mb-6" />
          <p className="text-text-muted text-[16px] leading-[1.8] max-w-[560px]">
            A statistician driven by curiosity and precision — from national rank holder to
            published researcher — building expertise at the intersection of statistics, machine
            learning, and data-driven decision-making.
          </p>
        </div>

        {/* Two-col: bio + timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="animate-fade-up-1">
            <p className="text-text-muted text-[16px] leading-[1.85] mb-5">
              I am a statistician deeply passionate about uncovering patterns in data and
              translating them into real-world decisions. My academic journey — from a top CBSE
              student to a national-rank holder in competitive statistics exams — reflects a
              consistent drive for analytical excellence.
            </p>
            <p className="text-text-muted text-[16px] leading-[1.85] mb-5">
              Currently pursuing my Master's at the Indian Statistical Institute, Bangalore,
              I focus on statistical process control, multivariate analysis, time-series modeling,
              and machine learning applications.
            </p>
            <p className="text-text-muted text-[16px] leading-[1.85]">
              Beyond academics, I have served as a Core Committee Member at the Xaverian Academy
              of Dance &amp; Music (2022–2024), coordinating cultural events and workshops — a
              testament to my leadership and collaborative spirit.
            </p>
          </div>

          {/* Timeline */}
          <div className="animate-fade-up-2 relative pl-6">
            <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-navy/10 rounded-full" />
            {timeline.map((item, i) => (
              <div key={i} className="relative mb-8 last:mb-0">
                <div className="absolute -left-[25px] top-[6px] w-3 h-3 rounded-full bg-navy border-2 border-cream shadow-[0_0_0_2px_#0f1f3d]" />
                <p className="font-mono text-[10px] tracking-[0.08em] text-gold uppercase mb-1">
                  {item.period}
                </p>
                <div className="flex items-start justify-between gap-2">
                  <p className="font-[600] text-navy text-[15px] leading-snug">{item.role}</p>
                  {item.grade && (
                    <span className="shrink-0 bg-gold-light border border-gold/30 rounded-full px-2.5 py-0.5 text-[10px] font-[600] text-[#7a5a1e] font-mono">
                      {item.grade}
                    </span>
                  )}
                </div>
                <p className="text-text-muted text-[13px] mb-1.5">{item.org}</p>
                <p className="text-text-muted text-[13px] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-up-3">
          <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-2">Expertise</p>
          <h2 className="font-playfair text-[2rem] text-navy mb-2">Skills &amp; Tools</h2>
          <div className="w-12 h-[3px] bg-gold rounded-full mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white border border-navy/8 rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-200"
              >
                <p className="font-[600] text-navy text-[13px] mb-3 tracking-tight">
                  {group.title}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-cream border border-navy/10 text-text-muted text-[11px] font-[500]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
