import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

// Define your navigation items in one place
const navItems = [
  { path: '/about', label: 'About' },
  { path: '/innovation', label: 'Innovation' },
  { path: '/product', label: 'Product' },
  { path: '/services', label: 'Services' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const [lastY, setLastY] = useState(0)
  const menuRef = useRef(null)
  const router = useRouter()

  // Check if the current route starts with the given path
  const isActive = (path) => router.asPath.startsWith(path)
  const activeClasses = 'font-bold underline underline-offset-2'

  // Show or hide header on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setShow(y < lastY || y < 10)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const onClickOutside = (e) => {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [open])

  return (
    <>
      <header
        className={`
          fixed left-1/2 top-4 transform -translate-x-1/2
          w-full px-4 sm:px-6 lg:px-8 max-w-screen-2xl mx-auto z-50
          bg-white/60 backdrop-blur-md rounded-xl shadow-lg
          transition-all duration-300 ease-in-out
          ${show ? 'translate-y-0' : '-translate-y-full -mt-4'}
        `}
      >
        <div className="flex items-center justify-between px-6 py-6">
          <Link href="/">
            <Image src="/img/darklogo.png" alt="ThermoVerse" width={300} height={100} />
          </Link>

          <nav className="hidden md:flex space-x-12 text-gray-700 text-xl">
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                href={path}
                className={`font-secondary hover:text-blue-600 ${
                  isActive(path) ? activeClasses : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          {!open ? (
            <button
              className="md:hidden text-gray-700 font-medium px-3 py-1"
              onClick={(e) => {
                e.stopPropagation()
                setOpen(true)
              }}
              aria-label="Open menu"
            >
              Menu
            </button>
          ) : (
            <button
              className="md:hidden text-gray-700 font-medium px-3 py-1"
              onMouseDown={(e) => {
                e.stopPropagation()
                e.preventDefault()
                setOpen(false)
              }}
              aria-label="Close menu"
            >
              Close
            </button>
          )}
        </div>
      </header>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-x-0 top-[calc(4rem+1rem)] bottom-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      {open && (
        <div
          ref={menuRef}
          className="
            fixed inset-x-4 top-[calc(4rem+1rem)]
            bg-white/90 backdrop-blur-lg
            rounded-xl shadow-2xl p-6
            z-50 animate-slide-fade
            flex flex-col items-end space-y-4 text-lg
          "
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`font-secondary block text-right hover:text-blue-600 ${
                isActive(path) ? activeClasses : ''
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}