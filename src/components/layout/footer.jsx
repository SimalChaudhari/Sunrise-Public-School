import { Link } from 'react-router-dom'
import { SchoolIcon } from '../../icons'

function Footer() {
  const year = new Date().getFullYear()
  const footerLinks = [
    { label: 'Teachers', path: '/teachers' },
    { label: 'Subjects', path: '/subjects' },
    { label: 'Standards', path: '/standards' },
    { label: 'Classes', path: '/classes' },
    { label: 'Contact', path: '/contact' },
    { label: 'Registration', path: '/student-registration' },
  ]

  return (
    <footer className="border-t border-white/10 bg-slate-950/70 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5">
              <SchoolIcon className="text-3xl text-app-primary" />
            </div>
            <div>
              <p className="text-base font-semibold text-white">Sunrise Public School</p>
              <p className="mt-1 text-sm text-slate-300">Smart frontend portal for campus operations and admissions.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-slate-200">
            {footerLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1 transition hover:border-cyan-300/50 hover:bg-cyan-400/10 hover:text-cyan-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-400 md:flex md:items-center md:justify-between">
          <p>Copyright {year} Sunrise Public School. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for modern school administration.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
