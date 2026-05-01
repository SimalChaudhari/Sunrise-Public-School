import { useState } from 'react'
import Input from '../../components/input'

function normalizeScriptEnvUrl(raw) {
  let value = typeof raw === 'string' ? raw.trim() : ''
  if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
    value = value.slice(1, -1).trim()
  }
  return value
}

function isAppsScriptWebAppUrl(url) {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' && parsed.hostname === 'script.google.com' && /\/macros\/s\/[^/]+\/exec\b/.test(parsed.pathname)
  } catch {
    return false
  }
}

const SCRIPT_URL = normalizeScriptEnvUrl(import.meta.env.VITE_CONTACT_FORM_SCRIPT_URL ?? '')
const SCRIPT_URL_OK = isAppsScriptWebAppUrl(SCRIPT_URL)

function ContactFormSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  })

  const nameError = !name.trim() ? 'Name is required.' : name.trim().length < 3 ? 'Name must be at least 3 characters.' : ''
  const emailError = !email.trim()
    ? 'Email is required.'
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
      ? 'Please enter a valid email.'
      : ''
  const phoneError = !phone.trim() ? 'Phone number is required.' : !/^\d{10}$/.test(phone.trim()) ? 'Phone must be 10 digits.' : ''
  const messageError = !message.trim()
    ? 'Message is required.'
    : message.trim().length < 10
      ? 'Message must be at least 10 characters.'
      : ''

  const hasValidationError = Boolean(nameError || emailError || phoneError || messageError)
  const inputClass = (hasError) =>
    hasError ? 'border-red-400/70 focus:border-red-400/70 focus:ring-red-400/20' : ''

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitError('')
    setSubmitAttempted(true)
    setStatus('idle')

    if (hasValidationError) {
      return
    }

    if (!SCRIPT_URL_OK) {
      setSubmitError('Form endpoint is invalid. Set VITE_CONTACT_FORM_SCRIPT_URL to Apps Script /macros/s/.../exec URL.')
      return
    }

    setStatus('submitting')

    try {
      const now = new Date()
      const date = now.toLocaleDateString('en-CA')
      const time = now.toLocaleTimeString('en-GB', { hour12: false })

      // Uses e.parameter based payload for your Apps Script doPost.
      const body = new URLSearchParams({
        Name: name.trim(),
        Email: email.trim(),
        Phone: phone.trim(),
        Message: message.trim(),
        Date: date,
        Time: time,
      }).toString()

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      setStatus('success')
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setSubmitAttempted(false)
      setTouched({ name: false, email: false, phone: false, message: false })
    } catch (submitError) {
      setStatus('idle')
      setSubmitError(submitError instanceof Error ? submitError.message : 'Something went wrong while submitting the form.')
    }
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="200"
      className="w-full rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm md:p-8 lg:col-span-7"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Send us a message</h2>
        <p className="mt-2 text-slate-300 font-secondary">Fill the form and our team will contact you shortly.</p>
      </div>

      <form className="grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        {!SCRIPT_URL_OK ? (
          <div className="md:col-span-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
            Contact form is not connected. Please check `VITE_CONTACT_FORM_SCRIPT_URL`.
          </div>
        ) : null}

        {submitError ? (
          <div className="md:col-span-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-100">
            {submitError}
          </div>
        ) : null}

        {status === 'success' ? (
          <div className="md:col-span-2 rounded-lg border border-green-500/40 bg-green-500/10 px-3 py-2 text-sm text-green-100">
            Thank you! Your enquiry has been submitted successfully.
          </div>
        ) : null}

        <Input
          id="contact-name"
          name="name"
          label="Name"
          type="text"
          required
          value={name}
          onChange={(event) => {
            setName(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          placeholder="Enter your name"
          inputClassName={inputClass((touched.name || submitAttempted) && Boolean(nameError))}
          hasError={(touched.name || submitAttempted) && Boolean(nameError)}
          errorMessage={nameError}
        />

        <Input
          id="contact-email"
          name="email"
          label="Email"
          type="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          placeholder="Enter your email"
          inputClassName={inputClass((touched.email || submitAttempted) && Boolean(emailError))}
          hasError={(touched.email || submitAttempted) && Boolean(emailError)}
          errorMessage={emailError}
        />

        <Input
          id="contact-phone"
          name="phone"
          label="Phone Number"
          type="tel"
          required
          inputMode="numeric"
          maxLength={10}
          containerClassName="md:col-span-2"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value.replace(/\D/g, ''))
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, phone: true }))}
          placeholder="Enter your phone number"
          inputClassName={inputClass((touched.phone || submitAttempted) && Boolean(phoneError))}
          hasError={(touched.phone || submitAttempted) && Boolean(phoneError)}
          errorMessage={phoneError}
        />

        <Input
          id="contact-message"
          name="message"
          label="Message"
          as="textarea"
          rows={5}
          required
          containerClassName="md:col-span-2"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
          placeholder="Write your message"
          inputClassName={`${inputClass((touched.message || submitAttempted) && Boolean(messageError))} resize-none`}
          hasError={(touched.message || submitAttempted) && Boolean(messageError)}
          errorMessage={messageError}
        />

        <div className="md:col-span-2">
          <button
            type="submit"
              disabled={status === 'submitting' || !SCRIPT_URL_OK}
            className="cursor-pointer inline-flex items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default ContactFormSection
