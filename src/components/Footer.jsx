export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p>&copy; {new Date().getFullYear()} ThermoVerse, Inc.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://linkedin.com/yourprofile" target="_blank" rel="noreferrer">
            <img src="/img/linkedin.svg" alt="LinkedIn" className="h-6" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer">
            <img src="/img/instagram.svg" alt="Instagram" className="h-6" />
          </a>
        </div>
      </div>
    </footer>
  )
}