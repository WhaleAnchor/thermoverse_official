// pages/product.js
import Footer from '@/components/Footer'

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow pt-32">
        {/* hero */}
        <section className="pt-8 pb-8 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-main mb-4">Thermal Smart Ceiling Tile</h1>
            <p className="text-lg font-other text-gray-700">
              Our Thermal Smart Ceiling Tile integrates cutting-edge sensor technology for real-time temperature monitoring and energy optimization.
            </p>
          </div>
        </section>
        {/* content */}
        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl font-main">Features</h2>
            <p className="font-other text-gray-700">
              Describe key features here, such as smart temperature control, seamless integration, and energy savings.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}