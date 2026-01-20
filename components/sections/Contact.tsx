'use client'
import { Button } from '../ui/Button'
import { Section } from '../ui/Section'

export default function Contact() {
    return (
        <Section id="contact" className="text-center justify-center min-h-[80vh]">
            <div className="max-w-2xl mx-auto">
                <p className="text-green font-mono text-lg mb-6">What&apos;s Next?</p>
                <h2 className="text-4xl md:text-6xl font-bold text-slate-100 mb-8">
                    Get In Touch
                </h2>
                <p className="text-slate-400 text-lg mb-12 leading-relaxed">
                    I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className="flex flex-col items-center gap-6">
                    <Button size="lg" onClick={() => window.location.href = 'mailto:iuseitformyself@gmail.com'}>
                        Say Hello
                    </Button>
                    <a href="mailto:iuseitformyself@gmail.com" className="text-sm font-mono text-green hover:underline underline-offset-4">
                        iuseitformyself@gmail.com
                    </a>
                </div>

                <footer className="mt-32 text-slate-500 font-mono text-sm">
                    <p>Designed & Built by Muhammad Taha</p>
                </footer>
            </div>
        </Section>
    )
}
