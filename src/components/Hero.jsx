// src/components/Hero.jsx
import { useRef, useEffect } from 'react'


export default function Hero() {
    const videoRef = useRef(null)

    useEffect(() => {
        if (videoRef.current) {
        // 0.5 = half speed, 0.75 = ¾ speed, etc.
        videoRef.current.playbackRate = 0.5
        }
    }, [])
    return (
    <section className="relative w-full h-screen overflow-hidden pt-16">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        poster="/videos/hero-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="font-primary text-4xl md:text-6xl lg:text-7xl font-bold">
          SMART CITY INNOVATION
        </h1>
        <p className="font-secondary mt-4 text-lg md:text-2xl">
          Powering Global Efficiency From Ceiling To Grid
        </p>
        <a
          href="#signup"
          className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
        >
          Learn More
        </a>
      </div>
    </section>
  )
}