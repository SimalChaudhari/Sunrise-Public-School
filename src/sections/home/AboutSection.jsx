import { Link } from 'react-router-dom'
import { AccountGroupIcon, CalendarStarIcon, ChartLineIcon, MapMarkerRadiusIcon } from '../../icons'

const schoolFacts = [
  { label: 'Founded', value: '1998', Icon: CalendarStarIcon },
  { label: 'Campus Area', value: '5 Acres', Icon: MapMarkerRadiusIcon },
  { label: 'Student-Teacher Ratio', value: '18:1', Icon: AccountGroupIcon },
  { label: 'Board Result', value: '98.4%', Icon: ChartLineIcon },
]

const focusAreas = [
  { title: 'Academic Mentorship', desc: 'Personalized guidance, remedial support, and Olympiad pathways.' },
  { title: 'Future Skills', desc: 'Coding, robotics, communication, and design thinking from middle grades.' },
  { title: 'Holistic Growth', desc: 'Sports, performing arts, club culture, and life-skill development.' },
]

function AboutSection() {
  return (
    <section data-aos="fade-up" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-6 shadow-xl sm:p-10">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-app-accent/20 blur-3xl" />
        <div className="absolute -bottom-14 -left-10 h-48 w-48 rounded-full bg-app-primary/20 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-app-accent">About Our School</p>
            <h2 data-aos="fade-up" className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Nurturing Future Leaders with <span className="block text-app-accent">Modern Education</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base font-secondary">
              Sunrise Public School combines strong academics, character development, sports excellence, and digital
              learning practices to build confident, responsible, and future-ready students.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {schoolFacts.map((fact) => (
                <div
                data-aos="fade-up"
                  key={fact.label}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-app-accent/60"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{fact.label}</p>
                    <fact.Icon className="h-5 w-5 text-app-accent" />
                  </div>
                  <p className="font-secondary mt-2 text-2xl font-semibold text-white transition-colors group-hover:text-app-accent">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-app-accent">Our Focus Areas</p>
            <div className="mt-4 space-y-3">
              {focusAreas.map((area) => (
                <div data-aos="fade-up" key={area.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{area.title}</p>
                  <p className="mt-1 text-sm text-slate-300 font-secondary">{area.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/standards"
                className="flex items-center justify-center rounded-xl bg-app-primary px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
              >
                Explore Standards
              </Link>
              <Link
                to="/classes"
                className="flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                View Class Planner
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection