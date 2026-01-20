'use client'
import { Section, SectionHeader } from '../ui/Section'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const projects = [
    {
        title: "Chat Application",
        description: "A real-time messaging platform with instant delivery, read receipts, typing indicators, and a modern responsive UI.",
        image: "/project-chat.png",
        tech: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
        link: "https://chat-template.nuxt.dev/",
        color: "from-purple-500/30 to-pink-500/30"
    },
    {
        title: "Modernize Dashboard",
        description: "Comprehensive admin dashboard template featuring data visualization, dark mode, responsive tables, and analytics charts.",
        image: "/project-dashboard.png",
        tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "REST API"],
        link: "https://modernize-nextjs-free.vercel.app/",
        color: "from-cyan-500/30 to-blue-500/30"
    },
    {
        title: "E-Commerce Store",
        description: "Full-featured online store with cart functionality, product listings, checkout flow, and optimized for SEO and performance.",
        image: "/project-ecommerce.png",
        tech: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
        link: "https://ecommerce-store-eight-blush.vercel.app/",
        color: "from-orange-500/30 to-red-500/30"
    },
    {
        title: "Crypto Tracker",
        description: "Live cryptocurrency market tracker with real-time price updates, historical charting, and portfolio management features.",
        image: "/project-crypto.png",
        tech: ["React", "Node.js", "Express", "REST API", "Chart.js"],
        link: "https://crypto-currency-tracker-zeta.vercel.app/",
        color: "from-green-500/30 to-teal-500/30"
    },
    {
        title: "PNG Demo Tool",
        description: "Optimized utility application for image processing, compression, and format conversion with drag-and-drop interface.",
        image: "/project-generic.png",
        tech: ["React", "Python", "FastAPI", "Node.js"],
        link: "https://png-demo.vercel.app/",
        color: "from-indigo-500/30 to-purple-500/30"
    },
    {
        title: "E-Commerce Admin",
        description: "Robust backend administration panel for e-commerce businesses with inventory management, order tracking, and analytics.",
        image: "/project-dashboard.png",
        tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
        link: "https://ecommerce-admin-one-drab.vercel.app/",
        color: "from-blue-500/30 to-cyan-500/30"
    },
    {
        title: "Haram Homes",
        description: "Real estate platform specializing in property listings, agent contacts, and property search with SEO optimization.",
        image: "/project-real-estate.png",
        tech: ["React", "Next.js", "Node.js", "MySQL", "SEO"],
        link: "https://haram.homes/",
        color: "from-amber-500/30 to-orange-500/30"
    },
    {
        title: "Rediscover Network",
        description: "Social networking platform focused on connecting people via profiles, feeds, and real-time messaging features.",
        image: "/project-social.png",
        tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        link: "https://rediscover.network/",
        color: "from-pink-500/30 to-rose-500/30"
    },
    {
        title: "CCH Assistant",
        description: "Intelligent AI-powered assistant application designed to help users with queries, tasks, and workflow automation.",
        image: "/project-ai.png",
        tech: ["React", "Python", "Django", "OpenAI API", "PostgreSQL"],
        link: "https://cchassistant.vercel.app/",
        color: "from-violet-500/30 to-purple-500/30"
    },
    {
        title: "NoFPG",
        description: "Engaging interactive web application with modern design patterns and smooth user experience.",
        image: "/project-generic.png",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        link: "https://nofpg.netlify.app/",
        color: "from-teal-500/30 to-green-500/30"
    },
    {
        title: "Portfolio Inspiration",
        description: "Design reference - A beautifully crafted developer portfolio showcasing smooth animations and modern aesthetics.",
        image: "/project-portfolio.png",
        tech: ["React", "Gatsby", "Styled Components", "GraphQL"],
        link: "https://v4.brittanychiang.com/",
        color: "from-emerald-500/30 to-cyan-500/30"
    },
]

export default function Projects() {
    return (
        <Section id="projects" accent="orange">
            <SectionHeader
                label="Featured Projects"
                title="Selected Works"
                description="A showcase of my recent projects built with MERN, MEAN stack and modern technologies."
            />

            <div className="space-y-24">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
                    >
                        {/* Image */}
                        <div className="w-full lg:w-3/5 relative group">
                            <div className={`absolute -inset-4 bg-gradient-to-br ${project.color} rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`} />
                            <div className="relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full lg:w-2/5">
                            <span className="text-accent-orange font-mono text-sm mb-4 block">
                                {String(i + 1).padStart(2, '0')}.
                            </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {project.tech.map((t, j) => (
                                    <span key={j} className="px-4 py-2 glass text-sm text-gray-300 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-white hover:text-accent-orange transition-colors font-medium group/link"
                            >
                                View Project
                                <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
