import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '../../icons'
import { classes } from '../../data/classes'
import ClassesGridSection from './ClassesGridSection'
import ClassesHeroSection from './ClassesHeroSection'

function ClassesSection() {
  return (
    <section className="-mt-6 space-y-10">
      <ClassesHeroSection />
      <ClassesGridSection classes={classes} />

      <div className="text-center" data-aos="fade-up">
        <Link
          to="/teachers"
          className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-slate-800"
        >
          View Faculty Mapping
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

export default ClassesSection
