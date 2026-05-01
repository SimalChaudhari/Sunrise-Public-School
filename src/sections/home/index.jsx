import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AccountSchoolIcon, ArrowRightThinIcon, ChartLineIcon, PhoneOutlineIcon, SchoolIcon, ShieldCheckIcon } from '../../icons'

const heroImages = [
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=2000',
  'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&q=80&w=2000',
]

const profileHighlights = [
  'CBSE & NEP Aligned Curriculum',
  'STEM Labs, Robotics & Digital Library',
  'Olympiad, Sports & Fine Arts Programs',
]

const quickStats = [
  { label: 'Qualified Teachers', value: '42+' },
  { label: 'Students Enrolled', value: '1,280+' },
  { label: 'Standards Covered', value: 'Nursery-12' },
  { label: 'Overall Attendance', value: '96%' },
]

const spotlightCards = [
  {
    title: 'Admissions Open 2026-27',
    detail: 'Nursery to Class 12 with scholarship assessment support.',
    Icon: AccountSchoolIcon,
  },
  {
    title: 'Academic Excellence',
    detail: 'Board preparation plans, mentor groups, and weekly analytics.',
    Icon: ChartLineIcon,
  },
  {
    title: 'Safe & Smart Campus',
    detail: 'CCTV monitoring, transport tracking, and parent communication.',
    Icon: ShieldCheckIcon,
  },
]

function HomeSection() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="w-full bg-app-bg">
      <section className="relative flex w-full flex-col overflow-hidden md:min-h-screen">
        <div className="absolute inset-0 z-0">
          {heroImages.map((imageUrl, index) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt="School campus"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-linear-to-r from-slate-950/95 via-slate-950/75 to-slate-900/40" />
        </div>

        <div className="relative z-10 flex-1 px-5 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto grid h-full w-full max-w-7xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div data-aos="fade-up" className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md mt-20 md:mt-0">
                <SchoolIcon className="h-4 w-4" />
                Premium School Profile
              </div>

              <h1 data-aos="fade-up" className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
                Sunrise Public School <br />
                <span className="bg-linear-to-r from-blue-300 to-cyan-200 bg-clip-text text-transparent">
                  Excellence in Learning
                </span>
              </h1>

              <p data-aos="fade-up" className="font-secondary mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg lg:mx-0">
                One unified platform for academics, attendance, class operations, faculty planning, and parent communication.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  to="/teachers"
                  className="flex w-full items-center justify-center rounded-full bg-app-primary px-6 py-3 font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
                >
                  Meet Our Faculty
                  <ArrowRightThinIcon className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+911234567890"
                  className="flex w-full items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20 sm:w-auto"
                >
                  Contact Admissions
                  <PhoneOutlineIcon className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {profileHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 backdrop-blur-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4 sm:p-6" data-aos="fade-up">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Campus Spotlight</p>
              <div className="space-y-3">
                {spotlightCards.map((card) => (
                  <div key={card.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-3">
                      <card.Icon className="mt-0.5 h-5 w-5 text-app-accent" />
                      <div>
                        <p className="font-semibold text-white">{card.title}</p>
                        <p className="font-secondary mt-1 text-sm text-slate-300">{card.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-2">
                {heroImages.map((imageUrl, index) => (
                  <span
                    key={imageUrl}
                    className={`h-1.5 rounded-full transition-all ${activeImageIndex === index ? 'w-7 bg-cyan-300' : 'w-3 bg-white/40'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <section className="relative z-10 border-t border-white/20 bg-black/20 px-4 py-6 backdrop-blur-md sm:px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 text-center md:grid-cols-4">
            {quickStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-3 py-3" data-aos="fade-up">
                <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
                <div className="font-secondary mt-1 text-xs font-semibold uppercase tracking-wider text-white/80 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

    </div>
  )
}

export default HomeSection
