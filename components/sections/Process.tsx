'use client'
import { Section, SectionHeader } from '../ui/Section'
import { MessageSquare, Lightbulb, Code, Rocket } from 'lucide-react'

const steps = [
    {
        number: "01",
        icon: <MessageSquare size={28} />,
        title: "Discovery",
        description: "We start with a conversation. I learn about your business, goals, and vision to understand exactly what you need."
    },
    {
        number: "02",
        icon: <Lightbulb size={28} />,
        title: "Planning",
        description: "I create a detailed roadmap including wireframes, tech stack decisions, and timeline estimates."
    },
    {
        number: "03",
        icon: <Code size={28} />,
        title: "Development",
        description: "The building phase. I write clean, maintainable code with regular updates and feedback loops."
    },
    {
        number: "04",
        icon: <Rocket size={28} />,
        title: "Launch & Support",
        description: "After thorough testing, we launch. I provide ongoing support to ensure everything runs smoothly."
    },
]

export default function Process() {
    return (
        <Section id="process" accent="yellow">
            <SectionHeader
                label="How I Work"
                title="My Process"
                description="A structured approach to deliver quality results on time."
                center
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <div
                        key={i}
                        className="relative glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                    >
                        {/* Number */}
                        <div className="absolute top-6 right-6 text-6xl font-black text-white/5 group-hover:text-accent-yellow/10 transition-colors">
                            {step.number}
                        </div>

                        <div className="relative z-10">
                            <div className="w-14 h-14 rounded-xl bg-accent-yellow/10 flex items-center justify-center text-accent-yellow mb-6 group-hover:bg-accent-yellow group-hover:text-carbon transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{step.description}</p>
                        </div>

                        {/* Connector Arrow (except last) */}
                        {i < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-accent-yellow/50 to-transparent" />
                        )}
                    </div>
                ))}
            </div>
        </Section>
    )
}
