import Hero from '../components/Hero'
import SignupForm from '../components/SignupForm'
import LogoCarousel from '@/components/LogoCarousel'

export default function Home() {
  return (
    <>
      <Hero />

      <LogoCarousel />

      <SignupForm />
    </>
  )
}