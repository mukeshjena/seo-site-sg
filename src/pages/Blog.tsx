import React from 'react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { blogPosts } from '../data/siteData';

const Blog: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <Section background="primary" className="pt-8">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-slide-up">
                        SEO Insights & Tips
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 animate-slide-up">
                        Stay updated with the latest SEO trends, strategies, and best practices.
                    </p>
                </div>
            </Section>

            <Section background="secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Card key={post.id} className="animate-slide-up flex flex-col">
                            <div className="text-5xl mb-4">{post.image}</div>
                            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-semibold mb-3 self-start">
                                {post.category}
                            </div>
                            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                {post.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 pt-4 border-t-2 border-gray-200 dark:border-gray-700">
                                <span>{post.author}</span>
                                <span>{post.readTime}</span>
                            </div>
                            <div className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                                {new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Blog;
