import ContactFormSection from './ContactFormSection'
import ContactHeroSection from './ContactHeroSection'
import ContactInfoSection from './ContactInfoSection'

function ContactSection() {
  return (
    <section className="-mt-6 space-y-10">
      <ContactHeroSection />

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <ContactInfoSection />
        <ContactFormSection />
      </section>
    </section>
  )
}

export default ContactSection
