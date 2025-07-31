// pages/_app.js
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import SplashScreen from '@/components/SplashScreen'

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [showSplash, setShowSplash] = useState(false)

  useEffect(() => {
    if (!router.isReady || router.pathname !== '/') return

    const HOUR = 1000 * 60 * 60
    const now = Date.now()
    const last = localStorage.getItem('lastSplash')
    const seenThisSession = sessionStorage.getItem('splashShown')

    // 1) If we've already shown in this tab, skip entirely
    if (seenThisSession) {
      console.log('[Splash] skip: seenThisSession')
      return
    }

    // 2) Throttle: if never shown or >1h since last, show
    if (!last || now - parseInt(last, 10) > HOUR) {
      console.log('[Splash] show: first or over an hour')
      setShowSplash(true)
      localStorage.setItem('lastSplash', now.toString())
    } else {
      console.log('[Splash] skip: within throttle window')
    }

    // 3) Mark session so we never show again on refresh/spa
    sessionStorage.setItem('splashShown', 'true')

    // 4) If we decided to show it, auto-hide after animation length
    if (!last || now - parseInt(last, 10) > HOUR) {
      const timer = setTimeout(() => {
        console.log('[Splash] hiding after timeout')
        setShowSplash(false)
      }, 2000) // match your animation duration
      return () => clearTimeout(timer)
    }
  }, [router.isReady, router.pathname])

  return (
    <>
      <Header />

      {showSplash && <SplashScreen />}

      <Component {...pageProps} />
    </>
  )
}