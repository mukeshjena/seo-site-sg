import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    const baseStyles = 'rounded-lg p-6 border-2 transition-all duration-300 h-full';
    const bgStyles = 'bg-white dark:bg-gray-800';
    const borderStyles = 'border-gray-200 dark:border-gray-700';
    const hoverStyles = hover ? 'hover:border-gray-300 dark:hover:border-gray-600' : '';

    return (
        <div className={`${baseStyles} ${bgStyles} ${borderStyles} ${hoverStyles} ${className}`}>
            {children}
        </div>
    );
};

export default Card;
