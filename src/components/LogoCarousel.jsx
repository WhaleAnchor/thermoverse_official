// src/components/LogoCarousel.jsx
import Image from 'next/image'
import { useMemo } from 'react'

const logos = [
  '/img/abc_construction.png',
  '/img/CORPS_nsf.png',
  '/img/crossroads.png',
  '/img/IMPEL.png',
  '/img/newlab.png',
  '/img/RISE.png',
  '/img/spark.png',
  '/img/USDOE.png',
]

function LogoItem({ src, alt }) {
  return (
    <div className="flex-shrink-0 mr-12 last:mr-0">
      <Image
        src={src}
        alt={alt}
        width={150}
        height={75}
        className="opacity-80 hover:opacity-100 transition-opacity"
      />
    </div>
  )
}

export default function LogoCarousel({ duration = 20 }) {
  // double the list for seamless looping, memoized so it only runs once
  const extended = useMemo(() => [...logos, ...logos], [])

  return (
    <div className="relative overflow-hidden py-8 bg-white">
      {/* Fade overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      {/* Scrolling track */}
      <div
        className="logo-track flex items-center"
        style={{ animation: `scroll ${duration}s linear infinite` }}
        onMouseEnter={e => (e.currentTarget.style.animationPlayState = 'paused')}
        onMouseLeave={e => (e.currentTarget.style.animationPlayState = 'running')}
      >
        {extended.map((src, idx) => (
          <LogoItem key={idx} src={src} alt={`Logo ${idx % logos.length}`} />
        ))}
      </div>
    </div>
  )
}