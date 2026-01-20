'use client'
import { Section, SectionHeader } from '../ui/Section'

const tools = [
    { name: "VS Code", category: "Editor" },
    { name: "Figma", category: "Design" },
    { name: "GitHub", category: "Version Control" },
    { name: "Vercel", category: "Deployment" },
    { name: "Notion", category: "Planning" },
    { name: "Postman", category: "API Testing" },
    { name: "Docker", category: "Containers" },
    { name: "Linear", category: "Project Management" },
    { name: "Slack", category: "Communication" },
    { name: "Chrome DevTools", category: "Debugging" },
]

export default function Tools() {
    return (
        <Section id="tools" accent="blue">
            <SectionHeader
                label="Tools & Workflow"
                title="My Daily Toolkit"
                description="The tools and software I use to bring ideas to life."
                center
            />

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {tools.map((tool, i) => (
                    <div
                        key={i}
                        className="glass px-6 py-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                    >
                        <p className="text-white font-medium group-hover:text-accent-blue transition-colors">{tool.name}</p>
                        <p className="text-gray-500 text-sm">{tool.category}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
