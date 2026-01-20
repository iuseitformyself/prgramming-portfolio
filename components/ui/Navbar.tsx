'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = (href: string) => {
        setIsOpen(false)
        const el = document.querySelector(href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-carbon/80 backdrop-blur-lg border-b border-white/5' : ''}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <a href="#hero" className="text-white font-bold text-xl">
                        MT<span className="text-accent-purple">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <button
                                key={i}
                                onClick={() => handleClick(link.href)}
                                className="text-gray-400 hover:text-white transition-colors text-sm font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleClick('#contact')}
                            className="px-5 py-2 bg-white text-carbon font-medium rounded-full text-sm hover:bg-gray-100 transition-colors"
                        >
                            Hire Me
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-carbon-light border-t border-white/5">
                    <div className="px-6 py-6 space-y-4">
                        {navLinks.map((link, i) => (
                            <button
                                key={i}
                                onClick={() => handleClick(link.href)}
                                className="block w-full text-left text-gray-300 hover:text-white py-2 text-lg"
                            >
                                {link.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleClick('#contact')}
                            className="w-full px-5 py-3 bg-white text-carbon font-medium rounded-full mt-4"
                        >
                            Hire Me
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
