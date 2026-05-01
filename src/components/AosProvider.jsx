import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

/**
 * AOS must run after React paints (SPA). Also refresh on route change so
 * newly mounted `data-aos` nodes are picked up.
 */
export default function AosProvider() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true,
    })
  }, [])

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      AOS.refresh()
    })
    return () => cancelAnimationFrame(id)
  }, [location.pathname])

  return null
}
