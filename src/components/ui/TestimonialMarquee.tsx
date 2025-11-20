import React from 'react';
import { Star, User } from 'lucide-react';
import { testimonials } from '../../data/siteData';
import Card from './Card';

const TestimonialMarquee: React.FC = () => {
    // Duplicate testimonials to create seamless loop
    const marqueeItems = [...testimonials, ...testimonials];

    return (
        <div className="relative w-full overflow-hidden py-10">
            <div className="flex animate-marquee pause-on-hover w-max">
                {marqueeItems.map((testimonial, index) => (
                    <div key={`${testimonial.id}-${index}`} className="w-[350px] mx-4 flex-shrink-0 h-full">
                        <Card className="h-full flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 min-h-[320px]">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-lg">
                                        <Star className="fill-current" />
                                    </span>
                                ))}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 italic flex-grow text-sm leading-relaxed min-h-[120px]">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto min-h-[60px]">
                                <div className="mr-3"><User size={40} className="text-gray-400 bg-gray-100 rounded-full p-2" /></div>
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white text-sm">
                                        {testimonial.author}
                                    </div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">
                                        {testimonial.role}, {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialMarquee;
