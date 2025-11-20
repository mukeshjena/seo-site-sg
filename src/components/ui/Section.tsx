import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'primary' | 'secondary' | 'tertiary';
}

const Section: React.FC<SectionProps> = ({
    children,
    className = '',
    background = 'primary'
}) => {
    const bgStyles = {
        primary: 'bg-white dark:bg-gray-900',
        secondary: 'bg-gray-50 dark:bg-gray-800',
        tertiary: 'bg-gray-100 dark:bg-gray-700',
    };

    return (
        <section className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {children}
            </div>
        </section>
    );
};

export default Section;
