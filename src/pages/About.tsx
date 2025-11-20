import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { team } from '../data/siteData';
import { Target, Lightbulb, Star, Search, FileText, Link as LinkIcon, BarChart3, Globe, Trophy } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <Section background="primary" className="pt-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                        About SEO Masters
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                        We're a team of passionate SEO experts dedicated to helping businesses achieve sustainable organic growth.
                    </p>
                </div>
            </Section>

            {/* Story Section */}
            <Section background="secondary">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                        Our Story
                    </h2>
                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <p>
                            Founded in 2012, SEO Masters began with a simple mission: to make professional SEO accessible to businesses of all sizes. What started as a small team of three has grown into a full-service SEO agency serving over 500 clients worldwide.
                        </p>
                        <p>
                            Our journey has been driven by one core belief: that every business deserves the opportunity to be found online. We've seen the digital landscape evolve dramatically, and we've evolved with it, always staying ahead of algorithm updates and industry trends.
                        </p>
                        <p>
                            Today, we're proud to be recognized as industry leaders, but we've never lost sight of what matters most—delivering real, measurable results for our clients.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Mission & Values */}
            <Section background="primary">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center animate-slide-up">
                        <div className="text-5xl mb-4"><Target className="w-12 h-12 mx-auto" /></div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Our Mission
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            To empower businesses with data-driven SEO strategies that deliver sustainable, long-term growth and measurable ROI.
                        </p>
                    </Card>
                    <Card className="text-center animate-slide-up">
                        <div className="text-5xl mb-4"><Lightbulb className="w-12 h-12 mx-auto" /></div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Our Vision
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            To be the most trusted SEO partner for businesses worldwide, known for transparency, expertise, and exceptional results.
                        </p>
                    </Card>
                    <Card className="text-center animate-slide-up">
                        <div className="text-5xl mb-4"><Star className="w-12 h-12 mx-auto" /></div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                            Our Values
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Integrity, innovation, transparency, and client success. We believe in ethical SEO practices and building lasting partnerships.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Expertise Section */}
            <Section background="secondary">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        Our Expertise
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: <Search className="w-10 h-10" />, title: 'Technical SEO', desc: '12+ years optimizing site architecture' },
                            { icon: <FileText className="w-10 h-10" />, title: 'Content Strategy', desc: 'Created 10,000+ pieces of SEO-optimized content' },
                            { icon: <LinkIcon className="w-10 h-10" />, title: 'Link Building', desc: 'Built 50,000+ high-quality backlinks' },
                            { icon: <BarChart3 className="w-10 h-10" />, title: 'Analytics', desc: 'Data-driven insights from millions of data points' },
                            { icon: <Globe className="w-10 h-10" />, title: 'International SEO', desc: 'Helped businesses rank in 30+ countries' },
                            { icon: <Trophy className="w-10 h-10" />, title: 'Industry Awards', desc: 'Recognized as top SEO agency for 5 years' },
                        ].map((item, index) => (
                            <div key={index} className="flex items-start space-x-4 animate-slide-up">
                                <div className="text-4xl">{item.icon}</div>
                                <div>
                                    <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Team Section */}
            <Section background="primary">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        Meet Our Team
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        The experts behind your success
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member) => (
                        <Card key={member.id} className="text-center animate-slide-up">
                            <div className="flex justify-center mb-4">{member.image}</div>
                            <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">
                                {member.name}
                            </h3>
                            <p className="text-blue-600 dark:text-blue-400 mb-3">{member.role}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                                {member.bio}
                            </p>
                            <div className="flex justify-center space-x-3">
                                {member.social.map((social) => (
                                    <a
                                        key={social.platform}
                                        href={social.url}
                                        className="text-xl hover:opacity-70 transition-opacity duration-200"
                                        aria-label={social.platform}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Why Choose Us */}
            <Section background="secondary">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
                        Why Choose SEO Masters?
                    </h2>
                    <div className="space-y-6">
                        {[
                            { title: 'Proven Track Record', desc: 'Over 500 successful client campaigns with documented results' },
                            { title: 'Transparent Reporting', desc: 'Detailed monthly reports showing exactly what we do and the results we achieve' },
                            { title: 'White-Hat Practices', desc: 'We only use ethical, sustainable SEO techniques that comply with search engine guidelines' },
                            { title: 'Customized Strategies', desc: 'Every business is unique, and so is our approach to your SEO' },
                            { title: 'Ongoing Support', desc: 'Dedicated account managers and responsive support team' },
                            { title: 'Continuous Learning', desc: 'We stay ahead of algorithm updates and industry changes' },
                        ].map((item, index) => (
                            <Card key={index} className="animate-slide-up">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default About;
