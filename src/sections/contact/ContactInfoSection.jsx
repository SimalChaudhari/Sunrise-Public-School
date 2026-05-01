import { EmailIcon, LocationLineIcon, PhoneOutlineIcon } from '../../icons'

function ContactInfoSection() {
  return (
    <div className="space-y-6 lg:col-span-5">
      <article data-aos="fade-up" className="rounded-3xl border border-white/15 bg-white/5 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/15">
          <PhoneOutlineIcon className="h-6 w-6 text-cyan-300" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-white">Call Us</h2>
        <p className="text-slate-300">+91 77020 21224</p>
        <p className="text-slate-400">Mon-Sat, 8:00 AM - 5:00 PM</p>
      </article>

      <article data-aos="fade-up" data-aos-delay="80" className="rounded-3xl border border-white/15 bg-white/5 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/15">
          <EmailIcon className="h-6 w-6 text-cyan-300" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-white">Email Us</h2>
        <p className="text-slate-300">admissions@school.edu</p>
        <p className="text-slate-400">office@school.edu</p>
      </article>

      <article data-aos="fade-up" data-aos-delay="160" className="rounded-3xl border border-white/15 bg-white/5 p-6">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-300/15">
          <LocationLineIcon className="h-6 w-6 text-cyan-300" />
        </div>
        <h2 className="mb-2 text-xl font-semibold text-white">Visit Campus</h2>
        <p className="text-slate-300">Sunrise Education Campus, Main Road</p>
        <p className="text-slate-400">Ahmedabad, Gujarat</p>
      </article>
    </div>
  )
}

export default ContactInfoSection
