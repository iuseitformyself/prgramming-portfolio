'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-text", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            })

            // Continuous floating animation for the image
            gsap.to(".about-image-container", {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section id="about" className="justify-center">
            <div ref={container} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative group about-text mx-auto bg-transparent perspective-1000 order-1">
                    <div className="relative z-10 w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden border-2 border-green/10 group-hover:border-green/40 transition-all duration-500 bg-navy-800/50 shadow-2xl backdrop-blur-sm about-image-container">
                        <Image
                            src="/about-coding.png"
                            alt="Coding Illustration"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-navy-900/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-300"></div>
                    </div>
                    {/* Floating Elements Animation */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-green/10 rounded-full blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
                </div>

                <div className="order-2">
                    <div className="flex items-center gap-4 mb-8 about-text">
                        <span className="h-[1px] w-12 bg-green"></span>
                        <span className="text-green font-mono text-lg">About Me</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6 about-text">
                        Passionate about creating scalable, performant web applications.
                    </h2>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed about-text">
                        I am deeply passionate about designing and engineering scalable, high-performance web and mobile applications that deliver real value. My name is Muhammad Taha, and my journey into development began with hands-on experimentation—customizing Tumblr themes and discovering the creative potential of HTML and CSS.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed about-text">
                      Today, I specialize in developing modern user interfaces with Next.js and React.js, cross-platform mobile applications using React Native, and robust back-end systems with Node.js. I prioritize performance, clean architecture, and user-centered design to <span className="text-green">deliver reliable</span> and <span className="text-green">impactful solutions.</span>.
                    </p>
                </div>
            </div>
        </Section>
    )
}
