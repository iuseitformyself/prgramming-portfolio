'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const testimonials = [
    {
        text: "Taha is an exceptional developer. He took our outdated website and transformed it into a modern, high-converting masterpiece. Our leads increased by 40% in the first month!",
        author: "Sarah Jenkins",
        role: "CEO, TechFlow Solutions"
    },
    {
        text: "Working with Taha was seamless. He understood our vision immediately and delivered ahead of schedule. The animations he added gave our brand the premium feel we were looking for.",
        author: "Michael Ross",
        role: "Founder, Ross Creative Agency"
    },
    {
        text: "I've worked with many developers, but Taha's attention to detail is unmatched. His knowledge of SEO and performance optimization really sets him apart.",
        author: "David Chen",
        role: "Marketing Director, OmniCorp"
    }
]

export default function Testimonials() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section id="testimonials" className="py-24 bg-navy-800/20">
            <div ref={container} className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <span className="h-[1px] w-12 bg-green"></span>
                    <span className="text-green font-mono text-lg">Testimonials</span>
                    <span className="h-[1px] w-12 bg-green"></span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-20 text-center">
                    Don&apos;t just take my word for it.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="testimonial-card p-8 bg-navy-700/50 backdrop-blur-sm rounded-xl border border-navy-600 relative"
                        >
                            <Quote className="absolute top-6 right-6 text-green/20" size={48} />
                            <p className="text-slate-300 text-lg leading-relaxed mb-8 italic relative z-10">
                                &quot;{item.text}&quot;
                            </p>
                            <div>
                                <h4 className="text-slate-100 font-bold text-lg">{item.author}</h4>
                                <p className="text-green text-sm font-mono mt-1">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
