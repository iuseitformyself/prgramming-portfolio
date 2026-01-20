'use client'
import { Section, SectionHeader } from '../ui/Section'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const contactInfo = [
    { icon: <Mail size={28} />, label: "Email", value: "iuseitformyself@gmail.com", href: "mailto:iuseitformyself@gmail.com" },
    { icon: <Phone size={28} />, label: "Phone", value: "03414993824", href: "tel:03414993824" },
    { icon: <MapPin size={28} />, label: "Location", value: "Available Worldwide (Remote)", href: null },
]

const socials = [
    { icon: <Github size={24} />, label: "GitHub", href: "https://github.com" },
    { icon: <Linkedin size={24} />, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: <Twitter size={24} />, label: "Twitter", href: "https://twitter.com" },
]

export default function Contact() {
    return (
        <Section id="contact" accent="cyan" dark>
            <div className="max-w-3xl mx-auto text-center">
                <SectionHeader
                    label="Contact"
                    title="Let's Work Together"
                    description="Have a project in mind? I'd love to hear about it. Reach out and let's create something amazing."
                    center
                />

                {/* Contact Info Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {contactInfo.map((item, i) => (
                        <div key={i} className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors group">
                            <div className="w-14 h-14 mx-auto rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mb-4 group-hover:bg-accent-cyan group-hover:text-carbon transition-colors">
                                {item.icon}
                            </div>
                            <p className="text-gray-400 text-sm mb-1">{item.label}</p>
                            {item.href ? (
                                <a href={item.href} className="text-white font-semibold text-lg hover:text-accent-cyan transition-colors">
                                    {item.value}
                                </a>
                            ) : (
                                <p className="text-white font-semibold">{item.value}</p>
                            )}
                        </div>
                    ))}
                </div>

                {/* Socials */}
                <div className="flex justify-center gap-4">
                    {socials.map((social, i) => (
                        <a
                            key={i}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-14 h-14 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-accent-cyan hover:bg-accent-cyan/10 transition-colors"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </Section>
    )
}
