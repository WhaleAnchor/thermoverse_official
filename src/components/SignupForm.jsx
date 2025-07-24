export default function SignupForm() {
  return (
    <section id="signup" className="py-12 bg-white">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Sign up with your email address to receive news and updates.
        </h2>
        <form className="flex flex-col sm:flex-row gap-2">
            <input
                className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
                type="email"
                placeholder="Email address"
            />
            <button className="font-secondary **:px-6 py-3 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                Sign Up
            </button>
        </form>
      </div>
    </section>
  )
}