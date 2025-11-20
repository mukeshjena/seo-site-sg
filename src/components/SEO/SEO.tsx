import React from 'react';
import { siteConfig } from '../../data/siteData';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  type?: 'website' | 'article' | 'service';
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = siteConfig.name,
  description = siteConfig.description,
  keywords = 'SEO, Search Engine Optimization, Digital Marketing, Organic Growth, SEO Services, SEO Agency, SEO Experts',
  ogImage = '/og-image.jpg',
  canonicalUrl,
  type = 'website',
  noIndex = false,
}) => {
  const fullTitle = title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const currentUrl = canonicalUrl || window.location.href;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={siteConfig.name} />
      <meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@seomasters" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="theme-color" content="#2563eb" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": siteConfig.name,
          "description": siteConfig.description,
          "url": window.location.origin,
          "telephone": siteConfig.phone.replace(/[^\d]/g, ''),
          "email": siteConfig.email,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Digital Avenue, Suite 100",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94102",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": ["SEO", "Search Engine Optimization", "Digital Marketing"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "SEO Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Technical SEO",
                  "description": "Optimize your website's foundation for search engines"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "On-Page SEO",
                  "description": "Enhance your content and HTML source code"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Off-Page SEO",
                  "description": "Build authority through strategic link building"
                }
              }
            ]
          }
        })}
      </script>
    </>
  );
};

export default SEO;