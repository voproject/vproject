"use client"

import { useEffect } from "react"

/**
 * The homepage hero is pinned by GSAP ScrollTrigger, which breaks every normal
 * way of reaching #unisciti: the native anchor jump and scrollTo with
 * behavior:"smooth" both leave the page where it is (only the hash changes).
 * Instant scrollTo does work, so we step it ourselves.
 *
 * setInterval rather than requestAnimationFrame on purpose: rAF is suspended
 * entirely while a tab is in the background, which would strand the page
 * mid-scroll. setInterval keeps firing (throttled) and always finishes.
 *
 * Scoped to #unisciti: the guide pages handle #capitolo-N themselves, since
 * there the accordion has to open first.
 */
const HEADER_OFFSET = 90
const DURATION = 700
const TICK = 16

export function SignupAnchorScroll() {
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined

    const scrollToSignup = () => {
      const target = document.getElementById("unisciti")
      if (!target) return false

      if (timer) clearInterval(timer)
      const start = window.scrollY
      const end = target.getBoundingClientRect().top + start - HEADER_OFFSET
      const startedAt = performance.now()

      timer = setInterval(() => {
        const p = Math.min((performance.now() - startedAt) / DURATION, 1)
        // easeInOutQuad
        const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2
        window.scrollTo({ top: start + (end - start) * eased, behavior: "instant" })
        if (p >= 1 && timer) clearInterval(timer)
      }, TICK)

      return true
    }

    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.('a[href="#unisciti"]')
      if (!link) return
      if (!scrollToSignup()) return
      e.preventDefault()
      history.replaceState(null, "", "#unisciti")
    }

    // Landing on the page with the hash already set (shared links).
    if (window.location.hash === "#unisciti") {
      setTimeout(scrollToSignup, 300)
    }

    document.addEventListener("click", onClick)
    return () => {
      document.removeEventListener("click", onClick)
      if (timer) clearInterval(timer)
    }
  }, [])

  return null
}
