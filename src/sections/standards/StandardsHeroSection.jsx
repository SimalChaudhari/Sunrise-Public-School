import { StandardsIcon } from '../../icons'

function StandardsHeroSection() {
  return (
    <section className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden bg-slate-950 py-40 text-center">
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-900 to-blue-950/70" />
      <div className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 opacity-25">
        <div className="absolute h-full w-full bg-[radial-gradient(rgba(255,255,255,0.9)_1.2px,transparent_1.2px)] bg-size-[22px_22px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white/90 backdrop-blur-md"
        >
          <StandardsIcon className="h-4 w-4 text-blue-300" />
          Class Structure
        </div>

        <h1 data-aos="fade-up" data-aos-delay="80" className="mb-4 text-4xl font-bold text-white md:text-5xl">
          Standards Overview
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="160"
          className="mx-auto max-w-2xl text-lg text-slate-300 font-secondary"
        >
          Manage each class with subject distribution, coordinator ownership, and faculty allocation.
        </p>
      </div>
    </section>
  )
}

export default StandardsHeroSection
