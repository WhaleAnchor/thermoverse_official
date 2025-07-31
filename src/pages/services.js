// pages/services.js
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-32">
        <section className="pt-8 pb-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-main mb-4">Services</h1>
            <p className="text-lg font-other text-gray-700">
              Placeholder intro text describing ThermoVerse services.
            </p>
          </div>
        </section>
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-main">Our Offerings</h2>
            <p className="font-other text-gray-700">
              Placeholder details about the services ThermoVerse provides.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}