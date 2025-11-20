import React from 'react';
import Section from './Section';
import Card from './Card';
import AnimatedSection from './AnimatedSection';
import { blogPosts } from '../../data/siteData';

const BlogSection: React.FC = () => {
    return (
        <Section background="secondary">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Latest Insights
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Stay updated with the latest trends and strategies in SEO.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.slice(0, 3).map((post, index) => (
                    <AnimatedSection key={post.id} animation="fade-up" delay={index * 100} className="h-full">
                        <Card className="h-full flex flex-col hover:border-blue-500 dark:hover:border-blue-400 transition-colors cursor-pointer group">
                            <div className="mb-4 text-blue-600 dark:text-blue-400">
                                {post.image}
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-xs font-semibold mr-3">
                                    {post.category}
                                </span>
                                <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                                <span className="text-sm font-medium text-gray-900 dark:text-white">
                                    {post.author}
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    {post.date}
                                </span>
                            </div>
                        </Card>
                    </AnimatedSection>
                ))}
            </div>
        </Section>
    );
};

export default BlogSection;
