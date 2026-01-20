'use client'
import { Section, SectionHeader } from '../ui/Section'
import { Code, Rocket, Smartphone, Search, PenTool, Database } from 'lucide-react'

const services = [
    {
        icon: <Code size={32} />,
        title: "Web Development",
        description: "Custom websites and web applications built with modern frameworks like Next.js and React for optimal performance.",
        features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
    },
    {
        icon: <Rocket size={32} />,
        title: "Performance Optimization",
        description: "Speed up your existing website with advanced optimization techniques for better user experience and SEO.",
        features: ["Core Web Vitals", "Image Optimization", "Code Splitting"]
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile-First Design",
        description: "Pixel-perfect responsive designs that work flawlessly across all devices and screen sizes.",
        features: ["Touch Friendly", "Cross-Browser", "Accessible"]
    },
    {
        icon: <Database size={32} />,
        title: "Full Stack Solutions",
        description: "End-to-end development from database design to frontend implementation with scalable architecture.",
        features: ["REST APIs", "Database Design", "Authentication"]
    },
    {
        icon: <Search size={32} />,
        title: "Technical SEO",
        description: "Implement best practices for search engine optimization to improve your site's visibility and ranking.",
        features: ["Schema Markup", "Meta Tags", "Site Speed"]
    },
    {
        icon: <PenTool size={32} />,
        title: "UI/UX Design",
        description: "Beautiful, intuitive interfaces with smooth animations that engage users and enhance conversions.",
        features: ["Animations", "Micro-interactions", "User Flow"]
    },
]

export default function Services() {
    return (
        <Section id="services" accent="blue" dark>
            <SectionHeader
                label="Services"
                title="What I Can Do For You"
                description="Comprehensive web development services tailored to your business needs."
                center
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                    <div
                        key={i}
                        className="glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group hover:-translate-y-2"
                    >
                        <div className="w-14 h-14 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-6 group-hover:bg-accent-blue group-hover:text-carbon transition-colors">
                            {service.icon}
                        </div>

                        <h3 className="text-white text-xl font-bold mb-4 group-hover:text-accent-blue transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, j) => (
                                <span key={j} className="px-3 py-1 text-xs bg-white/5 text-gray-300 rounded-full">
                                    {feature}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
