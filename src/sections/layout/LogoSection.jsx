import { Link } from 'react-router-dom'
import { SchoolIcon } from '../../icons'

function LogoSection() {
  return (
    <Link to="/home" className="flex items-center gap-3">
      <SchoolIcon className="text-4xl text-app-primary" />
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-300">School Profile</p>
        <p className="text-lg font-semibold text-white">Sunrise Public School</p>
      </div>
    </Link>
  )
}

export default LogoSection
