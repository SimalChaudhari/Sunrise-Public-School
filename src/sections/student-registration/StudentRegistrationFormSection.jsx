import { useRef, useState } from 'react'
import Dropdown from '../../components/dropdown'
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

const REGISTRATION_SCRIPT_URL = normalizeScriptEnvUrl(import.meta.env.VITE_REGISTRATION_FORM_SCRIPT_URL ?? '')
const REGISTRATION_SCRIPT_URL_OK = isAppsScriptWebAppUrl(REGISTRATION_SCRIPT_URL)

function generateRegistrationUUID() {
  if (typeof globalThis.crypto !== 'undefined' && typeof globalThis.crypto.randomUUID === 'function') {
    return globalThis.crypto.randomUUID()
  }
  return `REG-${Date.now()}-${Math.random().toString(36).slice(2, 10).toUpperCase()}`
}

function StudentRegistrationFormSection() {
  const dobInputRef = useRef(null)
  const [selectedClass, setSelectedClass] = useState('class-6')
  const [selectedGender, setSelectedGender] = useState('male')
  const [studentDob, setStudentDob] = useState('')
  const [studentAge, setStudentAge] = useState('')
  const [studentName, setStudentName] = useState('')
  const [studentAadhaar, setStudentAadhaar] = useState('')
  const [guardianName, setGuardianName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [motherName, setMotherName] = useState('')
  const [fatherOccupation, setFatherOccupation] = useState('')
  const [motherOccupation, setMotherOccupation] = useState('')
  const [address, setAddress] = useState('')
  const [lastYearMarks, setLastYearMarks] = useState('')
  const [status, setStatus] = useState('idle')
  const [submitError, setSubmitError] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [touched, setTouched] = useState({
    studentName: false,
    studentAadhaar: false,
    studentDob: false,
    guardianName: false,
    contactNumber: false,
    emailAddress: false,
    fatherName: false,
    motherName: false,
    fatherOccupation: false,
    motherOccupation: false,
    lastYearMarks: false,
    address: false,
  })
  const [academicRows, setAcademicRows] = useState([
    { id: 1, subject: '', marks: '' },
    { id: 2, subject: '', marks: '' },
    { id: 3, subject: '', marks: '' },
  ])
  const classOptions = [
    { value: 'class-6', label: 'Class 6' },
    { value: 'class-7', label: 'Class 7' },
    { value: 'class-8', label: 'Class 8' },
    { value: 'class-9', label: 'Class 9' },
    { value: 'class-10', label: 'Class 10' },
    { value: 'class-11', label: 'Class 11' },
    { value: 'class-12', label: 'Class 12' },
  ]
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ]
  const applyingClassNumber = Number(selectedClass.replace('class-', ''))
  const previousClassNumber = Math.max(5, applyingClassNumber - 1)
  const previousClassLabel = `Class ${previousClassNumber}`

  const getOnlyDigits = (value) => value.replace(/\D/g, '')
  const inputClass = (hasError) => (hasError ? 'border-red-400/70 focus:border-red-400/70 focus:ring-red-400/20' : '')

  const studentNameError =
    !studentName.trim() ? 'Student name is required.' : studentName.trim().length < 3 ? 'Student name must be at least 3 characters.' : ''
  const studentAadhaarError = !studentAadhaar.trim()
    ? 'Student Aadhaar number is required.'
    : !/^\d{12}$/.test(studentAadhaar.trim())
      ? 'Aadhaar must be 12 digits.'
      : ''
  const studentDobError = !studentDob ? 'Date of birth is required.' : ''
  const guardianNameError = !guardianName.trim() ? 'Parent/Guardian name is required.' : ''
  const contactNumberError = !contactNumber.trim()
    ? 'Contact number is required.'
    : !/^\d{10}$/.test(contactNumber.trim())
      ? 'Contact number must be 10 digits.'
      : ''
  const emailAddressError = !emailAddress.trim()
    ? 'Email is required.'
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress.trim())
      ? 'Please enter a valid email.'
      : ''
  const fatherNameError = !fatherName.trim() ? 'Father name is required.' : ''
  const motherNameError = !motherName.trim() ? 'Mother name is required.' : ''
  const fatherOccupationError = !fatherOccupation.trim() ? 'Father occupation is required.' : ''
  const motherOccupationError = !motherOccupation.trim() ? 'Mother occupation is required.' : ''
  const lastYearMarksError = !lastYearMarks.trim()
    ? 'Last year marks are required.'
    : Number(lastYearMarks) > 100
      ? 'Marks cannot be above 100.'
      : ''
  const addressError = !address.trim() ? 'Address is required.' : address.trim().length < 10 ? 'Address must be at least 10 characters.' : ''

  const academicRowsErrors = academicRows.map((row) => ({
    subject: !row.subject.trim() ? 'Subject is required.' : '',
    marks: !row.marks.trim() ? 'Marks are required.' : Number(row.marks) > 100 ? 'Marks cannot exceed 100.' : '',
  }))

  const hasAcademicRowsError = academicRowsErrors.some((error) => error.subject || error.marks)
  const hasValidationError = Boolean(
    studentNameError ||
      studentAadhaarError ||
      studentDobError ||
      guardianNameError ||
      contactNumberError ||
      emailAddressError ||
      fatherNameError ||
      motherNameError ||
      fatherOccupationError ||
      motherOccupationError ||
      lastYearMarksError ||
      addressError ||
      hasAcademicRowsError,
  )

  const addAcademicRow = () => {
    setAcademicRows((prev) => [...prev, { id: Date.now(), subject: '', marks: '' }])
  }

  const removeAcademicRow = (rowId) => {
    setAcademicRows((prev) => {
      if (prev.length === 1) return prev
      return prev.filter((row) => row.id !== rowId)
    })
  }

  const updateAcademicRow = (rowId, field, value) => {
    setAcademicRows((prev) =>
      prev.map((row) => (row.id === rowId ? { ...row, [field]: value } : row)),
    )
  }

  const openDatePicker = () => {
    if (dobInputRef.current && typeof dobInputRef.current.showPicker === 'function') {
      dobInputRef.current.showPicker()
    }
  }

  const handleDobChange = (value) => {
    setStudentDob(value)
    if (!value) {
      setStudentAge('')
      return
    }

    const dobDate = new Date(value)
    const today = new Date()
    let age = today.getFullYear() - dobDate.getFullYear()
    const monthDiff = today.getMonth() - dobDate.getMonth()
    const dayDiff = today.getDate() - dobDate.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age -= 1
    }

    setStudentAge(String(Math.max(0, age)))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitError('')
    setSubmitAttempted(true)
    setStatus('idle')

    if (hasValidationError) {
      setSubmitError('Please correct the highlighted fields before submitting.')
      return
    }

    if (!REGISTRATION_SCRIPT_URL_OK) {
      setSubmitError('Registration endpoint is invalid. Set VITE_REGISTRATION_FORM_SCRIPT_URL to Apps Script /macros/s/.../exec URL.')
      return
    }

    setStatus('submitting')

    try {
      const now = new Date()
      const date = now.toLocaleDateString('en-CA')
      const time = now.toLocaleTimeString('en-GB', { hour12: false })
      const registrationUuid = generateRegistrationUUID()

      const body = new URLSearchParams({
        FormType: 'registration',
        formType: 'registration',
        RegistrationUUID: registrationUuid,
        registrationUUID: registrationUuid,
        RegistrationId: registrationUuid,
        StudentName: studentName.trim(),
        StudentAadhaar: studentAadhaar.trim(),
        DateOfBirth: studentDob,
        Age: studentAge,
        ApplyingClass: classOptions.find((option) => option.value === selectedClass)?.label ?? '',
        Gender: genderOptions.find((option) => option.value === selectedGender)?.label ?? '',
        GuardianName: guardianName.trim(),
        ContactNumber: contactNumber.trim(),
        EmailAddress: emailAddress.trim(),
        FatherName: fatherName.trim(),
        MotherName: motherName.trim(),
        FatherOccupation: fatherOccupation.trim(),
        MotherOccupation: motherOccupation.trim(),
        LastStudiedClass: previousClassLabel,
        LastYearTotalMarks: lastYearMarks.trim(),
        SubjectsAndMarks: JSON.stringify(
          academicRows.map((row) => ({
            subject: row.subject.trim(),
            marks: row.marks.trim(),
          })),
        ),
        Address: address.trim(),
        Date: date,
        Time: time,
      }).toString()

      await fetch(REGISTRATION_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })

      setStatus('success')
      setSubmitAttempted(false)
      setTouched({
        studentName: false,
        studentAadhaar: false,
        studentDob: false,
        guardianName: false,
        contactNumber: false,
        emailAddress: false,
        fatherName: false,
        motherName: false,
        fatherOccupation: false,
        motherOccupation: false,
        lastYearMarks: false,
        address: false,
      })
      setStudentName('')
      setStudentAadhaar('')
      setStudentDob('')
      setStudentAge('')
      setSelectedClass('class-6')
      setSelectedGender('male')
      setGuardianName('')
      setContactNumber('')
      setEmailAddress('')
      setFatherName('')
      setMotherName('')
      setFatherOccupation('')
      setMotherOccupation('')
      setLastYearMarks('')
      setAcademicRows([
        { id: 1, subject: '', marks: '' },
        { id: 2, subject: '', marks: '' },
        { id: 3, subject: '', marks: '' },
      ])
      setAddress('')
    } catch (error) {
      setStatus('idle')
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong while submitting registration.')
    }
  }

  return (
    <section
      data-aos="fade-up"
      data-aos-delay="200"
      className="mx-auto w-full max-w-7xl rounded-3xl border border-white/15 bg-white/5 p-6 shadow-sm md:p-8"
    >
      <form className="grid grid-cols-1 gap-5 md:grid-cols-2" onSubmit={handleSubmit} noValidate>
        {!REGISTRATION_SCRIPT_URL_OK ? (
          <div className="md:col-span-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm text-amber-100">
            Registration form is not connected. Please check `VITE_REGISTRATION_FORM_SCRIPT_URL`.
          </div>
        ) : null}

        {submitError ? (
          <div className="md:col-span-2 rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-100">
            {submitError}
          </div>
        ) : null}

        {status === 'success' ? (
          <div className="md:col-span-2 rounded-lg border border-green-500/40 bg-green-500/10 px-3 py-2 text-sm text-green-100">
            Student registration submitted successfully.
          </div>
        ) : null}

        <div data-aos="fade-up" data-aos-delay="240" className="md:col-span-2">
          <h2 className="text-xl font-semibold text-white">Student Information</h2>
          <p className="mt-1 text-sm text-slate-300 font-secondary">Enter the student personal and admission details.</p>
        </div>

        <Input
          id="student-name"
          label="Student Name"
          type="text"
          value={studentName}
          onChange={(event) => {
            setStudentName(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, studentName: true }))}
          placeholder="Enter student name"
          inputClassName={inputClass((touched.studentName || submitAttempted) && Boolean(studentNameError))}
          hasError={(touched.studentName || submitAttempted) && Boolean(studentNameError)}
          errorMessage={studentNameError}
        />

        <Input
          id="student-aadhaar"
          label="Student Aadhaar Number"
          type="text"
          inputMode="numeric"
          maxLength={12}
          value={studentAadhaar}
          onChange={(event) => {
            setStudentAadhaar(getOnlyDigits(event.target.value))
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, studentAadhaar: true }))}
          placeholder="Enter 12-digit Aadhaar number"
          inputClassName={inputClass((touched.studentAadhaar || submitAttempted) && Boolean(studentAadhaarError))}
          hasError={(touched.studentAadhaar || submitAttempted) && Boolean(studentAadhaarError)}
          errorMessage={studentAadhaarError}
        />

        <Input
          inputRef={dobInputRef}
          id="student-dob"
          label="Date of Birth"
          type="date"
          value={studentDob}
          onChange={(event) => handleDobChange(event.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, studentDob: true }))}
          onFocus={openDatePicker}
          onClick={openDatePicker}
          inputClassName={inputClass((touched.studentDob || submitAttempted) && Boolean(studentDobError))}
          hasError={(touched.studentDob || submitAttempted) && Boolean(studentDobError)}
          errorMessage={studentDobError}
        />

        <Input
          id="student-age"
          label="Age"
          type="number"
          value={studentAge}
          readOnly
          placeholder="Age auto-filled from DOB"
          className="bg-slate-900/80 text-slate-200"
        />

        <Dropdown
          label="Applying Class"
          value={selectedClass}
          options={classOptions}
          onChange={setSelectedClass}
          placeholder="Select class"
        />

        <Dropdown
          label="Gender"
          value={selectedGender}
          options={genderOptions}
          onChange={setSelectedGender}
          placeholder="Select gender"
        />

        <Input
          id="guardian-name"
          label="Parent/Guardian Name"
          type="text"
          value={guardianName}
          onChange={(event) => {
            setGuardianName(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, guardianName: true }))}
          placeholder="Enter parent/guardian name"
          inputClassName={inputClass((touched.guardianName || submitAttempted) && Boolean(guardianNameError))}
          hasError={(touched.guardianName || submitAttempted) && Boolean(guardianNameError)}
          errorMessage={guardianNameError}
        />

        <Input
          id="contact-number"
          label="Contact Number"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          value={contactNumber}
          onChange={(event) => {
            setContactNumber(getOnlyDigits(event.target.value))
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, contactNumber: true }))}
          placeholder="Enter contact number"
          inputClassName={inputClass((touched.contactNumber || submitAttempted) && Boolean(contactNumberError))}
          hasError={(touched.contactNumber || submitAttempted) && Boolean(contactNumberError)}
          errorMessage={contactNumberError}
        />

        <Input
          id="email-address"
          label="Email Address"
          type="email"
          value={emailAddress}
          onChange={(event) => {
            setEmailAddress(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, emailAddress: true }))}
          placeholder="Enter email address"
          inputClassName={inputClass((touched.emailAddress || submitAttempted) && Boolean(emailAddressError))}
          hasError={(touched.emailAddress || submitAttempted) && Boolean(emailAddressError)}
          errorMessage={emailAddressError}
        />

        <div data-aos="fade-up" data-aos-delay="280" className="md:col-span-2 mt-2 border-t border-white/10 pt-5">
          <h2 className="text-xl font-semibold text-white">Parent Information</h2>
          <p className="mt-1 text-sm text-slate-300 font-secondary">Provide parent/guardian contact and occupation details.</p>
        </div>

        <Input
          id="father-name"
          label="Father Name"
          type="text"
          value={fatherName}
          onChange={(event) => {
            setFatherName(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, fatherName: true }))}
          placeholder="Enter father name"
          inputClassName={inputClass((touched.fatherName || submitAttempted) && Boolean(fatherNameError))}
          hasError={(touched.fatherName || submitAttempted) && Boolean(fatherNameError)}
          errorMessage={fatherNameError}
        />

        <Input
          id="mother-name"
          label="Mother Name"
          type="text"
          value={motherName}
          onChange={(event) => {
            setMotherName(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, motherName: true }))}
          placeholder="Enter mother name"
          inputClassName={inputClass((touched.motherName || submitAttempted) && Boolean(motherNameError))}
          hasError={(touched.motherName || submitAttempted) && Boolean(motherNameError)}
          errorMessage={motherNameError}
        />

        <Input
          id="father-occupation"
          label="Father Occupation"
          type="text"
          value={fatherOccupation}
          onChange={(event) => {
            setFatherOccupation(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, fatherOccupation: true }))}
          placeholder="Enter father occupation"
          inputClassName={inputClass((touched.fatherOccupation || submitAttempted) && Boolean(fatherOccupationError))}
          hasError={(touched.fatherOccupation || submitAttempted) && Boolean(fatherOccupationError)}
          errorMessage={fatherOccupationError}
        />

        <Input
          id="mother-occupation"
          label="Mother Occupation"
          type="text"
          value={motherOccupation}
          onChange={(event) => {
            setMotherOccupation(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, motherOccupation: true }))}
          placeholder="Enter mother occupation"
          inputClassName={inputClass((touched.motherOccupation || submitAttempted) && Boolean(motherOccupationError))}
          hasError={(touched.motherOccupation || submitAttempted) && Boolean(motherOccupationError)}
          errorMessage={motherOccupationError}
        />

        <div data-aos="fade-up" data-aos-delay="320" className="md:col-span-2 mt-2 border-t border-white/10 pt-5">
          <h2 className="text-xl font-semibold text-white">Academic Information</h2>
          <p className="mt-1 text-sm text-slate-300 font-secondary">Add previous class, last year marks, and subjects.</p>
        </div>

        <Input
          id="last-studied-class"
          label="Last Studied Class"
          type="text"
          value={previousClassLabel}
          readOnly
          className="bg-slate-900/80 text-slate-200"
        />

        <Input
          id="last-year-marks"
          label="Last Year Total Marks (%)"
          type="number"
          min="0"
          max="100"
          value={lastYearMarks}
          inputMode="numeric"
          onChange={(event) => setLastYearMarks(getOnlyDigits(event.target.value))}
          onKeyDown={(event) => {
            if (['e', 'E', '+', '-', '.'].includes(event.key)) {
              event.preventDefault()
            }
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, lastYearMarks: true }))}
          placeholder="Enter percentage"
          inputClassName={inputClass((touched.lastYearMarks || submitAttempted) && Boolean(lastYearMarksError))}
          hasError={(touched.lastYearMarks || submitAttempted) && Boolean(lastYearMarksError)}
          errorMessage={lastYearMarksError}
        />

        <div className="md:col-span-2 space-y-3">
          <label className="mb-2 block text-sm font-medium text-slate-200">Previous Year Subjects and Marks</label>
          {academicRows.map((row, index) => (
            <div key={row.id} className="grid grid-cols-1 gap-3 rounded-xl border border-white/10 bg-slate-950/30 p-3 md:grid-cols-[1.2fr_0.8fr_auto]">
              <input
                type="text"
                value={row.subject}
                onChange={(event) => updateAcademicRow(row.id, 'subject', event.target.value)}
                placeholder={`Subject ${index + 1}`}
                className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:ring-2 ${
                  submitAttempted && academicRowsErrors[index]?.subject
                    ? 'border-red-400/70 focus:border-red-400/70 focus:ring-red-400/20'
                    : 'border-white/15 focus:border-cyan-300/60 focus:ring-cyan-400/20'
                }`}
              />
              <input
                type="number"
                min="0"
                max="100"
                value={row.marks}
                inputMode="numeric"
                onChange={(event) => updateAcademicRow(row.id, 'marks', getOnlyDigits(event.target.value))}
                onKeyDown={(event) => {
                  if (['e', 'E', '+', '-', '.'].includes(event.key)) {
                    event.preventDefault()
                  }
                }}
                placeholder="Marks (%)"
                className={`w-full rounded-xl border bg-slate-950/60 px-4 py-3 text-slate-100 outline-none transition focus:ring-2 ${
                  submitAttempted && academicRowsErrors[index]?.marks
                    ? 'border-red-400/70 focus:border-red-400/70 focus:ring-red-400/20'
                    : 'border-white/15 focus:border-cyan-300/60 focus:ring-cyan-400/20'
                }`}
              />
              <button
                type="button"
                onClick={() => removeAcademicRow(row.id)}
                disabled={academicRows.length === 1}
                className="cursor-pointer rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-red-300/60 hover:text-red-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Remove
              </button>
            </div>
          ))}
          {submitAttempted && hasAcademicRowsError ? (
            <p className="text-xs text-red-300">Please enter valid subject names and marks for all rows.</p>
          ) : null}
          <button
            type="button"
            onClick={addAcademicRow}
            className="cursor-pointer rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20"
          >
            + Add Subject
          </button>
        </div>

        <Input
          id="address"
          label="Address"
          as="textarea"
          rows={4}
          containerClassName="md:col-span-2"
          className="resize-none"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value)
            setStatus('idle')
          }}
          onBlur={() => setTouched((prev) => ({ ...prev, address: true }))}
          placeholder="Enter full address"
          inputClassName={inputClass((touched.address || submitAttempted) && Boolean(addressError))}
          hasError={(touched.address || submitAttempted) && Boolean(addressError)}
          errorMessage={addressError}
        />

        <div className="md:col-span-2">
          <button
            type="submit"
            disabled={status === 'submitting' || !REGISTRATION_SCRIPT_URL_OK}
            className="cursor-pointer inline-flex w-full items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 md:w-auto"
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Registration'}
          </button>
        </div>
      </form>
    </section>
  )
}

export default StudentRegistrationFormSection
