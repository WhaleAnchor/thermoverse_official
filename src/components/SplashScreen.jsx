// components/SplashScreen.jsx
import Image from 'next/image'

export default function SplashScreen() {
  return (
    <div
      className="
        fixed inset-0        /* covers viewport */
        z-[9999]             /* above everything */
        flex items-center justify-center
        bg-white
        animate-fade-out     /* fade the background */
      "
    >
      <div className="animate-logo-grow">
        <Image
          src="/img/darklogo.png"
          alt="ThermoVerse"
          width={300}
          height={100}
        />
      </div>
    </div>
  )
}