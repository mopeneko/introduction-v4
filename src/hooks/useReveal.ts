import { useEffect } from 'react'

/**
 * Shows each `[data-reveal]` element as it enters the viewport. Reduced
 * motion and missing IntersectionObserver both skip straight to visible.
 */
export function useReveal(): void {
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-reveal]')
    if (items.length === 0) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') {
      items.forEach((el) => el.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
