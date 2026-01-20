'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'
import Image from 'next/image'

export default function Hero() {
    const comp = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            tl.from(".hero-img", {
                scale: 0.5,
                opacity: 0,
                duration: 1,
                ease: "back.out(1.7)"
            })
                .from(".hero-text", {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out"
                }, "-=0.5")
                .from(".hero-btn", {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    ease: "back.out(1.7)"
                }, "-=0.5")

        }, comp)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={comp}>
            <Section id="hero" className="flex flex-col justify-center min-h-screen pt-20">
                <div className="hero-img w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-green mb-8 shadow-2xl shadow-green/20">
                    <Image
                        src="/taha.jpeg"
                        alt="Muhammad Taha"
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <h3 className="hero-text text-green font-mono text-lg mb-5">
                    Hi, my name is
                </h3>
                <h1 className="hero-text text-5xl md:text-7xl font-bold text-slate-100 mb-4">
                    Muhammad Taha.
                </h1>
                <h2 className="hero-text text-4xl md:text-6xl font-bold text-slate-400 mb-8">
                    I build modern web experiences.
                </h2>
                <p className="hero-text max-w-xl text-slate-400 text-lg mb-12 leading-relaxed">
              I believe strong client relationships are built on trust and clarity. I focus on clear communication, realistic commitments, and delivering work that clients can confidently rely on.
                </p>
                <div className="hero-btn">
                    <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                        Check out my work!
                    </Button>
                </div>
            </Section>
        </div>
    )
}
