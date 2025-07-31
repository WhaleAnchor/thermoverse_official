// pages/about.js
import LogoCarousel from '@/components/LogoCarousel'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <>
      {/* Site Header */}
      <main className="pt-32">

      {/* Hero / Page Title */}
      <section className="pt-24 pb-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-main mb-4">About ThermoVerse</h1>
          <p className="text-lg font-other text-gray-700">
            Learn more about our mission, team, and the technologies powering smarter, greener cities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 space-y-8">
          <h2 className="text-2xl font-main">Our Mission</h2>
          <p className="font-other text-gray-700">
            {/* Replace with your actual mission statement */}
            ThermoVerse is dedicated to optimizing energy efficiency through innovative smart-city solutions...
          </p>

          <h2 className="text-2xl font-main">Our Team</h2>
          <p className="font-other text-gray-700">
            {/* Introduce your team or link to profiles */}
            Our interdisciplinary team of engineers, designers, and strategists work together to drive impact...
          </p>

          {/* Add more sections as needed */}
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Footer */}
      <Footer />
      </main>
    </>
  )
}