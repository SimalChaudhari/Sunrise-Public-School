import { Link } from 'react-router-dom'
import { AccountTieIcon, ChevronRightIcon, ClipboardTextIcon, StandardsIcon, SubjectsIcon } from '../../icons'

const notices = [
  { title: 'PTM Schedule Released', date: '12 May 2026', tag: 'Parents' },
  { title: 'Class 10 Pre-Board Timetable', date: '18 May 2026', tag: 'Exams' },
  { title: 'Summer Camp Registration Open', date: '20 May 2026', tag: 'Activities' },
]

const quickLinks = [
  { label: 'Admissions', to: '/classes', Icon: ClipboardTextIcon },
  { label: 'Faculty Directory', to: '/teachers', Icon: AccountTieIcon },
  { label: 'Subject Planner', to: '/subjects', Icon: SubjectsIcon },
  { label: 'Standards Overview', to: '/standards', Icon: StandardsIcon },
]

function NoticeBoardSection() {
  return (
    <section data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div data-aos="fade-up" className="glass-card rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-app-accent">Notice Board</p>
          <div className="mt-4 space-y-3">
            {notices.map((notice) => (
              <article key={notice.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-semibold text-white">{notice.title}</h4>
                  <span className="rounded-full border border-white/15 bg-black/20 px-2 py-1 text-xs text-slate-300">
                    {notice.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400 font-secondary">{notice.date}</p>
              </article>
            ))}
          </div>
        </div>

        <div data-aos="fade-up" className="glass-card rounded-2xl p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-app-accent">Quick Access</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {quickLinks.map((item) => (
              <Link
              data-aos="fade-up"
                key={item.label}
                to={item.to}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-app-primary/40 hover:bg-white/10"
              >
                <span className="flex items-center gap-2">
                  <item.Icon className="h-5 w-5 text-app-primary" />
                  {item.label}
                </span>
                <ChevronRightIcon className="h-4 w-4 text-slate-300" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NoticeBoardSection
