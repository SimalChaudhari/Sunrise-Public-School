import StandardCardSection from './StandardCardSection'

function StandardsGridSection({ standards }) {
  if (!standards.length) {
    return (
      <div data-aos="fade-up" className="rounded-3xl border border-white/10 bg-white/5 py-16 text-center shadow-sm">
        <h3 className="mb-2 text-xl font-bold text-white">No Standards Found</h3>
        <p className="text-lg text-slate-300">No standards available for display.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {standards.map((standard, index) => (
        <StandardCardSection key={standard.id} standard={standard} aosDelay={Math.min(index * 60, 300)} />
      ))}
    </div>
  )
}

export default StandardsGridSection
