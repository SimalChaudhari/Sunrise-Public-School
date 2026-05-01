import { Link } from 'react-router-dom'
import { ChevronRightIcon, StandardsIcon } from '../../icons'

function StandardCardSection({ standard, aosDelay = 0 }) {
  return (
    <article
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:shadow-xl lg:p-7"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-200/10 blur-2xl transition group-hover:bg-cyan-300/20" />

      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-300/10 transition-colors duration-300 group-hover:bg-cyan-400/20">
        <StandardsIcon className="h-7 w-7 text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200" />
      </div>

      <h3 className="mb-2 text-xl font-bold leading-tight text-white">{standard.name}</h3>
      <p className="mb-2 text-sm font-semibold text-cyan-300">Coordinator: {standard.coordinator}</p>
      <p className="text-sm text-slate-300">Subjects: {standard.subjects}</p>
      <p className="text-sm text-slate-300">Teachers: {standard.teachers}</p>
      <p className="mb-5 text-sm text-slate-300">Students: {standard.students}</p>

      <div className="mt-auto w-full border-t border-white/10 pt-5">
        <Link
          to="/subjects"
          className="inline-flex w-full items-center justify-center gap-1 rounded-xl bg-white/10 py-3 text-center text-sm font-semibold text-slate-100 transition-all group-hover:bg-cyan-500/25"
        >
          View Subjects
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default StandardCardSection
