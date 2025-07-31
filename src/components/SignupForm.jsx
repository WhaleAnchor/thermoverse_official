import Image from 'next/image'

export default function SignupForm() {
  return (
    <section id="signup" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Column 1: Map */}
        <div className="w-full h-64 md:h-auto">
          <div className="mb-4 flex justify-center">
            <Image
              src="/img/darklogo.png"
              alt="ThermoVerse Logo"
              width={200}
              height={80}
            />
          </div>
          <div className="relative overflow-hidden" style={{ paddingTop: '100%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps?q=2050+15th+St,+Detroit,+MI+48216&output=embed"
              frameBorder="0"
              allowFullScreen
              loading="lazy"
              title="ThermoVerse Detroit Office"
            />
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="text-gray-800">
          <div className="mb-6">
            <h3 className="text-xl font-main mb-2">Explore</h3>
            <ul className="space-y-1 font-other">
              <li><a href="/about" className="underline">About us</a></li>
              <li><a href="/innovation" className="underline">Innovation</a></li>
              <li><a href="/services" className="underline">Energy</a></li>
              <li><a href="/product" className="underline">Product</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-main mb-2">Follow us</h3>
            <ul className="space-y-1 font-other">
              <li><a href="https://linkedin.com" className="underline" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://instagram.com" className="underline" target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        {/* Column 3: Signup Form */}
        <div className="text-gray-800">
          <h3 className="text-xl font-main mb-2">Sign up with your email address to receive news and updates.</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 px-4 py-2 border rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}