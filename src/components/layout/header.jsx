import { useEffect, useState } from 'react'
import { ClassesIcon, ContactPhonebookIcon, HomeIcon, StandardsIcon, StudentRegisterIcon, SubjectsIcon, TeachersIcon } from '../../icons'
import DesktopMenuSection from '../../sections/layout/DesktopMenuSection'
import LogoSection from '../../sections/layout/LogoSection'
import MobileMenuSection from '../../sections/layout/MobileMenuSection'

const navItems = [
  { path: '/home', label: 'Home', Icon: HomeIcon },
  { path: '/teachers', label: 'Teachers', Icon: TeachersIcon },
  { path: '/subjects', label: 'Subjects', Icon: SubjectsIcon },
  { path: '/standards', label: 'Standards', Icon: StandardsIcon },
  { path: '/classes', label: 'Classes', Icon: ClassesIcon },
  { path: '/contact', label: 'Contact', Icon: ContactPhonebookIcon },
  { path: '/student-registration', label: 'Registration', Icon: StudentRegisterIcon },
]

function Header({ isMobileMenuOpen, onToggleMobileMenu, onCloseMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'border-b border-white/10 bg-slate-950/55 backdrop-blur-xl' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <LogoSection />
          <DesktopMenuSection navItems={navItems} />
          <MobileMenuSection
            navItems={navItems}
            isOpen={isMobileMenuOpen}
            onToggle={onToggleMobileMenu}
            onClose={onCloseMobileMenu}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
