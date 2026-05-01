/**
 * Numbered pagination: Prev, page buttons, Next.
 * Spread extra props (e.g. data-aos) onto the wrapper div.
 */
function Pagination({ currentPage, totalPages, onPageChange, className = '', ...rest }) {
  if (totalPages < 1) {
    return null
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-2 ${className}`.trim()}
      {...rest}
    >
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="cursor-pointer rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`cursor-pointer rounded-lg border px-3 py-2 text-sm transition ${
            page === currentPage
              ? 'border-cyan-300/70 bg-cyan-400/20 text-cyan-100'
              : 'border-white/15 bg-white/5 text-slate-200 hover:border-cyan-300/30'
          }`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="cursor-pointer rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-300/40 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
