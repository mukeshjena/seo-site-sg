import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import AnimatedSection from '../components/ui/AnimatedSection';
import { siteConfig } from '../data/siteData';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="animate-fade-in">
            <Section background="secondary" className="pt-12 pb-20">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <AnimatedSection animation="fade-up">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Get In Touch
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                            Ready to boost your online presence? Let's start a conversation.
                        </p>
                    </AnimatedSection>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        <AnimatedSection animation="fade-right" delay={100} className="h-full">
                            <Card className="h-full bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 border-blue-200 dark:border-blue-800">
                                <h2 className="text-2xl font-bold mb-8">
                                    Contact Information
                                </h2>
                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg mr-4 shadow-sm border border-blue-100 dark:border-blue-800">
                                            <Mail className="text-2xl text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-600 dark:text-blue-300 mb-1 text-sm uppercase tracking-wider">Email</h3>
                                            <a href={`mailto:${siteConfig.email}`} className="text-blue-700 dark:text-blue-200 hover:text-blue-800 dark:hover:text-blue-100 text-lg font-medium transition-colors">
                                                {siteConfig.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg mr-4 shadow-sm border border-blue-100 dark:border-blue-800">
                                            <Phone className="text-2xl text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-600 dark:text-blue-300 mb-1 text-sm uppercase tracking-wider">Phone</h3>
                                            <a href={`tel:${siteConfig.phone}`} className="text-blue-700 dark:text-blue-200 hover:text-blue-800 dark:hover:text-blue-100 text-lg font-medium transition-colors">
                                                {siteConfig.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg mr-4 shadow-sm border border-blue-100 dark:border-blue-800">
                                            <MapPin className="text-2xl text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-blue-600 dark:text-blue-300 mb-1 text-sm uppercase tracking-wider">Address</h3>
                                            <p className="text-blue-700 dark:text-blue-200 text-lg font-medium">{siteConfig.address}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-12 border-t border-blue-200 dark:border-blue-700">
                                    <h3 className="font-semibold text-blue-600 dark:text-blue-300 mb-4 text-sm uppercase tracking-wider">Follow Us</h3>
                                    <div className="flex space-x-4">
                                        {siteConfig.social.map((social) => (
                                            <a
                                                key={social.platform}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-white dark:bg-gray-800 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-xl text-blue-600 dark:text-blue-400"
                                                aria-label={social.platform}
                                            >
                                                {social.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </AnimatedSection>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <AnimatedSection animation="fade-left" delay={200} className="h-full">
                            <Card className="h-full p-8 md:p-10 border border-gray-200 dark:border-gray-700">
                                <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                                    Send Us a Message
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200"
                                                placeholder="+1 (555) 000-0000"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200"
                                                placeholder="Company Ltd."
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900 outline-none transition-all duration-200 resize-none"
                                            placeholder="How can we help you?"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-bold text-lg transition-all duration-200"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </Card>
                        </AnimatedSection>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
