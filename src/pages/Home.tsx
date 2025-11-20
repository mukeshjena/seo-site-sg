import React from 'react';
import SEO from '../components/SEO/SEO';
import { Link } from 'react-router-dom';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import TestimonialMarquee from '../components/ui/TestimonialMarquee';
import BlogSection from '../components/ui/BlogSection';
import FAQSection from '../components/ui/FAQSection';
import { hero, services, portfolio, stats } from '../data/siteData';

const Home: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <SEO 
                title="Professional SEO Services That Drive 300% Traffic Growth"
                description="Transform your online presence with expert SEO services. We help businesses achieve sustainable organic growth through data-driven strategies. Join 500+ successful clients."
                keywords="SEO services, search engine optimization, organic traffic growth, SEO agency, professional SEO, digital marketing, SEO experts"
            />
            {/* Hero Section */}
            <Section background="primary" className="pt-20 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <AnimatedSection animation="fade-up" delay={0}>
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                                {hero.headline}
                            </h1>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-up" delay={100}>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                {hero.subheadline}
                            </p>
                        </AnimatedSection>
                        <AnimatedSection animation="fade-up" delay={200}>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact">
                                    <Button variant="primary" size="lg">
                                        {hero.primaryCTA}
                                    </Button>
                                </Link>
                                <Link to="/portfolio">
                                    <Button variant="outline" size="lg">
                                        {hero.secondaryCTA}
                                    </Button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                    <AnimatedSection animation="fade-left" delay={300}>
                        <div className="relative flex justify-center">
                            <div className="animate-float">
                                {hero.image}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </Section>

            {/* Stats Section */}
            <Section background="secondary" className="-mt-20 pt-0 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                            <Card className="text-center py-8 h-full flex flex-col justify-center">
                                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                    {stat.value}{stat.suffix}
                                </div>
                                <div className="text-gray-600 dark:text-gray-300 font-medium">
                                    {stat.label}
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
            </Section>

            {/* Services Overview */}
            <Section background="primary">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection animation="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Our Services
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Comprehensive SEO solutions tailored to grow your business
                        </p>
                    </AnimatedSection>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((service, index) => (
                        <AnimatedSection key={service.id} animation="fade-up" delay={index * 100} className="h-full">
                            <Card className="h-full flex flex-col hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer group">
                                <div className="mb-4 text-blue-600 dark:text-blue-400">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                    {service.description}
                                </p>
                                <Link to="/services" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline mt-auto inline-block">
                                    Learn More →
                                </Link>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/services">
                        <Button variant="outline">View All Services</Button>
                    </Link>
                </div>
            </Section>

            {/* Featured Work */}
            <Section background="secondary">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <AnimatedSection animation="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Featured Success Stories
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Real results we've achieved for our clients
                        </p>
                    </AnimatedSection>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolio.slice(0, 2).map((project, index) => (
                        <AnimatedSection key={project.id} animation={index % 2 === 0 ? 'fade-right' : 'fade-left'} className="h-full">
                            <Card className="h-full flex flex-col overflow-hidden">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-blue-600 dark:text-blue-400">{project.image}</div>
                                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6">
                                    {project.description}
                                </p>
                                <div className="grid grid-cols-3 gap-4 mt-auto bg-gray-50 dark:bg-gray-800 -mx-6 -mb-6 p-6 border-t border-gray-100 dark:border-gray-700">
                                    {project.metrics.map((metric, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="font-bold text-blue-600 dark:text-blue-400 text-lg">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </AnimatedSection>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <Link to="/portfolio">
                        <Button variant="primary">View Case Studies</Button>
                    </Link>
                </div>
            </Section>

            {/* Testimonials Marquee */}
            <Section background="primary" className="overflow-hidden">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <AnimatedSection animation="fade-up">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            What Our Clients Say
                        </h2>
                    </AnimatedSection>
                </div>
                <TestimonialMarquee />
            </Section>

            {/* Blog Section */}
            <BlogSection />

            {/* FAQ Section */}
            <FAQSection />

            {/* CTA Section */}
            <Section background="primary">
                <AnimatedSection animation="fade-up">
                    <div className="bg-gray-900 dark:bg-gray-800 rounded-2xl p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Dominate Search Results?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Join hundreds of successful businesses that trust us with their SEO strategy.
                        </p>
                        <Link to="/contact">
                            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                                Get Your Free Audit
                            </button>
                        </Link>
                    </div>
                </AnimatedSection>
            </Section>
        </div>
    );
};

export default Home;
