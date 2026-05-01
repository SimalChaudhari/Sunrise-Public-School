import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '../../icons'
import { teachers } from '../../data/teachers'
import TeachersGridSection from './TeachersGridSection'
import TeachersHeroSection from './TeachersHeroSection'

function TeachersSection() {
  return (
    <section className="-mt-6 space-y-10">
      <TeachersHeroSection />
      <TeachersGridSection teachers={teachers} />

      <div className="text-center">
        <Link
          to="/classes"
          className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-slate-800"
        >
          View Class Allocation
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

export default TeachersSection
