import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="min-h-screen pt-[60px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-8 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Status pill */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 bg-gold-light border border-gold/30 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-mono text-[10px] tracking-[0.1em] text-[#7a5a1e] uppercase">
              Open to research &amp; collaboration
            </span>
          </div>

          <h1 className="animate-fade-up-1 font-playfair text-[clamp(2.8rem,5vw,4rem)] leading-[1.08] tracking-tight text-navy mb-5">
            Sneha Pal —{' '}
            <em className="italic text-gold not-italic" style={{ fontStyle: 'italic' }}>
              Statistician
            </em>
            {' '}&amp;{' '}
            <span className="block">Data Scientist</span>
          </h1>

          <p className="animate-fade-up-2 text-[17px] text-text-muted leading-[1.8] max-w-[480px] mb-8">
            Pursuing M.Sc. in Quality Management Science at ISI Bangalore (AIR 8).
            Transforming complex data into impactful, interpretable insights through
            statistical modeling, machine learning, and rigorous inference.
          </p>

          <div className="animate-fade-up-3 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="px-7 py-3.5 rounded-full bg-navy text-cream text-sm font-[500] tracking-wide hover:bg-navy-mid transition-all duration-200 hover:-translate-y-px"
            >
              View Projects
            </Link>
            <a
              href="/resume.pdf"
              download
              className="px-7 py-3.5 rounded-full border-[1.5px] border-navy text-navy text-sm font-[500] tracking-wide hover:bg-navy hover:text-cream transition-all duration-200"
            >
              Download CV
            </a>
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full text-text-muted text-sm font-[500] tracking-wide hover:text-navy transition-colors duration-200 underline underline-offset-4 decoration-gold/60"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Right — stat cards */}
        <div className="animate-fade-up-2 flex flex-col gap-4">
          {/* Rankings */}
          <div className="rounded-2xl bg-navy text-cream p-6 grid grid-cols-3 gap-4">
            {[
              { num: '8', label: 'AIR · ISI MSQMS' },
              { num: '102', label: 'AIR · JAM Math Stat' },
              { num: '1%', label: 'Top · CBSE 97.8%' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <span className="font-playfair text-[2.2rem] text-gold leading-none block mb-1">
                  {num}
                </span>
                <span className="font-mono text-[9px] tracking-[0.08em] text-white/55 uppercase leading-tight block">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Skills */}
          <div className="rounded-2xl bg-white border border-navy/8 p-5">
            <p className="font-mono text-[9px] tracking-[0.12em] text-text-muted uppercase mb-3">
              Technical Arsenal
            </p>
            <div className="flex flex-wrap gap-2">
              {['R', 'Python', 'SQL', 'Minitab', 'Machine Learning', 'Statistical Inference', 'Quality Control', 'Operations Research', 'LaTeX'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-cream border border-navy/10 text-text-muted text-[12px] font-[500]"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Current position */}
          <div className="rounded-2xl bg-white border border-navy/8 p-5 flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] tracking-[0.12em] text-text-muted uppercase mb-1">
                Currently At
              </p>
              <p className="font-[600] text-navy text-[15px]">Indian Statistical Institute</p>
              <p className="text-text-muted text-[13px]">Bangalore · 2025–Present</p>
            </div>
            <div className="bg-gold-light border border-gold/30 rounded-full px-3 py-1.5">
              <span className="font-mono text-[11px] font-[600] text-[#7a5a1e]">92.67%</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
