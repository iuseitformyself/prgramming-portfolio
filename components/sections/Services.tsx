'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'
import { Code, Rocket, Layout, Smartphone, Search, PenTool } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
    {
        icon: <Layout size={32} />,
        title: "Custom Website Development",
        desc: "I build bespoke websites tailored to your brand. No cookie-cutter templates—just unique, high-performing designs."
    },
    {
        icon: <Rocket size={32} />,
        title: "Web Performance Optimization",
        desc: "Slow sites lose customers. I optimize your existing site to load instantly, improving SEO and user retention."
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile-First Design",
        desc: "Over 60% of traffic is mobile. I ensure your site looks and works perfectly on every screen size."
    },
    {
        icon: <Code size={32} />,
        title: "SaaS Application Development",
        desc: "Need a complex web app? I architect scalable SaaS solutions with secure authentication and robust databases."
    },
    {
        icon: <Search size={32} />,
        title: "Technical SEO integration",
        desc: "Get found on Google. I implement Technical SEO best practices to help you rank higher than your competitors."
    },
    {
        icon: <PenTool size={32} />,
        title: "UI/UX Interaction Design",
        desc: "I create engaging animations and micro-interactions that delight users and keep them on your site longer."
    }
]

export default function Services() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out"
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section id="services" className="py-24">
            <div ref={container}>
                <div className="flex items-center gap-4 mb-16 justify-center">
                    <span className="h-[1px] w-12 bg-green"></span>
                    <span className="text-green font-mono text-lg">My Services</span>
                    <span className="h-[1px] w-12 bg-green"></span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-slate-100 mb-6 text-center">
                    Everything you need to grow online.
                </h2>
                <p className="text-slate-400 text-center max-w-2xl mx-auto mb-20 text-lg">
                    I don't just write code; I build digital assets that drive business results.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className="service-card p-8 bg-navy-800 rounded-lg border border-navy-700 hover:border-green hover:-translate-y-2 transition-all duration-300 group hover:shadow-xl hover:shadow-green/10"
                        >
                            <div className="w-14 h-14 bg-navy-700 rounded-lg flex items-center justify-center text-green mb-6 group-hover:bg-green group-hover:text-navy-900 transition-colors duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-slate-100 font-bold text-xl mb-4 group-hover:text-green transition-colors">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
