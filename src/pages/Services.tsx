import React from 'react';
import { TrendingUp, DollarSign, Target, Trophy, Shield, BarChart3, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { services } from '../data/siteData';

const Services: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <Section background="primary" className="pt-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                        Our SEO Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                        Comprehensive SEO solutions designed to boost your online visibility and drive sustainable growth.
                    </p>
                </div>
            </Section>

            {/* Services Grid */}
            <Section background="secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <AnimatedSection
                            key={service.id}
                            animation="fade-up"
                            delay={index * 100}
                            className="h-full"
                        >
                            <Card>
                                <div className="text-5xl mb-4">{service.icon}</div>
                                <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {service.description}
                                </p>
                                <div className="mb-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                        What's Included:
                                    </h3>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                                <Check className="text-green-500 mr-2 mt-1 w-4 h-4" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Process Section */}
            <Section background="primary">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
                        Our SEO Process
                    </h2>
                    <div className="space-y-8">
                        {[
                            {
                                step: '01',
                                title: 'Discovery & Audit',
                                desc: 'We start by understanding your business goals and conducting a comprehensive SEO audit to identify opportunities and challenges.',
                            },
                            {
                                step: '02',
                                title: 'Strategy Development',
                                desc: 'Based on our findings, we create a customized SEO strategy tailored to your specific needs and objectives.',
                            },
                            {
                                step: '03',
                                title: 'Implementation',
                                desc: 'Our team executes the strategy, implementing technical optimizations, creating content, and building quality backlinks.',
                            },
                            {
                                step: '04',
                                title: 'Monitoring & Optimization',
                                desc: 'We continuously monitor performance, analyze data, and refine our approach to maximize results.',
                            },
                            {
                                step: '05',
                                title: 'Reporting & Communication',
                                desc: 'Regular reports keep you informed of progress, and we maintain open communication throughout the partnership.',
                            },
                        ].map((item, index) => (
                            <AnimatedSection key={index} animation="fade-left" delay={index * 100}>
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-xl font-bold border-2 border-blue-700 dark:border-blue-600">
                                        {item.step}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Benefits Section */}
            <Section background="secondary">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        Why Invest in SEO?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: <TrendingUp className="w-10 h-10" />, title: 'Increased Organic Traffic', desc: 'Attract more qualified visitors to your website' },
                            { icon: <DollarSign className="w-10 h-10" />, title: 'Better ROI', desc: 'SEO delivers long-term value compared to paid advertising' },
                            { icon: <Target className="w-10 h-10" />, title: 'Targeted Visibility', desc: 'Reach customers actively searching for your products or services' },
                            { icon: <Trophy className="w-10 h-10" />, title: 'Competitive Advantage', desc: 'Outrank competitors and capture more market share' },
                            { icon: <Shield className="w-10 h-10" />, title: 'Brand Credibility', desc: 'Higher rankings build trust and authority in your industry' },
                            { icon: <BarChart3 className="w-10 h-10" />, title: 'Measurable Results', desc: 'Track and measure the impact of every optimization' },
                        ].map((benefit, index) => (
                            <AnimatedSection key={index} animation="fade-up" delay={index * 50} className="h-full">
                                <div className="flex items-start space-x-4 h-full p-4 rounded-lg border-2 border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-colors">
                                    <div className="text-4xl">{benefit.icon}</div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">{benefit.desc}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="primary">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Let's discuss which services are right for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button variant="primary" className="w-full sm:w-auto">
                                Schedule Consultation
                            </Button>
                        </Link>
                        <Link to="/pricing">
                            <Button variant="outline" className="w-full sm:w-auto">
                                View Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Services;
