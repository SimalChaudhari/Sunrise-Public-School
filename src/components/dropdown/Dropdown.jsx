import { useEffect, useMemo, useRef, useState } from 'react'

function Dropdown({ label, value, options, onChange, placeholder = 'Select option' }) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  const selectedLabel = useMemo(() => {
    const matched = options.find((option) => option.value === value)
    return matched ? matched.label : placeholder
  }, [options, value, placeholder])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!wrapperRef.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <div ref={wrapperRef} className="space-y-2">
      {label ? <span className="text-xs font-medium uppercase tracking-wide text-slate-300">{label}</span> : null}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="cursor-pointer flex w-full items-center justify-between rounded-xl border border-white/15 bg-linear-to-r from-slate-950/80 to-slate-900/80 px-4 py-3 text-sm text-slate-100 transition hover:border-cyan-300/35 focus:border-cyan-300/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="truncate">{selectedLabel}</span>
        <span className={`text-xs text-slate-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>

      {isOpen ? (
        <div className="relative">
          <ul className="custom-dropdown-scroll absolute z-130 mt-1 max-h-64 w-full space-y-2 p-2 overflow-auto rounded-xl border border-cyan-300/20 bg-slate-950/95 p-1 shadow-2xl backdrop-blur-xl">
            {options.map((option) => (
              <li key={option.value}>
                <button
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`cursor-pointer w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                    option.value === value
                      ? 'bg-cyan-400/20 text-cyan-100'
                      : 'text-slate-200 hover:bg-white/10 hover:text-white'
                  }`}
                  role="option"
                  aria-selected={option.value === value}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default Dropdown
