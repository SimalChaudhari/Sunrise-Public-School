import { Link } from 'react-router-dom'
import { ChevronRightIcon, SchoolIcon } from '../../icons'

const facilities = [
  {
    id: 'smart-classrooms',
    title: 'Smart Classrooms',
    description: 'Digital boards, interactive content, and activity-based teaching for better learning outcomes.',
    image: 'https://picsum.photos/id/20/1200/800',
    to: '/classes',
  },
  {
    id: 'science-labs',
    title: 'Science & Robotics Labs',
    description: 'Hands-on practical sessions, innovation projects, and future-ready STEM skill development.',
    image: 'https://picsum.photos/id/180/1200/800',
    to: '/subjects',
  },
  {
    id: 'sports-complex',
    title: 'Sports & Activity Zone',
    description: 'Indoor and outdoor sports facilities to support physical growth and team discipline.',
    image: 'https://picsum.photos/id/1040/1200/800',
    to: '/standards',
  },
  {
    id: 'library',
    title: 'Modern Library',
    description: 'Rich collection of books, reference material, and reading zones for every age group.',
    image: 'https://picsum.photos/id/24/1200/800',
    to: '/subjects',
  },
  {
    id: 'transport',
    title: 'Safe Transport',
    description: 'GPS-enabled school buses with trained staff for secure and timely student commute.',
    image: 'https://picsum.photos/id/1071/1200/800',
    to: '/classes',
  },
  {
    id: 'health-room',
    title: 'Health & Wellness Room',
    description: 'First-aid support, routine health checks, and student wellness monitoring.',
    image: 'https://picsum.photos/id/1060/1200/800',
    to: '/teachers',
  },
]

function FacilitiesSection() {
  return (
    <section data-aos="fade-up" className="relative overflow-hidden bg-slate-50/5 py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex w-full flex-col items-center text-center">
          <div data-aos="fade-up" className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-cyan-200">
            <SchoolIcon className="h-4 w-4" />
            School Facilities
          </div>
          <h2 data-aos="fade-up" className="mb-3 text-3xl font-bold text-white md:text-4xl">What We Offer On Campus</h2>
          <p data-aos="fade-up" className=" mx-auto max-w-xl text-slate-300 font-secondary">
            Explore our modern infrastructure and facilities designed to support holistic student growth.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {facilities.map((facility, index) => (
            <Link data-aos="fade-up" to={facility.to} key={facility.id} className="group block">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:border-cyan-300/40 group-hover:shadow-xl">
                <div className="relative">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    onError={(event) => {
                      event.currentTarget.src = 'https://picsum.photos/id/1011/1200/800'
                    }}
                    loading="lazy"
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/20 bg-slate-900/50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-200 backdrop-blur-md">
                    Facility {index + 1}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="mb-2 text-lg font-bold text-white transition group-hover:text-cyan-200">{facility.title}</h3>
                  <p className="line-clamp-2 text-sm text-slate-300 font-secondary">{facility.description}</p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="inline-flex items-center text-sm font-semibold text-cyan-300">
                      Learn More
                      <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                    <span className="rounded-full border border-white/15 bg-white/5 px-2 py-1 text-[11px] text-slate-300">Campus</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/classes"
            className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 font-bold text-white shadow-md transition-all hover:scale-105 hover:bg-slate-800"
          >
            View All Facilities
            <ChevronRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FacilitiesSection
