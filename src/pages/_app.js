import '../styles/globals.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

export default function MyApp({ Component, pageProps }) {
  // show splash overlay
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // unmount splash after 2s (animation duration)
    const timeout = setTimeout(() => setShowSplash(false), 2500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {/* Your persistent header */}
      <Header />

      {/* Main page content */}
      <Component {...pageProps} />

      {/* Splash overlay */}
      {showSplash && (
        <div
          id="splash-screen"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white "
        >
          <div id="splash-logo" className="animate-logo-grow">
            <Image
              src="/img/darklogo.png"
              alt="ThermoVerse"
              width={300}
              height={100}
            />
          </div>
        </div>
      )}
    </>
  )
}