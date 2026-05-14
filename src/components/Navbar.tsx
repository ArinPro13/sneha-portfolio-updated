import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'ABOUT', to: '/about' },
  { label: 'PROJECTS', to: '/projects' },
  { label: 'CONTACT', to: '/contact' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-[rgba(15,31,61,0.08)]">
      <nav className="max-w-[1200px] mx-auto px-8 h-[60px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <NavLink
            to="/"
            className="font-playfair text-[20px] text-navy tracking-tight leading-none hover:opacity-80 transition-opacity"
          >
            Sneha Pal
          </NavLink>
          <span className="text-[rgba(15,31,61,0.25)] font-light text-sm">/</span>
          <span className="font-mono text-[10px] font-light tracking-[0.18em] text-text-muted uppercase">
            Statistician
          </span>
        </div>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map(({ label, to }) => {
            const isActive =
              to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)
            return (
              <li key={to}>
                <NavLink
                  to={to}
                  className={`nav-underline font-outfit text-[11px] font-[500] tracking-[0.12em] transition-colors duration-200 pb-1 ${
                    isActive ? 'active text-text-main' : 'text-text-muted hover:text-text-main'
                  }`}
                >
                  {label}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* CV Button */}
        <a
          href="/SnehaPal_Resume.pdf"
          download="SnehaPal_Resume.pdf"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-navy/30 text-navy font-outfit text-[11px] font-[500] tracking-[0.1em] hover:border-navy hover:bg-navy hover:text-cream transition-all duration-200"
        >
          CV
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            className="opacity-70"
          >
            <path
              d="M5 1v6M2 5l3 3 3-3"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Mobile hamburger */}
        <MobileMenu location={location.pathname} />
      </nav>
    </header>
  )
}

function MobileMenu({ location }: { location: string }) {
  return (
    <div className="md:hidden">
      <details className="group relative">
        <summary className="list-none cursor-pointer p-2 text-navy">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 w-48 bg-cream border border-navy/10 rounded-xl shadow-lg py-2">
          {navItems.map(({ label, to }) => {
            const isActive = to === '/' ? location === '/' : location.startsWith(to)
            return (
              <NavLink
                key={to}
                to={to}
                className={`block px-5 py-2.5 text-[11px] font-[500] tracking-[0.1em] transition-colors ${
                  isActive ? 'text-navy' : 'text-text-muted hover:text-navy'
                }`}
              >
                {label}
              </NavLink>
            )
          })}
          <div className="border-t border-navy/10 mt-2 pt-2 mx-3">
            <a
              href="/resume.pdf"
              download
              className="block text-center text-[11px] font-[500] tracking-[0.1em] text-navy py-2"
            >
              CV ↓
            </a>
          </div>
        </div>
      </details>
    </div>
  )
}
