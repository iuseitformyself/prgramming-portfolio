'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'

gsap.registerPlugin(ScrollTrigger)

const steps = [
    {
        number: "01",
        title: "Discovery",
        desc: "We start by understanding your goals, target audience, and requirements. I ask the right questions to ensure we're solving the right problems."
    },
    {
        number: "02",
        title: "Strategy & Design",
        desc: "Planning the architecture, tech stack, and user experience. This phase ensures a solid foundation before a single line of code is written."
    },
    {
        number: "03",
        title: "Development",
        desc: "Building the application using modern best practices. I focus on clean code, performance, and accessibility throughout this phase."
    },
    {
        number: "04",
        title: "Review & Launch",
        desc: "Rigorous testing and refinement. Once everything is perfect, we launch your product to the world and ensure smooth operation."
    }
]

export default function Process() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".process-step", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 70%",
                },
                x: -50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section id="process" className="py-24 bg-navy-800/20">
            <div ref={container}>
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-32">
                            <div className="flex items-center gap-4 mb-8">
                                <span className="h-[1px] w-12 bg-green"></span>
                                <span className="text-green font-mono text-lg">My Process</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 leading-tight">
                                How I bring ideas to life.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                A structured workflow designed for clarity, efficiency, and exceptional results.
                            </p>
                        </div>
                    </div>

                    <div className="md:w-2/3 flex flex-col gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="process-step flex gap-6 md:gap-10 group cursor-default">
                                <div className="font-mono text-4xl md:text-5xl font-bold text-navy-700 group-hover:text-green transition-colors duration-300 mt-2">
                                    {step.number}
                                </div>
                                <div className="border-l border-navy-700 pl-8 md:pl-12 py-2 group-hover:border-green/30 transition-colors duration-300">
                                    <h3 className="text-2xl text-slate-100 font-bold mb-4">{step.title}</h3>
                                    <p className="text-slate-400 leading-relaxed max-w-lg">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}
