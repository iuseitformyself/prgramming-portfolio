'use client'
import { Section, SectionHeader } from '../ui/Section'
import { Quote, Star } from 'lucide-react'

const testimonials = [
    {
        text: "Taha exceeded all expectations. He transformed our outdated website into a modern, high-converting platform. Our leads increased by 40% in the first month!",
        author: "Sarah Jenkins",
        role: "CEO, TechFlow Solutions",
        rating: 5
    },
    {
        text: "Working with Taha was seamless. He understood our vision immediately and delivered ahead of schedule. The animations he added gave our brand the premium feel we were after.",
        author: "Michael Ross",
        role: "Founder, Ross Creative Agency",
        rating: 5
    },
    {
        text: "I've worked with many developers, but Taha's attention to detail is unmatched. His knowledge of SEO and performance optimization really sets him apart from the rest.",
        author: "David Chen",
        role: "Marketing Director, OmniCorp",
        rating: 5
    },
]

export default function Testimonials() {
    return (
        <Section id="testimonials" accent="purple" dark>
            <SectionHeader
                label="Testimonials"
                title="What Clients Say"
                description="Feedback from people I've had the pleasure of working with."
                center
            />

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((item, i) => (
                    <div
                        key={i}
                        className="glass p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 relative group"
                    >
                        {/* Quote Icon */}
                        <Quote className="absolute top-6 right-6 text-accent-purple/20" size={48} />

                        {/* Stars */}
                        <div className="flex gap-1 mb-6">
                            {[...Array(item.rating)].map((_, j) => (
                                <Star key={j} size={18} className="fill-accent-purple text-accent-purple" />
                            ))}
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed mb-8 italic relative z-10">
                            "{item.text}"
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-pink flex items-center justify-center text-white font-bold">
                                {item.author.charAt(0)}
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{item.author}</h4>
                                <p className="text-gray-400 text-sm">{item.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
