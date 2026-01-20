'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'
import { ArrowDown } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
    const container = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero entrance animation
            const tl = gsap.timeline()

            tl.from(".hero-label", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            })
                .from(".hero-title-line", {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power4.out"
                }, "-=0.4")
                .from(".hero-subtitle", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.5")
                .from(".hero-cta", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.5")
                .from(".hero-scroll", {
                    y: -20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.3")

            // Floating orb animation
            gsap.to(".hero-orb", {
                y: -30,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })

        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-carbon">
            {/* Background Orbs */}
            <div className="hero-orb absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent blur-[100px] pointer-events-none" />
            <div className="hero-orb absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-transparent blur-[80px] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
                <div className="hero-label">
                    <span className="inline-block px-4 py-2 rounded-full glass text-sm font-mono text-gray-300 mb-8">
                        Full Stack Developer • Available for Projects
                    </span>
                </div>

                <div ref={titleRef} className="overflow-hidden mb-6">
                    <h1 className="hero-title-line text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
                        Muhammad Taha
                    </h1>
                </div>

                <div className="overflow-hidden mb-8">
                    <h2 className="hero-title-line text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                        <span className="gradient-text">Crafting Digital Experiences</span>
                    </h2>
                </div>

                <p className="hero-subtitle text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                    I design and develop high-performance web applications that merge
                    <span className="text-white"> technical excellence </span>
                    with stunning visuals. Let's build something extraordinary.
                </p>

                <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-white text-carbon font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        Get In Touch
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero-scroll absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
                <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
                <ArrowDown size={20} className="animate-bounce" />
            </div>
        </section>
    )
}
