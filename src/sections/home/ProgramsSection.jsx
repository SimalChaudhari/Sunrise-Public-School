import { AlphabetIcon, BookOpenIcon, CheckCircleOutlineIcon, SchoolIcon } from '../../icons'

const programs = [
  {
    title: 'Primary Foundation',
    detail: 'Activity-based learning, literacy, numeracy, and communication development.',
    level: 'Classes Nursery-V',
    outcomes: ['Foundational literacy', 'Confidence building', 'Creative exploration'],
    Icon: AlphabetIcon,
  },
  {
    title: 'Middle School Progression',
    detail: 'Conceptual clarity in science, mathematics, social studies, and languages.',
    level: 'Classes VI-VIII',
    outcomes: ['STEM understanding', 'Critical thinking', 'Project-based learning'],
    Icon: BookOpenIcon,
  },
  {
    title: 'Senior Secondary Excellence',
    detail: 'Board-focused mentorship for Science, Commerce, and Humanities streams.',
    level: 'Classes IX-XII',
    outcomes: ['Board preparation', 'Career mentoring', 'Competitive exam support'],
    Icon: SchoolIcon,
  },
]

function ProgramsSection() {
  return (
    // <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen bg-linear-to-br from-slate-950 via-[#07142d] to-slate-950 py-12">
    <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden bg-black py-12">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] bg-size-[20px_20px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div data-aos="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Academic Programs</p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Structured Learning Journey</h2>
            <p className="font-secondary mt-2 max-w-2xl text-sm text-slate-300 sm:text-base">
              A stage-wise curriculum framework designed for conceptual growth, practical skills, and academic excellence.
            </p>
          </div>
          <span data-aos="fade-up" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-100">
            <SchoolIcon className="h-4 w-4 text-cyan-300" />
            3 Program Tracks
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <article
              data-aos="fade-up"
              key={program.title}
              className="group rounded-2xl border border-white/15 bg-slate-900/70 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50"
            >
              <div className="flex items-start justify-between gap-3">
                <program.Icon className="h-8 w-8 text-cyan-300" />
                <span className="rounded-full border border-white/15 bg-black/30 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-200">
                  {program.level}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-white">{program.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 font-secondary">{program.detail}</p>

              <div className="mt-4 space-y-2">
                {program.outcomes.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm text-slate-200 font-secondary">
                    <CheckCircleOutlineIcon className="h-4 w-4 text-cyan-300" />
                    {item}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection
