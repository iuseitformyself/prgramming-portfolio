'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTA() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".cta-content > *", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={container} id="cta" className="relative py-32 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10" />

            {/* Content */}
            <div className="cta-content relative z-10 max-w-4xl mx-auto text-center px-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                    Ready to Start Your Next Project?
                </h2>
                <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Let's collaborate to bring your vision to life. I'm currently available for freelance work and exciting new opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group px-8 py-4 bg-white text-carbon font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
                    >
                        Let's Talk
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <a
                        href="mailto:hello@taha.dev"
                        className="px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                    >
                        hello@taha.dev
                    </a>
                </div>
            </div>
        </section>
    )
}
