import React from 'react';
import { Link } from 'react-router-dom';
import { footer, siteConfig } from '../../data/siteData';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 dark:bg-black text-gray-300 border-t-2 border-gray-800">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl py-12 md:py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">{siteConfig.name}</h3>
                        <p className="text-gray-400 mb-4">{siteConfig.tagline}</p>
                        <div className="flex space-x-3">
                            {siteConfig.social.map((social) => (
                                <a
                                    key={social.platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl hover:opacity-80 transition-opacity duration-200"
                                    aria-label={social.platform}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footer.sections.map((section) => (
                        <div key={section.title}>
                            <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div className="border-t-2 border-gray-800 pt-8 mb-8">
                    <div className="max-w-md">
                        <h4 className="text-lg font-semibold text-white mb-2">Subscribe to Our Newsletter</h4>
                        <p className="text-gray-400 mb-4">Get SEO tips and insights delivered to your inbox.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border-2 border-gray-700 text-white placeholder-gray-500 focus:border-blue-500 outline-none transition-colors duration-200"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition-colors duration-200 font-semibold"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t-2 border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">{footer.copyright}</p>
                    <p className="text-gray-500 text-xs">{footer.disclaimer}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
