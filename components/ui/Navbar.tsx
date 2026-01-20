'use client'
import React, { useEffect, useState } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="px-6 md:px-12 flex items-center justify-between max-w-[1400px] mx-auto">
                <a href="#" className="text-green font-bold text-xl font-mono border-2 border-green p-1 rounded hover:bg-green/10 transition-colors">MT</a>

                <div className="hidden md:flex gap-8 font-mono text-sm text-slate-300">
                    <a href="#about" className="hover:text-green transition-colors">About</a>
                    <a href="#projects" className="hover:text-green transition-colors">Work</a>
                    <a href="#contact" className="hover:text-green transition-colors">Contact</a>
                </div>
            </div>
        </nav>
    )
}
