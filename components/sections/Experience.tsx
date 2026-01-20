'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section, SectionHeader } from '../ui/Section'
import { Briefcase, GraduationCap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const experiences = [
    {
        type: "work",
        title: "Senior Full Stack Developer",
        company: "Freelance / Remote",
        period: "2022 - Present (2026)",
        description: "Leading development of high-performance web applications for clients worldwide. Specializing in Next.js, React, and modern JavaScript ecosystems."
    },
    {
        type: "work",
        title: "Full Stack Developer",
        company: "Tech Startup",
        period: "2020 - 2022",
        description: "Built and maintained multiple SaaS products. Implemented CI/CD pipelines, optimized database queries, and mentored junior developers."
    },
    {
        type: "work",
        title: "Frontend Developer",
        company: "Digital Agency",
        period: "2019 - 2020",
        description: "Developed responsive websites and interactive web applications. Collaborated with design teams to implement pixel-perfect UIs."
    },
    {
        type: "education",
        title: "Computer Science (Ongoing Study)",
        company: "University",
        period: "2024 - Present (2026)",
        description: "Continuing studies in computer science, software engineering, and modern web technologies alongside professional work."
    },
]


export default function Experience() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".timeline-item", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            })

            gsap.from(".timeline-line", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                scaleY: 0,
                transformOrigin: "top",
                duration: 1.5,
                ease: "power3.out"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section ref={container} id="experience" accent="green" dark>
            <SectionHeader
                label="Experience"
                title="My Journey"
                description="A timeline of my professional growth and education."
            />

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-green via-accent-green/50 to-transparent md:-translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            className={`timeline-item relative pl-8 md:pl-0 ${i % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%]'}`}
                        >
                            {/* Dot */}
                            <div className={`absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-accent-green md:-translate-x-1/2 ring-4 ring-carbon-light`} />

                            {/* Content */}
                            <div className={`glass p-6 rounded-2xl ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                                <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                                    {exp.type === 'work' ? (
                                        <Briefcase size={16} className="text-accent-green" />
                                    ) : (
                                        <GraduationCap size={16} className="text-accent-green" />
                                    )}
                                    <span className="text-accent-green font-mono text-sm">{exp.period}</span>
                                </div>
                                <h3 className="text-white text-xl font-bold mb-1">{exp.title}</h3>
                                <p className="text-gray-400 text-sm mb-3">{exp.company}</p>
                                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
