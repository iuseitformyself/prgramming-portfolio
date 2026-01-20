'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section } from '../ui/Section'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        title: "Chat App Template",
        desc: "A powerful Nuxt.js chat application template inspired by modern messaging platforms.",
        tech: ["Nuxt.js", "Vue", "Tailwind CSS"],
        link: "https://chat-template.nuxt.dev/",
        image: "/project-chat.png"
    },
    {
        title: "Modernize Admin",
        desc: "A comprehensive Next.js admin dashboard template with data visualization.",
        tech: ["Next.js", "MUI", "React"],
        link: "https://modernize-nextjs-free.vercel.app/",
        image: "/project-dashboard.png"
    },
    {
        title: "E-Commerce Store",
        desc: "A fully functional e-commerce storefront built with modern web technologies.",
        tech: ["Next.js", "Vercel", "Tailwind"],
        link: "https://ecommerce-store-eight-blush.vercel.app/",
        image: "/project-ecommerce.png"
    },
    {
        title: "Crypto Tracker",
        desc: "Real-time cryptocurrency tracking dashboard for monitoring market trends.",
        tech: ["Next.js", "API", "Chart.js"],
        link: "https://crypto-currency-tracker-zeta.vercel.app/",
        image: "/project-crypto.png"
    },
    {
        title: "PNG Demo Tool",
        desc: "Optimized utility application for image processing and demonstration.",
        tech: ["React", "Image Handling"],
        link: "https://png-demo.vercel.app/",
        image: "/project-generic.png"
    },
    {
        title: "E-Commerce Admin",
        desc: "Robust backend administration panel for e-commerce businesses.",
        tech: ["Next.js", "TypeScript", "Dashboard"],
        link: "https://ecommerce-admin-one-drab.vercel.app/",
        image: "/project-dashboard.png" // Reusing dashboard image for consistency
    },
    {
        title: "Haram Homes",
        desc: "Real estate platform specializing in property listings and agent contacts.",
        tech: ["Web Tech", "UI/UX"],
        link: "https://haram.homes/",
        image: "/project-real-estate.png"
    },
    {
        title: "Rediscover Network",
        desc: "Social networking platform focused on connecting people via profiles and feeds.",
        tech: ["Network Architecture", "Web"],
        link: "https://rediscover.network/",
        image: "/project-social.png"
    },
    {
        title: "CCH Assistant",
        desc: "Intelligent assistant application designed to help users with specific tasks.",
        tech: ["AI", "Vercel", "Bot"],
        link: "https://cchassistant.vercel.app/",
        image: "/project-ai.png"
    },
    {
        title: "NoFPG",
        desc: "Engaging web application demonstrating interactive capabilities.",
        tech: ["Netlify", "Interactive"],
        link: "https://nofpg.netlify.app/",
        image: "/project-generic.png"
    }
]

export default function Projects() {
    const container = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.project-card')

            cards.forEach((card: any) => {
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=50",
                        toggleActions: "play none none reverse",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out"
                })
            })
        }, container)

        return () => ctx.revert()
    }, [])

    return (
        <Section id="projects" className="py-12">
            <div ref={container} className="relative">
                <div className="flex items-center gap-4 mb-10">
                    <span className="h-[1px] w-12 bg-green"></span>
                    <span className="text-green font-mono text-lg">Featured Projects</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 group/grid">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="project-card relative group rounded-xl overflow-hidden bg-navy-800 border border-white/10 hover:border-green/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 shadow-lg"
                        >
                            {/* Image Section */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-navy-900/60 group-hover:bg-navy-900/20 transition-colors duration-300" />
                            </div>

                            {/* Content Section */}
                            <div className="p-6 flex flex-col flex-grow relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-slate-100 font-bold text-xl group-hover:text-green transition-colors">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a>
                                    </h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>

                                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                                    {project.desc}
                                </p>

                                <ul className="flex flex-wrap gap-2 text-xs font-mono text-green/80 mt-auto pt-4 border-t border-white/5">
                                    {project.tech.map((t, idx) => (
                                        <li key={idx} className="bg-navy-900/50 px-2 py-1 rounded border border-white/5">{t}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <a href="https://v4.brittanychiang.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-mono text-xs hover:text-green transition-colors opacity-70">
                        Design Inspiration: Brittany Chiang
                    </a>
                </div>
            </div>
        </Section>
    )
}
