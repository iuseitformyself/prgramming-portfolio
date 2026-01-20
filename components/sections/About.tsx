'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section, SectionHeader } from '../ui/Section'
import { Code, Zap, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
    { value: "5+", label: "Years Experience", icon: <Zap size={24} /> },
    { value: "50+", label: "Projects Delivered", icon: <Code size={24} /> },
    { value: "30+", label: "Happy Clients", icon: <Users size={24} /> },
]

export default function About() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".about-content", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            })

            gsap.from(".about-stat", {
                scrollTrigger: {
                    trigger: ".about-stats",
                    start: "top 85%",
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
        <Section ref={container} id="about" accent="cyan" dark>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="about-content">
                    <SectionHeader
                        label="About Me"
                        title="Building the Future, One Line at a Time"
                    />

                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            I'm <span className="text-white font-semibold">Muhammad Taha</span>, a passionate
                            Full Stack Developer with over 5 years of experience creating digital solutions
                            that make an impact.
                        </p>
                        <p>
                            My expertise spans from crafting pixel-perfect frontends with
                            <span className="text-accent-cyan"> React & Next.js </span>
                            to building robust backends with Node.js. I specialize in creating
                            <span className="text-accent-cyan"> high-performance</span>,
                            <span className="text-accent-cyan"> SEO-optimized</span>, and
                            <span className="text-accent-cyan"> visually stunning</span> web applications.
                        </p>
                        <p>
                            When I'm not coding, I'm exploring new technologies, contributing to open source,
                            or helping businesses transform their digital presence.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="about-stats grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="about-stat glass p-8 rounded-2xl hover:bg-white/5 transition-colors group">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 rounded-xl bg-accent-cyan/10 text-accent-cyan group-hover:bg-accent-cyan group-hover:text-carbon transition-colors">
                                    {stat.icon}
                                </div>
                            </div>
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-gray-400 font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
