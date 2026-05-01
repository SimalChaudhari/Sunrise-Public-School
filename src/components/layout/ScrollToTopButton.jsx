import { useEffect, useState } from 'react'
import { ChevronUpIcon } from '../../icons'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!isVisible) return null

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={handleScrollToTop}
      className="cursor-pointer fixed bottom-6 right-4 z-80 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/40 bg-slate-900/80 text-cyan-100 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:bg-cyan-500 hover:text-slate-950 md:bottom-8 md:right-8"
    >
      <ChevronUpIcon className="h-6 w-6" />
    </button>
  )
}

export default ScrollToTopButton
