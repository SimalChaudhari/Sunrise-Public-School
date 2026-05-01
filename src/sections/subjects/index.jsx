import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '../../icons'
import { subjects } from '../../data/subjects'
import SubjectsGridSection from './SubjectsGridSection'
import SubjectsHeroSection from './SubjectsHeroSection'

function SubjectsSection() {
  return (
    <section className="-mt-6 space-y-10">
      <SubjectsHeroSection />
      <SubjectsGridSection subjects={subjects} />

      <div className="text-center" data-aos="fade-up">
        <Link
          to="/standards"
          className="inline-flex items-center rounded-full bg-slate-900 px-8 py-3 font-bold text-white transition hover:scale-105 hover:bg-slate-800"
        >
          View Standard Allocation
          <ChevronRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}

export default SubjectsSection
