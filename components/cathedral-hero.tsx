"use client"

import { useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export function CathedralHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const exteriorRef = useRef<HTMLDivElement>(null)
  const interiorRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches
    const scrollDistance = isMobile ? 1200 : 2500
    const maxBlur = isMobile ? 10 : 20

    // Initial states — GSAP owns these properties exclusively, no CSS conflicts
    gsap.set(exteriorRef.current, { scale: 1, opacity: 1, filter: "blur(0px)" })
    gsap.set(interiorRef.current, { scale: 1.3, opacity: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        pin: true,
        scrub: isMobile ? 0.5 : 1,
      },
    })

    // Explicit durations as fractions of 1 so the timeline's total length is exactly 1,
    // mapping directly and proportionally to scroll progress (0 → 1) under scrub.
    // Opacity crossfade (exterior 1→0, interior 0→1) shares the exact same window
    // (0.15–0.55) so the two are always complementary — no simultaneous-dim dead zone.
    tl.to(exteriorRef.current, { scale: 2.8, filter: `blur(${maxBlur}px)`, ease: "none", duration: 0.65 }, 0)
      .to(exteriorRef.current, { opacity: 0, ease: "none", duration: 0.4 }, 0.15)
      .to(interiorRef.current, { scale: 1, ease: "none", duration: 0.85 }, 0.15)
      .to(interiorRef.current, { opacity: 1, ease: "none", duration: 0.4 }, 0.15)
      .to(titleRef.current, { opacity: 0, y: -40, ease: "none", duration: 0.3 }, 0)
  }, { scope: sectionRef })

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-background">
      {/* Exterior layer — basilica facade, zooms/fades/blurs away */}
      <div ref={exteriorRef} className="absolute inset-0 z-20">
        <Image
          src="/hero-exterior.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Interior layer — nave, settles into place as exterior clears */}
      <div ref={interiorRef} className="absolute inset-0 z-10">
        <Image
          src="/hero-interior.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Title overlay */}
      <div
        ref={titleRef}
        className="relative z-30 h-full flex flex-col items-center justify-center text-center px-4"
      >
        <Image
          src="/logo-volpinveritas.png"
          alt="VolpinVeritas"
          width={68}
          height={68}
          className="mb-6"
          priority
        />
        <h1 className="font-display text-3xl xs:text-4xl sm:text-6xl lg:text-7xl tracking-[0.02em] sm:tracking-[0.04em] text-foreground px-2">
          VOLPINVERITAS
        </h1>
        <p className="mt-5 font-serif italic text-lg sm:text-xl text-secondary">
          Imprenditore. Cattolico. Militante.
        </p>
        <p className="mt-2 font-serif text-base text-foreground/70">
          Ricostruiamo la fede e l&apos;Italia.
        </p>

        <div className="absolute bottom-10 animate-bounce">
          <svg
            className="w-6 h-6 text-secondary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
