// pages/index.jsx
import Hero from '../components/Hero'
import LogoCarousel from '@/components/LogoCarousel'
import SignupForm from '../components/SignupForm'

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <SignupForm />
    </>
  )
}