import { useEffect, useMemo, useState } from 'react'
import Pagination from '../../components/pagination'
import Dropdown from '../../components/dropdown'
import TeacherCardSection from './TeacherCardSection'

function TeachersGridSection({ teachers }) {
  const [searchText, setSearchText] = useState('')
  const [selectedSpecialization, setSelectedSpecialization] = useState('all')
  const [selectedStandard, setSelectedStandard] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const specializationOptions = useMemo(() => {
    const options = ['all', ...new Set(teachers.map((teacher) => teacher.specialization))]
    return options.map((option) => ({ value: option, label: option === 'all' ? 'All Subjects' : option }))
  }, [teachers])

  const standardOptions = useMemo(() => {
    const options = ['all', ...new Set(teachers.map((teacher) => teacher.standard))]
    return options.map((option) => ({ value: option, label: option === 'all' ? 'All Classes' : option }))
  }, [teachers])

  const filteredTeachers = useMemo(() => {
    return teachers.filter((teacher) => {
      const matchesSearch =
        teacher.name.toLowerCase().includes(searchText.toLowerCase()) ||
        teacher.specialization.toLowerCase().includes(searchText.toLowerCase())
      const matchesSpecialization =
        selectedSpecialization === 'all' || teacher.specialization === selectedSpecialization
      const matchesStandard = selectedStandard === 'all' || teacher.standard === selectedStandard

      return matchesSearch && matchesSpecialization && matchesStandard
    })
  }, [teachers, searchText, selectedSpecialization, selectedStandard])

  const totalPages = Math.max(1, Math.ceil(filteredTeachers.length / itemsPerPage))
  const paginatedTeachers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredTeachers.slice(start, start + itemsPerPage)
  }, [filteredTeachers, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchText, selectedSpecialization, selectedStandard])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  const hasActiveFilters = searchText || selectedSpecialization !== 'all' || selectedStandard !== 'all'

  const clearFilters = () => {
    setSearchText('')
    setSelectedSpecialization('all')
    setSelectedStandard('all')
  }

  const renderFiltersPanel = () => (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Teacher Directory Filters</p>
          <p className="mt-1 text-sm text-slate-300 font-secondary">
            Showing <span className="font-semibold text-white">{filteredTeachers.length}</span> teacher
            {filteredTeachers.length === 1 ? '' : 's'}
          </p>
        </div>
        <button
          type="button"
          onClick={clearFilters}
          disabled={!hasActiveFilters}
          className="cursor-pointer rounded-xl border border-white/15 bg-slate-950/60 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-200 transition hover:border-cyan-300/50 hover:text-cyan-100 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Clear Filters
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <label className="space-y-2">
          <span className="text-xs font-medium uppercase tracking-wide text-slate-300">Search</span>
          <input
            type="text"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="Name or subject"
            className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20"
          />
        </label>

        <Dropdown
          label="Subject"
          value={selectedSpecialization}
          options={specializationOptions}
          onChange={setSelectedSpecialization}
          placeholder="All Subjects"
        />

        <Dropdown
          label="Class"
          value={selectedStandard}
          options={standardOptions}
          onChange={setSelectedStandard}
          placeholder="All Classes"
        />
      </div>
    </div>
  )

  if (!paginatedTeachers.length) {
    return (
      <section className="space-y-6">
        {renderFiltersPanel()}

        <div className="rounded-3xl border border-white/10 bg-white/5 py-16 text-center shadow-sm">
          <h3 className="mb-2 text-xl font-bold text-white">No Teachers Found</h3>
          <p className="text-lg text-slate-300 font-secondary">No teachers found matching your filters.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      {renderFiltersPanel()}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedTeachers.map((teacher) => (
          <TeacherCardSection key={teacher.id} teacher={teacher} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </section>
  )
}

export default TeachersGridSection
