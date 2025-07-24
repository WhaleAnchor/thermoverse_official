// src/components/Footer.jsx
import { Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} ThermoVerse, Inc.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://linkedin.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ThermoVerse on LinkedIn"
            className="opacity-70 hover:opacity-100 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ThermoVerse on Instagram"
            className="opacity-70 hover:opacity-100 transition"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  )
}