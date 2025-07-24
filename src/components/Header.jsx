import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastY, setLastY] = useState(0)
  const menuRef = useRef(null)
  const router = useRouter()

  // helper to know if this is the active page (startsWith for better matching)
  const isActive = (path) => router.asPath.startsWith(path)
  // Show/hide header on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShow(y < lastY || y < 10)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  // Close when clicking outside the drawer
  useEffect(() => {
    const onClickOutside = e => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <>
      {/* Suspended, auto-hiding header */}
      <header
        className={`
          fixed left-1/2 top-4 transform -translate-x-1/2
          w-[90%] max-w-7xl z-50
          bg-white/50 backdrop-blur-md rounded-xl shadow-lg
          transition-all duration-300 ease-in-out
          ${show ? 'translate-y-0' : '-translate-y-full -mt-4'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4">
          <a href="/">
            <Image src="/img/darklogo.png" alt="ThermoVerse" width={300} height={100} />
          </a>

          <nav className="hidden md:flex space-x-12 text-gray-700 text-xl">
            <Link
              href="/about"
              className={`
                font-secondary hover:text-blue-600
                ${isActive('/about') ? 'font-bold' : ''}
              `}
            >
              About
            </Link>
            <Link
              href="/innovation"
              className={`
                font-secondary hover:text-blue-600
                ${isActive('/innovation') ? 'font-bold' : ''}
              `}
            >
              Innovation
            </Link>
            <Link
              href="/productconsultation"
              className={`
                font-secondary hover:text-blue-600
                ${isActive('/productconsultation') ? 'font-bold' : ''}
              `}
            >
              Product Consultation
            </Link>
            <Link
              href="/energyservices"
              className={`
                font-secondary hover:text-blue-600
                ${isActive('/energyservices') ? 'font-bold' : ''}
              `}
            >
              Energy Services
            </Link>
          </nav>
            
          {/* Mobile Open Button (when menu is closed) */}
{!open && (
  <button
    className="md:hidden text-gray-700 font-medium px-3 py-1"
    onClick={e => {
      e.stopPropagation()
      setOpen(true)
    }}
    aria-label="Open menu" 
  >
    Menu
  </button>
)}

{/* Mobile Close Button (when menu is open) */}
{open && (
  <button
    className="md:hidden text-gray-700 font-medium px-3 py-1"
    onMouseDown={e => {
      e.stopPropagation()
      e.preventDefault()   // prevent the subsequent click
      setOpen(false)
    }}
    aria-label="Close menu"
  >
    Close
  </button>
)}
        </div>
      </header>

      {/* Backdrop below header only */}
      {open && (
        <div
          className="fixed inset-x-0 top-[calc(4rem+1rem)] bottom-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer card below header */}
      {open && (
        <div
          ref={menuRef}
          className={`
            fixed inset-x-4 top-[calc(4rem+1rem)]
            bg-white/90 backdrop-blur-lg
            rounded-xl shadow-2xl p-6
            z-50 animate-slide-fade
            flex flex-col items-end space-y-4 text-lg
          `}
          onClick={e => e.stopPropagation()}
        >
          <a href="/about" className="font-secondary block text-right hover:text-blue-600">About</a>
          <a href="/innovation" className="font-secondary block text-right hover:text-blue-600">Innovation</a>
          <a href="/productconsultation" className="font-secondary block text-right hover:text-blue-600">Product Consultation</a>
          <a href="/energyservices" className="font-secondary block text-right hover:text-blue-600">Energy Services</a>
        </div>
      )}
    </>
  )
}