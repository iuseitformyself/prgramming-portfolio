import React, { forwardRef } from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    accent?: 'purple' | 'cyan' | 'pink' | 'blue' | 'orange' | 'green' | 'yellow';
    dark?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
    ({ children, id, className = '', accent, dark }, ref) => {
        const bgClass = dark ? 'bg-carbon-light' : 'bg-carbon';
        const accentClass = accent ? `accent-${accent}` : '';

        return (
            <section
                ref={ref}
                id={id}
                className={`relative w-full py-24 md:py-32 px-6 md:px-12 lg:px-20 ${bgClass} ${accentClass} ${className}`}
            >
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </section>
        )
    }
);

Section.displayName = 'Section';

// Section Header Component
export const SectionHeader = ({
    label,
    title,
    description,
    center = false
}: {
    label?: string;
    title: string;
    description?: string;
    center?: boolean;
}) => (
    <div className={`mb-16 md:mb-20 ${center ? 'text-center' : ''}`}>
        {label && (
            <span className="inline-block text-[var(--accent,#a855f7)] font-mono text-sm tracking-widest uppercase mb-4">
                {label}
            </span>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
        </h2>
        {description && (
            <p className={`text-gray-400 text-lg md:text-xl leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-3xl'}`}>
                {description}
            </p>
        )}
    </div>
);
