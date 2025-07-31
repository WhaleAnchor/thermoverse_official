// pages/index.js
import Hero from '@/components/Hero'
import LogoCarousel from '@/components/LogoCarousel'
import SignupForm from '@/components/SignupForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <SignupForm />
      <Footer />
    </>
  )
}