import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in';
    delay?: number;
    className?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    className = ''
}) => {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    // Determine initial transform based on animation type
    const getInitialTransform = () => {
        switch (animation) {
            case 'fade-up': return 'translate-y-8';
            case 'fade-down': return '-translate-y-8';
            case 'fade-left': return 'translate-x-8';
            case 'fade-right': return '-translate-x-8';
            default: return '';
        }
    };

    const initialTransform = getInitialTransform();

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${className} ${isVisible
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : `opacity-0 ${initialTransform}`
                }`}
            style={{
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
