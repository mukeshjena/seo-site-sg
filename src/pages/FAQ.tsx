import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { faq } from '../data/siteData';

const FAQ: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleFAQ = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    const categories = Array.from(new Set(faq.map(item => item.category)));

    return (
        <div className="animate-fade-in">
            <Section background="primary" className="pt-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                        Find answers to common questions about our SEO services.
                    </p>
                </div>
            </Section>

            <Section background="secondary">
                <div className="max-w-4xl mx-auto">
                    {categories.map((category) => (
                        <div key={category} className="mb-12">
                            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                                {category}
                            </h2>
                            <div className="space-y-4">
                                {faq
                                    .filter(item => item.category === category)
                                    .map((item) => (
                                        <Card key={item.id} className="animate-slide-up">
                                            <button
                                                onClick={() => toggleFAQ(item.id)}
                                                className="w-full text-left flex items-center justify-between"
                                            >
                                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                                                    {item.question}
                                                </h3>
                                                <span className="text-2xl text-blue-600 dark:text-blue-400 flex-shrink-0">
                                                    {openId === item.id ? '−' : '+'}
                                                </span>
                                            </button>
                                            {openId === item.id && (
                                                <div className="mt-4 pt-4 border-t-2 border-gray-200 dark:border-gray-700 animate-fade-in">
                                                    <p className="text-gray-600 dark:text-gray-300">
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </Card>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section background="primary">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Still Have Questions?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        We're here to help! Contact us and we'll get back to you as soon as possible.
                    </p>
                    <a href="/contact">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 font-semibold transition-all duration-200">
                            Contact Us
                        </button>
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default FAQ;
