import React from 'react';
import {
    Twitter,
    Linkedin,
    Facebook,
    Instagram,
    Rocket,
    Settings,
    FileText,
    Link as LinkIcon,
    MapPin,
    PenTool,
    BarChart,
    ShoppingBag,
    Cloud,
    Utensils,
    Activity,
    Home,
    Laptop,
    User,
    TrendingUp,
    Target} from 'lucide-react';

// Type definitions
export interface NavItem {
    label: string;
    path: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: React.ReactNode;
}

export interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
}

export interface PortfolioProject {
    id: string;
    title: string;
    client: string;
    description: string;
    image: React.ReactNode;
    category: string;
    metrics: {
        label: string;
        value: string;
    }[];
    results: string[];
}

export interface PricingTier {
    id: string;
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    highlighted: boolean;
    cta: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    author: string;
    company: string;
    role: string;
    rating: number;
    avatar: React.ReactNode;
}

export interface TeamMember {
    id: string;
    name: string;
    role: string;
    bio: string;
    image: React.ReactNode;
    social: SocialLink[];
}

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
    category: string;
}

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    image: React.ReactNode;
    category: string;
    readTime: string;
}

export interface Stat {
    label: string;
    value: string;
    suffix?: string;
}

// Site Configuration
export const siteConfig = {
    name: "SEO Masters",
    tagline: "Elevate Your Digital Presence",
    description: "Professional SEO services that drive real results. We help businesses grow their online visibility and achieve sustainable organic growth.",
    email: "hello@seomasters.com",
    phone: "+1 (555) 123-4567",
    address: "123 Digital Avenue, Suite 100, San Francisco, CA 94102",
    social: [
        { platform: "Twitter", url: "https://twitter.com/seomasters", icon: <Twitter size={20} /> },
        { platform: "LinkedIn", url: "https://linkedin.com/company/seomasters", icon: <Linkedin size={20} /> },
        { platform: "Facebook", url: "https://facebook.com/seomasters", icon: <Facebook size={20} /> },
        { platform: "Instagram", url: "https://instagram.com/seomasters", icon: <Instagram size={20} /> },
    ] as SocialLink[],
};

// Navigation
export const navigation: NavItem[] = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Pricing", path: "/pricing" },
    { label: "Contact", path: "/contact" },
];

// Hero Section
export const hero = {
    headline: "Transform Your Business with Expert SEO",
    subheadline: "Data-driven strategies that boost rankings, increase traffic, and maximize ROI. Join 500+ businesses that trust us with their digital growth.",
    primaryCTA: "Get Started",
    secondaryCTA: "View Our Work",
    image: <Rocket size={120} className="text-blue-600 dark:text-blue-400" />,
};

// Services
export const services: Service[] = [
    {
        id: "technical-seo",
        title: "Technical SEO",
        description: "Optimize your website's foundation for search engines with comprehensive technical audits and implementations.",
        features: [
            "Site speed optimization",
            "Mobile responsiveness",
            "Schema markup implementation",
            "XML sitemap creation",
            "Robots.txt optimization",
        ],
        icon: <Settings size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
        id: "on-page-seo",
        title: "On-Page SEO",
        description: "Enhance your content and HTML source code to improve rankings and user experience.",
        features: [
            "Keyword research & optimization",
            "Meta tags optimization",
            "Content structure improvement",
            "Internal linking strategy",
            "Image optimization",
        ],
        icon: <FileText size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
        id: "off-page-seo",
        title: "Off-Page SEO",
        description: "Build authority and trust through strategic link building and brand mentions.",
        features: [
            "Quality backlink acquisition",
            "Guest posting campaigns",
            "Brand mention monitoring",
            "Social signals optimization",
            "Influencer outreach",
        ],
        icon: <LinkIcon size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
        id: "local-seo",
        title: "Local SEO",
        description: "Dominate local search results and attract nearby customers to your business.",
        features: [
            "Google Business Profile optimization",
            "Local citations building",
            "Review management",
            "Local keyword targeting",
            "NAP consistency",
        ],
        icon: <MapPin size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
        id: "content-strategy",
        title: "Content Strategy",
        description: "Create compelling, SEO-optimized content that engages your audience and drives conversions.",
        features: [
            "Content gap analysis",
            "Editorial calendar planning",
            "SEO copywriting",
            "Content optimization",
            "Performance tracking",
        ],
        icon: <PenTool size={40} className="text-blue-600 dark:text-blue-400" />,
    },
    {
        id: "analytics-reporting",
        title: "Analytics & Reporting",
        description: "Track, measure, and optimize your SEO performance with detailed insights and reports.",
        features: [
            "Google Analytics setup",
            "Custom dashboard creation",
            "Monthly performance reports",
            "Competitor analysis",
            "ROI tracking",
        ],
        icon: <BarChart size={40} className="text-blue-600 dark:text-blue-400" />,
    },
];

// Portfolio Projects
export const portfolio: PortfolioProject[] = [
    {
        id: "ecommerce-fashion",
        title: "Fashion E-commerce Growth",
        client: "StyleHub",
        description: "Transformed an online fashion retailer's organic presence, achieving 300% traffic growth in 6 months.",
        image: <ShoppingBag size={64} className="text-purple-600 dark:text-purple-400" />,
        category: "E-commerce",
        metrics: [
            { label: "Traffic Increase", value: "300%" },
            { label: "Keyword Rankings", value: "450+" },
            { label: "Conversion Rate", value: "+85%" },
        ],
        results: [
            "Ranked #1 for 50+ competitive keywords",
            "Increased organic revenue by 250%",
            "Reduced bounce rate by 40%",
        ],
    },
    {
        id: "saas-platform",
        title: "SaaS Platform Visibility",
        client: "CloudSync",
        description: "Helped a B2B SaaS company dominate their niche with strategic content and technical SEO.",
        image: <Cloud size={64} className="text-blue-500 dark:text-blue-300" />,
        category: "SaaS",
        metrics: [
            { label: "Organic Leads", value: "+420%" },
            { label: "Domain Authority", value: "72" },
            { label: "Backlinks", value: "2,500+" },
        ],
        results: [
            "Achieved featured snippets for 30+ queries",
            "Generated 500+ qualified leads monthly",
            "Reduced customer acquisition cost by 60%",
        ],
    },
    {
        id: "local-restaurant",
        title: "Local Restaurant Chain",
        client: "Tasty Bites",
        description: "Boosted local visibility for a restaurant chain across 15 locations with targeted local SEO.",
        image: <Utensils size={64} className="text-orange-500 dark:text-orange-400" />,
        category: "Local Business",
        metrics: [
            { label: "Local Pack Rankings", value: "15/15" },
            { label: "Google Reviews", value: "1,200+" },
            { label: "Foot Traffic", value: "+65%" },
        ],
        results: [
            "All locations ranking in top 3 local pack",
            "Increased reservations by 80%",
            "Improved online reputation score to 4.8/5",
        ],
    },
    {
        id: "healthcare-provider",
        title: "Healthcare Provider Network",
        client: "HealthFirst",
        description: "Enhanced online presence for a healthcare network, focusing on patient acquisition and trust.",
        image: <Activity size={64} className="text-red-500 dark:text-red-400" />,
        category: "Healthcare",
        metrics: [
            { label: "Patient Inquiries", value: "+200%" },
            { label: "Organic Sessions", value: "50K/mo" },
            { label: "Page Speed", value: "95/100" },
        ],
        results: [
            "Ranked for 300+ medical condition keywords",
            "Improved mobile user experience significantly",
            "Achieved HIPAA-compliant SEO implementation",
        ],
    },
    {
        id: "real-estate",
        title: "Real Estate Agency",
        client: "Prime Properties",
        description: "Drove massive organic growth for a luxury real estate agency in competitive markets.",
        image: <Home size={64} className="text-green-600 dark:text-green-400" />,
        category: "Real Estate",
        metrics: [
            { label: "Property Inquiries", value: "+350%" },
            { label: "Virtual Tours", value: "10K/mo" },
            { label: "Market Coverage", value: "5 Cities" },
        ],
        results: [
            "Dominated local real estate searches",
            "Generated $50M+ in property leads",
            "Built authority through content marketing",
        ],
    },
    {
        id: "tech-startup",
        title: "Tech Startup Launch",
        client: "InnovateTech",
        description: "Launched a tech startup's SEO from scratch, achieving rapid visibility and market penetration.",
        image: <Laptop size={64} className="text-indigo-500 dark:text-indigo-400" />,
        category: "Technology",
        metrics: [
            { label: "Time to Rank", value: "3 months" },
            { label: "Organic Traffic", value: "25K/mo" },
            { label: "Demo Requests", value: "+500%" },
        ],
        results: [
            "Ranked in top 5 for primary keywords",
            "Built strong backlink profile (DA 45)",
            "Established thought leadership in niche",
        ],
    },
];

// Pricing Tiers
export const pricing: PricingTier[] = [
    {
        id: "starter",
        name: "Starter",
        price: "$999",
        period: "/month",
        description: "Perfect for small businesses starting their SEO journey",
        features: [
            "Keyword research (up to 20 keywords)",
            "On-page optimization (5 pages)",
            "Monthly performance report",
            "Basic technical SEO audit",
            "Email support",
        ],
        highlighted: false,
        cta: "Get Started",
    },
    {
        id: "professional",
        name: "Professional",
        price: "$2,499",
        period: "/month",
        description: "Ideal for growing businesses seeking comprehensive SEO",
        features: [
            "Keyword research (up to 50 keywords)",
            "On-page optimization (15 pages)",
            "Content creation (4 articles/month)",
            "Link building (10 quality backlinks)",
            "Advanced technical SEO",
            "Bi-weekly performance reports",
            "Priority email & phone support",
            "Competitor analysis",
        ],
        highlighted: true,
        cta: "Most Popular",
    },
    {
        id: "enterprise",
        name: "Enterprise",
        price: "$5,999",
        period: "/month",
        description: "Comprehensive solution for large businesses and agencies",
        features: [
            "Unlimited keyword research",
            "On-page optimization (unlimited pages)",
            "Content creation (12 articles/month)",
            "Link building (30+ quality backlinks)",
            "Complete technical SEO management",
            "Weekly performance reports",
            "Dedicated account manager",
            "24/7 priority support",
            "Custom strategy & consulting",
            "Multi-location SEO (if applicable)",
        ],
        highlighted: false,
        cta: "Contact Sales",
    },
];

// Testimonials
export const testimonials: Testimonial[] = [
    {
        id: "test-1",
        quote: "SEO Masters transformed our online presence completely. We've seen a 300% increase in organic traffic and our sales have doubled. Their team is professional, responsive, and truly understands SEO.",
        author: "Sarah Johnson",
        company: "StyleHub",
        role: "CEO",
        rating: 5,
        avatar: <User size={48} className="text-gray-400 bg-gray-100 rounded-full p-1" />,
    },
    {
        id: "test-2",
        quote: "Working with SEO Masters was a game-changer for our SaaS business. They helped us rank for competitive keywords we never thought possible. The ROI has been incredible.",
        author: "Michael Chen",
        company: "CloudSync",
        role: "Marketing Director",
        rating: 5,
        avatar: <User size={48} className="text-gray-400 bg-gray-100 rounded-full p-1" />,
    },
    {
        id: "test-3",
        quote: "The local SEO work they did for our restaurant chain exceeded all expectations. Every single location now ranks in the top 3, and we've seen a massive increase in reservations.",
        author: "David Martinez",
        company: "Tasty Bites",
        role: "Owner",
        rating: 5,
        avatar: <User size={48} className="text-gray-400 bg-gray-100 rounded-full p-1" />,
    },
    {
        id: "test-4",
        quote: "Their technical SEO expertise is unmatched. They identified and fixed issues we didn't even know existed. Our site speed improved dramatically, and so did our rankings.",
        author: "Emily Watson",
        company: "HealthFirst",
        role: "Digital Marketing Manager",
        rating: 5,
        avatar: <User size={48} className="text-gray-400 bg-gray-100 rounded-full p-1" />,
    },
    {
        id: "test-5",
        quote: "SEO Masters helped us dominate the luxury real estate market online. The quality of leads we get now is exceptional, and our brand visibility has skyrocketed.",
        author: "Robert Thompson",
        company: "Prime Properties",
        role: "Founder",
        rating: 5,
        avatar: <User size={48} className="text-gray-400 bg-gray-100 rounded-full p-1" />,
    },
    {
        id: "test-6",
        quote: "As a startup, we needed to establish our presence quickly. SEO Masters delivered results faster than we imagined. We're now competing with companies 10x our size.",
        author: "Lisa Park",
        company: "InnovateTech",
        role: "Co-founder",
        rating: 5,
        avatar: <User size={48} className="text-gray-400 bg-gray-100 rounded-full p-1" />,
    },
];

// Team Members
export const team: TeamMember[] = [
    {
        id: "team-1",
        name: "Alex Rivera",
        role: "Founder & SEO Strategist",
        bio: "With 12+ years in SEO, Alex has helped hundreds of businesses achieve top rankings. Former Google Search Quality team member.",
        image: <User size={120} className="text-gray-400 bg-gray-100 rounded-lg p-4" />,
        social: [
            { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
            { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        ],
    },
    {
        id: "team-2",
        name: "Jessica Lee",
        role: "Technical SEO Lead",
        bio: "Jessica specializes in complex technical SEO challenges. She's a certified Google Analytics expert and loves solving crawl budget mysteries.",
        image: <User size={120} className="text-gray-400 bg-gray-100 rounded-lg p-4" />,
        social: [
            { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
            { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        ],
    },
    {
        id: "team-3",
        name: "Marcus Johnson",
        role: "Content Strategy Director",
        bio: "Marcus combines SEO expertise with compelling storytelling. He's created content strategies that have generated millions in organic revenue.",
        image: <User size={120} className="text-gray-400 bg-gray-100 rounded-lg p-4" />,
        social: [
            { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
            { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        ],
    },
    {
        id: "team-4",
        name: "Priya Patel",
        role: "Link Building Specialist",
        bio: "Priya has built relationships with thousands of high-authority websites. Her ethical link building strategies deliver sustainable results.",
        image: <User size={120} className="text-gray-400 bg-gray-100 rounded-lg p-4" />,
        social: [
            { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} /> },
            { platform: "Twitter", url: "#", icon: <Twitter size={18} /> },
        ],
    },
];

// FAQ
export const faq: FAQItem[] = [
    {
        id: "faq-1",
        question: "How long does it take to see SEO results?",
        answer: "SEO is a long-term strategy. Typically, you'll start seeing initial improvements within 3-4 months, with significant results appearing around the 6-month mark. However, this varies based on competition, current site status, and industry.",
        category: "General",
    },
    {
        id: "faq-2",
        question: "What's the difference between on-page and off-page SEO?",
        answer: "On-page SEO involves optimizing elements on your website (content, HTML, structure), while off-page SEO focuses on external factors like backlinks, social signals, and brand mentions that influence your site's authority.",
        category: "General",
    },
    {
        id: "faq-3",
        question: "Do you guarantee #1 rankings?",
        answer: "No reputable SEO agency can guarantee #1 rankings, as search algorithms are constantly evolving and controlled by search engines. We focus on sustainable, white-hat strategies that improve your overall visibility and drive qualified traffic.",
        category: "General",
    },
    {
        id: "faq-4",
        question: "What's included in your monthly reports?",
        answer: "Our reports include keyword ranking changes, organic traffic metrics, backlink growth, technical issues identified and resolved, content performance, competitor analysis, and actionable recommendations for the next month.",
        category: "Services",
    },
    {
        id: "faq-5",
        question: "Can I cancel my SEO service anytime?",
        answer: "Yes, our services are month-to-month with no long-term contracts. However, we recommend committing to at least 6 months to see meaningful results, as SEO requires consistent effort over time.",
        category: "Pricing",
    },
    {
        id: "faq-6",
        question: "Do you work with businesses in my industry?",
        answer: "We have experience across virtually all industries including e-commerce, SaaS, healthcare, real estate, local businesses, and more. Our strategies are customized to your specific industry and target audience.",
        category: "Services",
    },
    {
        id: "faq-7",
        question: "What makes your SEO approach different?",
        answer: "We focus on data-driven strategies, transparent reporting, and sustainable white-hat techniques. Our team stays updated with the latest algorithm changes and we prioritize long-term results over quick fixes.",
        category: "General",
    },
    {
        id: "faq-8",
        question: "Will I need to make changes to my website?",
        answer: "Yes, SEO often requires website modifications for optimization. We'll provide detailed recommendations and can either guide your team through implementation or handle it ourselves, depending on your preference and package.",
        category: "Services",
    },
    {
        id: "faq-9",
        question: "How do you measure SEO success?",
        answer: "We track multiple KPIs including organic traffic growth, keyword rankings, conversion rates, backlink quality and quantity, domain authority, and ultimately, ROI. Success is measured by meaningful business outcomes, not just rankings.",
        category: "Services",
    },
    {
        id: "faq-10",
        question: "What if I already have an in-house marketing team?",
        answer: "We work seamlessly with in-house teams, providing specialized SEO expertise that complements your existing marketing efforts. We can train your team, collaborate on strategies, or handle SEO entirely while you focus on other channels.",
        category: "General",
    },
];

// Blog Posts
export const blogPosts: BlogPost[] = [
    {
        id: "blog-1",
        title: "10 SEO Trends to Watch in 2024",
        excerpt: "Stay ahead of the curve with these emerging SEO trends that will shape search engine optimization in the coming year.",
        content: "Full article content here...",
        author: "Alex Rivera",
        date: "2024-01-15",
        image: <TrendingUp size={64} className="text-blue-600 dark:text-blue-400" />,
        category: "Trends",
        readTime: "8 min read",
    },
    {
        id: "blog-2",
        title: "The Complete Guide to Technical SEO",
        excerpt: "Master the technical aspects of SEO with this comprehensive guide covering everything from site speed to structured data.",
        content: "Full article content here...",
        author: "Jessica Lee",
        date: "2024-01-10",
        image: <Settings size={64} className="text-gray-600 dark:text-gray-400" />,
        category: "Technical",
        readTime: "12 min read",
    },
    {
        id: "blog-3",
        title: "How to Create SEO-Friendly Content",
        excerpt: "Learn the art of creating content that ranks well in search engines while providing value to your readers.",
        content: "Full article content here...",
        author: "Marcus Johnson",
        date: "2024-01-05",
        image: <PenTool size={64} className="text-green-600 dark:text-green-400" />,
        category: "Content",
        readTime: "10 min read",
    },
    {
        id: "blog-4",
        title: "Link Building Strategies That Actually Work",
        excerpt: "Discover ethical and effective link building techniques that will boost your domain authority and rankings.",
        content: "Full article content here...",
        author: "Priya Patel",
        date: "2023-12-28",
        image: <LinkIcon size={64} className="text-purple-600 dark:text-purple-400" />,
        category: "Link Building",
        readTime: "9 min read",
    },
    {
        id: "blog-5",
        title: "Local SEO: Dominate Your Geographic Market",
        excerpt: "A step-by-step guide to optimizing your business for local search and attracting nearby customers.",
        content: "Full article content here...",
        author: "Alex Rivera",
        date: "2023-12-20",
        image: <MapPin size={64} className="text-red-600 dark:text-red-400" />,
        category: "Local SEO",
        readTime: "11 min read",
    },
    {
        id: "blog-6",
        title: "Understanding Google's Core Web Vitals",
        excerpt: "Everything you need to know about Core Web Vitals and how they impact your search rankings.",
        content: "Full article content here...",
        author: "Jessica Lee",
        date: "2023-12-15",
        image: <Target size={64} className="text-indigo-600 dark:text-indigo-400" />,
        category: "Technical",
        readTime: "7 min read",
    },
];

// Stats
export const stats: Stat[] = [
    { label: "Clients Served", value: "500", suffix: "+" },
    { label: "Avg. Traffic Increase", value: "250", suffix: "%" },
    { label: "Keywords Ranked", value: "10K", suffix: "+" },
    { label: "Years of Experience", value: "12", suffix: "+" },
];

// Footer
export const footer = {
    sections: [
        {
            title: "Company",
            links: [
                { label: "About Us", path: "/about" },
                { label: "Our Team", path: "/about#team" },
                { label: "Careers", path: "#" },
                { label: "Contact", path: "/contact" },
            ],
        },
        {
            title: "Services",
            links: [
                { label: "Technical SEO", path: "/services#technical" },
                { label: "Content Strategy", path: "/services#content" },
                { label: "Link Building", path: "/services#links" },
                { label: "Local SEO", path: "/services#local" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Blog", path: "/blog" },
                { label: "Case Studies", path: "/portfolio" },
                { label: "FAQ", path: "/faq" },
                { label: "Pricing", path: "/pricing" },
            ],
        },
    ],
    copyright: `© ${new Date().getFullYear()} SEO Masters. All rights reserved.`,
    disclaimer: "Results may vary based on industry, competition, and implementation.",
};
