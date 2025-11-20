import React, { useState } from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { portfolio } from '../data/siteData';

const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(portfolio.map(p => p.category)))];

    const filteredProjects = selectedCategory === 'All'
        ? portfolio
        : portfolio.filter(p => p.category === selectedCategory);

    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <Section background="primary" className="pt-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                        Our Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                        Real results from real clients. See how we've helped businesses achieve their SEO goals.
                    </p>
                </div>
            </Section>

            {/* Filter Section */}
            <Section background="secondary">
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-lg border-2 font-semibold transition-all duration-200 ${selectedCategory === category
                                ? 'bg-blue-600 text-white border-blue-600 dark:bg-blue-500 dark:border-blue-500'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <AnimatedSection
                            key={project.id}
                            animation="fade-up"
                            delay={index * 100}
                            className="h-full"
                        >
                            <Card>
                                <div className="text-6xl mb-4">{project.image}</div>
                                <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-3">
                                    {project.category}
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {project.title}
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    Client: {project.client}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {project.description}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b-2 border-gray-200 dark:border-gray-700">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Results */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                        Key Results:
                                    </h3>
                                    <ul className="space-y-2">
                                        {project.results.map((result, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                                <span>{result}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="primary">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Want Results Like These?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let's discuss how we can help your business achieve similar success.
                    </p>
                    <a href="/contact">
                        <button className="px-8 py-3 bg-blue-600 text-white rounded-lg border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 font-semibold transition-all duration-200">
                            Get Your Free Consultation
                        </button>
                    </a>
                </div>
            </Section>
        </div>
    );
};

export default Portfolio;
