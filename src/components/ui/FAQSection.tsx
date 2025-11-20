import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Section from './Section';
import AnimatedSection from './AnimatedSection';
import { faq } from '../../data/siteData';

const FAQSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section background="secondary">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Common questions about our SEO services and process.
                </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
                {faq.slice(0, 5).map((item, index) => (
                    <AnimatedSection key={item.id} animation="fade-up" delay={index * 50}>
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-gray-900 dark:text-white">
                                    {item.question}
                                </span>
                                <ChevronDown className={`transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 py-4 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
        </Section>
    );
};

export default FAQSection;
