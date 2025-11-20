import React from 'react';
import { Star } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { testimonials } from '../data/siteData';

const Testimonials: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <Section background="secondary" className="pt-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                        Client Testimonials
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                        Hear what our clients have to say about working with us.
                    </p>
                </div>
            </Section>

            <Section background="secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <AnimatedSection
                            key={testimonial.id}
                            animation="fade-up"
                            delay={index * 100}
                            className="h-full"
                        >
                            <Card className="flex flex-col min-h-[300px]">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="text-yellow-500 text-xl fill-current" />
                                    ))}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300 mb-6 italic flex-grow min-h-[120px]">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex items-center pt-4 border-t-2 border-gray-200 dark:border-gray-700 min-h-[80px]">
                                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                                    <div>
                                        <div className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">
                                            {testimonial.role}
                                        </div>
                                        <div className="text-sm text-blue-600 dark:text-blue-400">
                                            {testimonial.company}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            <Section background="secondary">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Join Our Happy Clients
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Experience the same level of service and results that our clients rave about.
                    </p>
                    <a href="/contact">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 font-semibold transition-all duration-200">
                            Start Your Success Story
                        </button>
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default Testimonials;
