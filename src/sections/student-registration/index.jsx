import StudentRegistrationFormSection from './StudentRegistrationFormSection'
import StudentRegistrationHeroSection from './StudentRegistrationHeroSection'

function StudentRegistrationSection() {
  return (
    <section className="-mt-6 space-y-8">
      <StudentRegistrationHeroSection />
      <StudentRegistrationFormSection />
    </section>
  )
}

export default StudentRegistrationSection
