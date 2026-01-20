'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section, SectionHeader } from '../ui/Section'

gsap.registerPlugin(ScrollTrigger)

const skills = [
    { name: "Next.js", level: 95 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Node.js", level: 88 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Python", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MongoDB", level: 82 },
    { name: "GraphQL", level: 75 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 72 },
    { name: "Git", level: 90 },
]

const categories = [
    { name: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn", "Material UI"] },
    { name: "Backend", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"] },
    { name: "DevOps", skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "Linux"] },
    { name: "Tools", skills: ["Git", "Figma", "VS Code", "Postman", "Notion"] },
]

export default function Skills() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-category", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out"
            })

            gsap.from(".skill-bar-fill", {
                scrollTrigger: {
                    trigger: ".skill-bars",
                    start: "top 85%",
                },
                width: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section ref={container} id="skills" accent="pink">
            <SectionHeader
                label="Skills & Tech Stack"
                title="Technologies I Work With"
                description="A comprehensive toolkit for building modern, scalable web applications."
                center
            />

            {/* Skill Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {categories.map((cat, i) => (
                    <div key={i} className="skill-category glass p-6 rounded-2xl hover:bg-white/5 transition-colors">
                        <h3 className="text-white font-bold text-lg mb-4">{cat.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, j) => (
                                <span key={j} className="px-3 py-1 text-sm bg-accent-pink/10 text-accent-pink rounded-full">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Skill Bars */}
            <div className="skill-bars max-w-3xl mx-auto space-y-6">
                {skills.slice(0, 6).map((skill, i) => (
                    <div key={i} className="group">
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-medium">{skill.name}</span>
                            <span className="text-gray-400 font-mono text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-carbon-card rounded-full overflow-hidden">
                            <div
                                className="skill-bar-fill h-full bg-gradient-to-r from-accent-pink to-accent-purple rounded-full"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
