import AboutSection from '../../sections/home/AboutSection'
import FacilitiesSection from '../../sections/home/FacilitiesSection'
import HomeSection from '../../sections/home'
// import NoticeBoardSection from '../../sections/home/NoticeBoardSection'
import ProgramsSection from '../../sections/home/ProgramsSection'
import TeachersShowcaseSection from '../../sections/home/TeachersShowcaseSection'

function HomePage() {
  return (
    <>
      <HomeSection />
      {/* <NoticeBoardSection /> */}
      <AboutSection />
      <ProgramsSection />
      <TeachersShowcaseSection />
      <FacilitiesSection />
    </>
  )
}

export default HomePage
