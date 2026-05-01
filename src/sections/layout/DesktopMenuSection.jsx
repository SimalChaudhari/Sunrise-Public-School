import { NavLink } from 'react-router-dom'

function DesktopMenuSection({ navItems }) {
  return (
    <nav className="hidden flex-wrap gap-2 xl:flex">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm transition ${
              isActive
                ? 'border-app-primary/50 bg-app-primary/20 text-white'
                : 'border-white/10 bg-white/5 text-slate-200 hover:border-app-primary/30 hover:bg-white/10'
            }`
          }
        >
          <item.Icon className="text-2xl" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default DesktopMenuSection
