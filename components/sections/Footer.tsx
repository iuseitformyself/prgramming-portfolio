'use client'
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react'

const socials = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:hello@taha.dev", label: "Email" },
]

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-carbon border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-bold mb-2">Muhammad Taha</h3>
                        <p className="text-gray-400 text-sm">Full Stack Developer</p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        {socials.map((social, i) => (
                            <a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>

                    {/* Back to Top */}
                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <span className="text-sm font-medium">Back to Top</span>
                        <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Muhammad Taha. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
