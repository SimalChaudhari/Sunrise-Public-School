import { SchoolIcon } from '../../icons'

function TeachersHeroSection() {
  return (
    <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden bg-slate-950 py-40 text-center">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900 to-blue-950/70" />
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 opacity-25">
        <div className="absolute h-full w-full bg-[radial-gradient(rgba(255,255,255,0.9)_1.2px,transparent_1.2px)] bg-size-[22px_22px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md">
          <SchoolIcon className="h-4 w-4 text-blue-300" />
          Teaching Experts
        </div>

        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Our Expert Teachers</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-300 font-secondary">
          Meet our experienced faculty team dedicated to student success and holistic academic growth.
        </p>
      </div>
    </section>
  )
}

export default TeachersHeroSection
