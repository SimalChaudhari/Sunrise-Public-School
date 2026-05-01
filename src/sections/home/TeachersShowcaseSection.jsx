import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '../../icons'
import { teachers } from '../../data/teachers'

function TeachersShowcaseSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h2 data-aos="fade-up" className="mb-3 text-3xl font-bold text-white md:text-4xl">Meet Our Teachers</h2>
        <p data-aos="fade-up" className="text-slate-300 font-secondary">Experienced mentors dedicated to academic excellence and student growth.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teachers.slice(0, 4).map((teacher) => (
          <article
          data-aos="fade-up"
            key={teacher.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:shadow-xl"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              onError={(event) => {
                event.currentTarget.src = 'https://i.pravatar.cc/400?img=14'
              }}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold text-white">{teacher.name}</h3>
              <p className="mt-1 text-sm text-cyan-300 font-secondary">{teacher.specialization}</p>
              <p className="mt-3 text-sm text-slate-300 font-secondary">Experience: {teacher.experience}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/teachers"
          className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-slate-800"
        >
          View All Teachers
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

export default TeachersShowcaseSection
