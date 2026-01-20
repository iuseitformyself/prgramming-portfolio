'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'
import { Zap, Shield, Search, Layout } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const features = [
    {
        icon: <Zap size={40} />,
        title: "Fast Performance",
        desc: "Optimized for speed and efficiency. I build applications that load instantly and run smoothly on any device."
    },
    {
        icon: <Search size={40} />,
        title: "SEO Optimized",
        desc: "Built with search engines in mind. Semantic HTML, proper meta tags, and high Core Web Vitals scores."
    },
    {
        icon: <Shield size={40} />,
        title: "Clean Code",
        desc: "Maintainable, scalable, and robust codebases. I write code that is easy to read, test, and debug."
    },
    {
        icon: <Layout size={40} />,
        title: "Responsive Design",
        desc: "Pixel-perfect layouts for all screen sizes. From mobile phones to large desktop monitors."
    }
]

export default function WhyChooseMe() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-item", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section id="why-choose-me" className="py-20 bg-navy-800/30">
            <div ref={container}>
                <div className="flex items-center gap-4 mb-12 justify-center">
                    <span className="h-[1px] w-12 bg-green"></span>
                    <span className="text-green font-mono text-lg">Why Choose Me?</span>
                    <span className="h-[1px] w-12 bg-green"></span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-16 text-center max-w-3xl mx-auto">
                    Delivering digital products that make a difference.
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="feature-item p-8 bg-navy-700 rounded-xl border border-navy-600 hover:border-green transition-colors duration-300 text-center group bg-navy-700/50 backdrop-blur-sm"
                        >
                            <div className="text-green mb-6 inline-flex p-4 bg-navy-800 rounded-full group-hover:scale-110 transition-transform duration-300 group-hover:bg-green group-hover:text-navy-900 shadow-lg">
                                {item.icon}
                            </div>
                            <h3 className="text-slate-100 font-bold text-xl mb-4">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
