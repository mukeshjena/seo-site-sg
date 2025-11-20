import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import AnimatedSection from '../components/ui/AnimatedSection';
import { pricing } from '../data/siteData';

const Pricing: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <Section background="primary" className="pt-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                        Transparent Pricing
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                        Choose the plan that fits your business needs. All plans include our commitment to your success.
                    </p>
                </div>
            </Section>

            {/* Pricing Cards */}
            <Section background="secondary">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricing.map((tier, index) => (
                        <AnimatedSection
                            key={tier.id}
                            animation="fade-up"
                            delay={index * 100}
                            className="h-full"
                        >
                            <Card
                                className={`relative flex flex-col ${tier.highlighted
                                    ? 'border-blue-500 dark:border-blue-400 border-4'
                                    : ''
                                    }`}
                            >
                                {tier.highlighted && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                        {tier.name}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        {tier.description}
                                    </p>
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                                            {tier.price}
                                        </span>
                                        <span className="text-gray-500 dark:text-gray-400 ml-2">
                                            {tier.period}
                                        </span>
                                    </div>
                                </div>

                                <div className="mb-6 flex-grow">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                                        Features:
                                    </h3>
                                    <ul className="space-y-3">
                                        {tier.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                                                <span className="text-green-500 mr-2 mt-1 flex-shrink-0">✓</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to="/contact" className="block mt-auto">
                                    <Button
                                        variant={tier.highlighted ? 'primary' : 'outline'}
                                        className="w-full"
                                    >
                                        {tier.cta}
                                    </Button>
                                </Link>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Comparison Table */}
            <Section background="primary">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        Compare Plans
                    </h2>
                    <div className="overflow-x-auto">
                        <table className="w-full border-2 border-gray-200 dark:border-gray-700">
                            <thead>
                                <tr className="bg-gray-100 dark:bg-gray-800">
                                    <th className="px-6 py-4 text-left text-gray-900 dark:text-white font-semibold border-b-2 border-gray-200 dark:border-gray-700">
                                        Feature
                                    </th>
                                    {pricing.map((tier) => (
                                        <th key={tier.id} className="px-6 py-4 text-center text-gray-900 dark:text-white font-semibold border-b-2 border-gray-200 dark:border-gray-700">
                                            {tier.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    'Keyword research',
                                    'On-page optimization',
                                    'Monthly reports',
                                    'Technical SEO',
                                    'Content creation',
                                    'Link building',
                                    'Competitor analysis',
                                    'Dedicated manager',
                                ].map((feature, idx) => (
                                    <tr key={idx} className="border-b border-gray-200 dark:border-gray-700">
                                        <td className="px-6 py-4 text-gray-700 dark:text-gray-300">
                                            {feature}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {idx < 4 ? '✓' : '—'}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            {idx < 7 ? '✓' : '—'}
                                        </td>
                                        <td className="px-6 py-4 text-center">✓</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Section>

            {/* FAQ Section */}
            <Section background="secondary">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        Pricing FAQs
                    </h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: 'Can I upgrade or downgrade my plan?',
                                a: 'Yes! You can change your plan at any time. Changes take effect at the start of your next billing cycle.',
                            },
                            {
                                q: 'Are there any setup fees?',
                                a: 'No, there are no setup fees. The price you see is the price you pay.',
                            },
                            {
                                q: 'What payment methods do you accept?',
                                a: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.',
                            },
                            {
                                q: 'Do you offer custom enterprise plans?',
                                a: 'Yes! For businesses with unique needs, we can create a custom plan. Contact our sales team to discuss.',
                            },
                        ].map((item, idx) => (
                            <AnimatedSection key={idx} animation="fade-up" delay={idx * 100}>
                                <Card>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                                        {item.q}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                                </Card>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="primary">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Not Sure Which Plan is Right?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Schedule a free consultation and we'll help you choose the best option for your business.
                    </p>
                    <Link to="/contact">
                        <Button variant="primary">Schedule Free Consultation</Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
};

export default Pricing;
