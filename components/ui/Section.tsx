import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
}

export const Section = ({ children, id, className = '' }: SectionProps) => {
    return (
        <section
            id={id}
            className={`w-full py-12 md:py-20 px-6 md:px-12 max-w-[1200px] mx-auto ${className}`}
        >
            {children}
        </section>
    )
};
