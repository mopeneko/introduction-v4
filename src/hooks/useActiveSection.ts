import { useEffect } from 'react'

const BAND = '-30% 0px -60% 0px'

/**
 * Marks the nav link of the section in the reading band. The hero is observed
 * too, without a link, so scrolling back to it clears the last mark.
 */
export function useActiveSection(ids: readonly string[]): void {
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const links = new Map<string, HTMLAnchorElement | null>(
      ids.map((id) => [
        id,
        document.querySelector<HTMLAnchorElement>(`.nav a[href="#${id}"]`),
      ]),
    )
    const targets = [...ids, 'top']
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (targets.length === 0) return

    const inBand = new Set<string>()
    const apply = () => {
      const active = targets.findLast((el) => inBand.has(el.id) && links.has(el.id))
      for (const [id, link] of links) {
        if (link === null) continue
        if (active !== undefined && id === active.id) {
          link.setAttribute('aria-current', 'true')
        } else {
          link.removeAttribute('aria-current')
        }
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) inBand.add(entry.target.id)
          else inBand.delete(entry.target.id)
        }
        apply()
      },
      { rootMargin: BAND },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])
}
