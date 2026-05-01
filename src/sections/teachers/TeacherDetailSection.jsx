import { Link, Navigate, useParams } from 'react-router-dom'
import { AccountSchoolIcon, CalendarStarIcon, ChevronRightIcon, TeachersIcon } from '../../icons'
import { getTeacherById } from '../../data/teachers'

function TeacherDetailSection() {
  const { teacherId } = useParams()
  const teacher = getTeacherById(teacherId)

  if (!teacher) {
    return <Navigate to="/teachers" replace />
  }

  return (
    <section className="-mt-6 space-y-8">
      <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden bg-slate-950 py-40 text-center">
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900 to-blue-950/70" />
        <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[22px_22px]" />
        </div>

        <div data-aos="fade-up" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/90">Teacher Profile</p>
          <h1 data-aos="fade-up" className="text-4xl font-bold text-white md:text-5xl">{teacher.name}</h1>
          <p data-aos="fade-up" className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">{teacher.specialization}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <article data-aos="fade-up" className="rounded-3xl border border-white/15 bg-white/5 p-6 lg:col-span-4">
          <img
            src={teacher.image}
            alt={teacher.name}
            onError={(event) => {
              event.currentTarget.src = 'https://i.pravatar.cc/400?img=14'
            }}
            data-aos="fade-up"
            className="h-72 w-full rounded-2xl object-cover"
          />
          <div data-aos="fade-up" className="mt-5 space-y-2 text-sm text-slate-300">
            <p>
              <span className="font-semibold text-white">Age:</span> {teacher.age} Years
            </p>
            <p data-aos="fade-up">
              <span className="font-semibold text-white">Experience:</span> {teacher.experience}
            </p>
            <p data-aos="fade-up">
              <span className="font-semibold text-white">Qualification:</span> {teacher.education}
            </p>
            <p data-aos="fade-up">
              <span className="font-semibold text-white">Primary Class:</span> {teacher.standard}
            </p>
          </div>
        </article>

        <article className="rounded-3xl border border-white/15 bg-white/5 p-6 lg:col-span-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3" data-aos="fade-up">
            <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
              <TeachersIcon className="mb-2 h-6 w-6 text-cyan-300" />
              <p data-aos="fade-up" className="text-xs uppercase tracking-wider text-slate-400">Specialization</p>
              <p className="mt-1 text-sm font-semibold text-white font-secondary">{teacher.specialization}</p>
            </div>
            <div data-aos="fade-up" className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
              <CalendarStarIcon className="mb-2 h-6 w-6 text-cyan-300" />
              <p data-aos="fade-up" className="text-xs uppercase tracking-wider text-slate-400">Experience</p>
              <p className="mt-1 text-sm font-semibold text-white font-secondary">{teacher.experience}</p>
            </div>
            <div data-aos="fade-up" className="rounded-2xl border border-white/10 bg-slate-950/35 p-4">
              <AccountSchoolIcon className="mb-2 h-6 w-6 text-cyan-300" />
              <p data-aos="fade-up" className="text-xs uppercase tracking-wider text-slate-400">Classes</p>
              <p className="mt-1 text-sm font-semibold text-white font-secondary">{teacher.standardsHandled.join(', ')}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 data-aos="fade-up" className="text-xl font-bold text-white">About Teacher</h2>
            <p data-aos="fade-up" className="mt-2 text-slate-300 font-secondary">{teacher.bio}</p>
          </div>

          <div className="mt-6">
            <h2 data-aos="fade-up" className="text-xl font-bold text-white">Subjects Taught</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {teacher.subjects.map((subject) => (
                <span data-aos="fade-up" key={subject} className="font-secondary rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                  {subject}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <Link
              to="/teachers"
              className="inline-flex items-center rounded-full bg-slate-900 px-7 py-3 font-semibold text-white transition hover:scale-105 hover:bg-slate-800"
            >
              Back to Teachers
              <ChevronRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </article>
      </section>
    </section>
  )
}

export default TeacherDetailSection
