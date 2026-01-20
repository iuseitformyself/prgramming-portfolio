'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'
import {
    Code, Server, Database, Layout,
    Smartphone, Terminal, Globe, Cpu
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const skills = [
    { name: "Next.js", icon: <Globe size={24} /> },
    { name: "React.js", icon: <Code size={24} /> },
    { name: "Node.js", icon: <Server size={24} /> },
    { name: "TypeScript", icon: <Terminal size={24} /> },
    { name: "Tailwind CSS", icon: <Layout size={24} /> },
    { name: "GSAP", icon: <Cpu size={24} /> },
    { name: "REST APIs", icon: <Database size={24} /> },
    { name: "Responsive Design", icon: <Smartphone size={24} /> },
]

export default function Skills() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".skill-item", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section id="skills" className="justify-center">
            <div ref={container}>
                <div className="flex items-center gap-4 mb-12">
                    <span className="h-[1px] w-12 bg-green"></span>
                    <span className="text-green font-mono text-lg">My Skills</span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-16 max-w-2xl">
                    Here are a few technologies I&apos;ve been working with recently:
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-item bg-navy-800 p-6 rounded-lg border border-navy-700 hover:border-green/50 hover:-translate-y-2 transition-all duration-300 group"
                        >
                            <div className="text-green mb-4 group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-slate-300 font-semibold text-lg">{skill.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
