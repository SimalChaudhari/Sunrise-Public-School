import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CloseIcon, MenuIcon } from '../../icons'

function MobileMenuSection({ navItems, isOpen, onToggle, onClose }) {
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY
      document.body.dataset.mobileMenuScrollY = String(scrollY)
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.left = '0'
      document.body.style.right = '0'
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
    } else {
      const savedScrollY = Number(document.body.dataset.mobileMenuScrollY || 0)
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      delete document.body.dataset.mobileMenuScrollY
      if (savedScrollY > 0) {
        window.scrollTo(0, savedScrollY)
      }
    }

    return () => {
      const savedScrollY = Number(document.body.dataset.mobileMenuScrollY || 0)
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      delete document.body.dataset.mobileMenuScrollY
      if (savedScrollY > 0) {
        window.scrollTo(0, savedScrollY)
      }
    }
  }, [isOpen])

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
        className="cursor-pointer inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 p-2 text-slate-100"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-120">
          <aside className="absolute right-0 top-0 h-screen w-[86vw] max-w-[340px] overflow-y-auto border-l border-white/10 bg-slate-950 p-4 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-app-accent">Menu</p>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close mobile menu"
                className="rounded-lg border border-white/15 bg-white/10 p-2 text-slate-100"
              >
                <CloseIcon className="cursor-pointer h-4 w-4" />
              </button>
            </div>

            <nav className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition ${
                      isActive
                        ? 'border-app-primary/50 bg-app-primary/20 text-white'
                        : 'border-white/10 bg-white/5 text-slate-200'
                    }`
                  }
                >
                  <item.Icon className="text-2xl" />
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      ) : null}
    </div>
  )
}

export default MobileMenuSection
