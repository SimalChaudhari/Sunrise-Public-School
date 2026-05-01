import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '../../icons'

function TeacherCardSection({ teacher }) {
  return (
    <article data-aos="fade-up" className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:shadow-xl lg:p-8">
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-200/10 blur-2xl transition group-hover:bg-cyan-300/20" />

      <img
        src={teacher.image}
        alt={teacher.name}
        onError={(event) => {
          event.currentTarget.src = 'https://i.pravatar.cc/400?img=14'
        }}
        loading="lazy"
        className="mb-5 h-44 w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.02]"
      />

      <h3 className="my-2 text-xl font-bold leading-tight text-white">{teacher.name}</h3>
      <p className="mb-2 text-sm font-semibold text-cyan-300 font-secondary">{teacher.specialization}</p>
      <p className="mb-5 text-sm text-slate-300 font-secondary">
        {teacher.standard} • {teacher.experience}
      </p>

      <div className="mt-auto w-full border-t border-white/10 pt-5">
        <Link
          to={`/teachers/${teacher.id}`}
          className="inline-flex w-full items-center justify-center gap-1 rounded-xl bg-white/10 py-3 text-center text-sm font-semibold text-slate-100 transition-all group-hover:bg-cyan-500/25"
        >
          View Full Profile
          <ChevronRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}

export default TeacherCardSection
