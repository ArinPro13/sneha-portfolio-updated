import { useState } from 'react'

type Category = 'All' | 'Machine Learning' | 'Research' | 'Statistical Analysis'

interface Project {
  title: string
  category: Category
  subcategory: string
  desc: string
  methods: string[]
  github?: string
  highlight?: boolean
}

const projects: Project[] = [
  {
    title: 'CTR Predictive Modeling & Analysis',
    category: 'Machine Learning',
    subcategory: 'Logistic Regression · Ad Targeting',
    desc: 'Developed a logistic regression model to predict ad-click behavior using user demographics and site activity. Performed EDA to analyze feature distributions, outliers, and multicollinearity, guiding feature selection. Validated model insights with qualitative survey data to improve AI-driven ad targeting and campaign optimization.',
    methods: ['Logistic Regression', 'EDA', 'Feature Selection', 'Multicollinearity Analysis', 'Survey Validation'],
    github: 'https://github.com/snehapal4559-hub/CTR-Prediction-Model',
    highlight: true,
  },
  {
    title: 'Credit Risk Scoring Model',
    category: 'Machine Learning',
    subcategory: 'Classification · Risk Modeling',
    desc: 'Created a machine learning model to forecast the likelihood of loan default based on borrower and loan attributes. Ensured that credit risk forecasts were interpretable and addressed class imbalance for reliable, actionable assessments.',
    methods: ['Classification', 'Class Imbalance', 'Model Interpretability', 'Risk Modeling'],
    github: '#',
  },
  {
    title: 'Pumpkin Growth & Soil Microbial Analysis',
    category: 'Research',
    subcategory: 'Environmental Statistics · Time-Series',
    desc: 'EDA using time-series plots and t-tests on pumpkin growth parameters. Fitted linear models to assess growth trends, linking soil microbial activity with sustainable plant productivity and ecosystem conservation.',
    methods: ['Linear Regression', 'Time-Series EDA', 't-Tests', 'Environmental Statistics'],
    github: 'https://github.com/snehapal4559-hub/Pumpkin-Growth-Analysis',
    highlight: false,
  },
]

const categories: Category[] = ['All', 'Machine Learning', 'Research', 'Statistical Analysis']

export default function Projects() {
  const [active, setActive] = useState<Category>('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <main className="min-h-screen pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-2">Portfolio</p>
          <h1 className="font-playfair text-[clamp(2.2rem,4vw,3.2rem)] text-navy leading-tight tracking-tight mb-4">
            Selected Projects
          </h1>
          <div className="w-12 h-[3px] bg-gold rounded-full mb-6" />
          <p className="text-text-muted text-[16px] leading-[1.8] max-w-[520px]">
            Statistical and machine learning projects spanning predictive modeling, environmental
            research, and credit risk analysis.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="animate-fade-up-1 flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-[11px] font-[500] tracking-[0.06em] border transition-all duration-200 ${
                active === cat
                  ? 'bg-navy text-cream border-navy'
                  : 'bg-transparent text-text-muted border-navy/20 hover:border-navy/50 hover:text-navy'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project cards */}
        <div className="animate-fade-up-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-3 text-center py-16 text-text-muted text-[15px]">
              No projects in this category yet.
            </div>
          )}
        </div>

        {/* Bottom note */}
        <div className="animate-fade-up-3 mt-16 p-6 rounded-2xl bg-navy/4 border border-navy/8 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="currentColor" className="text-navy/50"/>
            </svg>
          </div>
          <p className="text-text-muted text-[14px] leading-[1.6]">
            More projects are available on GitHub. Connect or reach out to explore collaborations
            on statistical research and data science work.
          </p>
        </div>
      </div>
    </main>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white border border-navy/8 rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(15,31,61,0.07)] transition-all duration-300">
      <p className="font-mono text-[9px] tracking-[0.1em] text-gold uppercase mb-1">{project.subcategory}</p>
      <h3 className="font-[600] text-navy text-[16px] leading-snug mb-3">{project.title}</h3>
      <p className="text-text-muted text-[13px] leading-[1.65] flex-1">{project.desc}</p>

      {/* Method tags */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.methods.map((m) => (
          <span
            key={m}
            className="px-2.5 py-1 rounded-full bg-[#dbeafe] text-[#1e40af] text-[10px] font-[500]"
          >
            {m}
          </span>
        ))}
      </div>

      {/* Footer */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 pt-4 border-t border-navy/8 flex items-center gap-1.5 text-[12px] font-[500] text-text-muted hover:text-navy transition-colors duration-200"
        >
          View on GitHub
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1 10L10 1M10 1H4M10 1v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  )
}
