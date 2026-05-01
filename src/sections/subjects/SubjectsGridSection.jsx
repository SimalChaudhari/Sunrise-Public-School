import AOS from 'aos'
import { useEffect, useMemo, useState } from 'react'
import Pagination from '../../components/pagination'
import Dropdown from '../../components/dropdown'
import SubjectCardSection from './SubjectCardSection'

function SubjectsGridSection({ subjects }) {
  const [searchText, setSearchText] = useState('')
  const [selectedStandard, setSelectedStandard] = useState('all')
  const [selectedTeacher, setSelectedTeacher] = useState('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const standardOptions = useMemo(() => {
    const options = ['all', ...new Set(subjects.map((subject) => subject.standard))]
    return options.map((option) => ({ value: option, label: option === 'all' ? 'All Classes' : option }))
  }, [subjects])

  const teacherOptions = useMemo(() => {
    const options = ['all', ...new Set(subjects.map((subject) => subject.teacher))]
    return options.map((option) => ({ value: option, label: option === 'all' ? 'All Teachers' : option }))
  }, [subjects])

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const matchesSearch =
        subject.name.toLowerCase().includes(searchText.toLowerCase()) ||
        subject.teacher.toLowerCase().includes(searchText.toLowerCase())
      const matchesStandard = selectedStandard === 'all' || subject.standard === selectedStandard
      const matchesTeacher = selectedTeacher === 'all' || subject.teacher === selectedTeacher

      return matchesSearch && matchesStandard && matchesTeacher
    })
  }, [subjects, searchText, selectedStandard, selectedTeacher])

  const totalPages = Math.max(1, Math.ceil(filteredSubjects.length / itemsPerPage))
  const paginatedSubjects = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredSubjects.slice(start, start + itemsPerPage)
  }, [filteredSubjects, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchText, selectedStandard, selectedTeacher])

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [currentPage, totalPages])

  useEffect(() => {
    requestAnimationFrame(() => AOS.refresh())
  }, [paginatedSubjects, filteredSubjects.length, currentPage])

  const hasActiveFilters = searchText || selectedStandard !== 'all' || selectedTeacher !== 'all'

  const clearFilters = () => {
    setSearchText('')
    setSelectedStandard('all')
    setSelectedTeacher('all')
  }

  const renderFiltersPanel = () => (
    <div data-aos="fade-up" className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Subjects Filters</p>
          <p className="mt-1 text-sm text-slate-300 font-secondary">
            Showing <span className="font-semibold text-white">{filteredSubjects.length}</span> subject
            {filteredSubjects.length === 1 ? '' : 's'}
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
            placeholder="Subject or teacher"
            className="w-full rounded-xl border border-white/15 bg-slate-950/60 px-4 py-2.5 text-sm text-slate-100 outline-none transition focus:border-cyan-300/60 focus:ring-2 focus:ring-cyan-400/20"
          />
        </label>

        <Dropdown
          label="Class"
          value={selectedStandard}
          options={standardOptions}
          onChange={setSelectedStandard}
          placeholder="All Classes"
        />

        <Dropdown
          label="Teacher"
          value={selectedTeacher}
          options={teacherOptions}
          onChange={setSelectedTeacher}
          placeholder="All Teachers"
        />
      </div>
    </div>
  )

  if (!paginatedSubjects.length) {
    return (
      <section className="space-y-6">
        {renderFiltersPanel()}
        <div data-aos="fade-up" className="rounded-3xl border border-white/10 bg-white/5 py-16 text-center shadow-sm">
          <h3 className="mb-2 text-xl font-bold text-white">No Subjects Found</h3>
          <p className="text-lg text-slate-300">No subjects available for the selected criteria.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="space-y-6">
      {renderFiltersPanel()}

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedSubjects.map((subject, index) => (
          <SubjectCardSection key={subject.id} subject={subject} aosDelay={Math.min(index * 60, 300)} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        data-aos="fade-up"
      />
    </section>
  )
}

export default SubjectsGridSection
