import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './footer'
import Header from './header'
import ScrollToTopButton from './ScrollToTopButton'

function Layout() {
  const location = useLocation()
  const isHomePage = location.pathname === '/home' || location.pathname === '/dashboard' || location.pathname === '/'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-app-bg text-slate-100">
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
        onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
      />
      {isMobileMenuOpen ? (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-90 bg-black/80 backdrop-blur-md md:hidden"
        />
      ) : null}
      <main className={isHomePage ? 'w-full flex-1' : 'mx-auto w-full max-w-7xl flex-1 px-4 py-6 md:px-6'}>
        <Outlet />
      </main>
      <ScrollToTopButton />
      <Footer />
    </div>
  )
}

export default Layout
