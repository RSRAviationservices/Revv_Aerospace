import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  author?: string;
  keywords?: string[];
  isBlogPost?: boolean;
  publishDate?: string;
  category?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'About Revv Aerospace',
  description = 'Revv Aerospace is a next-generation drone and UAV systems manufacturer and precision aerospace component producer based in Mumbai, India. We deliver advanced unmanned systems and precision components for both commercial and defence applications.',
  type = 'website',
  name = 'Revv Aerospace',
  imageUrl = '/assets/revv-logo.png',
  author = 'Revv Aerospace',
  keywords = [
    'Revv Aerospace',
    'aerospace India',
    'drone manufacturer India',
    'UAV systems',
    'precision aerospace components',
    'defence aerospace',
    'urban air mobility',
    'sustainable aerospace',
    'next-gen drones',
    'aerospace innovation'
  ],
  isBlogPost = false,
  publishDate,
  category
}) => {
  const location = useLocation();
  const currentUrl = `https://revvaerospace.com${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://revvaerospace.com${imageUrl}`;

  // Organization structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Revv Aerospace',
    url: 'https://revvaerospace.com',
    logo: 'https://revvaerospace.com/assets/revv-logo.png',
    description:
      'Revv Aerospace is a next-generation drone and UAV systems manufacturer and precision aerospace component producer based in Mumbai, India. We deliver advanced unmanned systems and precision components for both commercial and defence applications.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@revvaerospace.com'
    },
    sameAs: [
      'https://www.linkedin.com/company/revv-aerospace',
      'https://twitter.com/revvaerospace'
    ]
  };

  // AboutPage structured data
  const aboutPageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: currentUrl,
    name: 'About Revv Aerospace',
    description:
      'Revv Aerospace is a next-generation drone and UAV systems manufacturer and precision aerospace component producer based in Mumbai, India. We design, engineer, and manufacture advanced unmanned aerial systems along with high-precision aluminium and composite parts, providing end-to-end solutions for both commercial & defence applications.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Revv Aerospace',
      foundingDate: '2023',
      headquarters: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Mumbai',
          addressCountry: 'India'
        }
      },
      slogan: 'Redefining the Skies of India',
      missionStatement:
        'To advance India’s self-reliance in aerospace by delivering cutting-edge drones and precision components, engineered with indigenous innovation, global standards, and unwavering commitment to national pride.',
      keywords: keywords.join(', ')
    }
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Revv Aerospace" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta name="twitter:site" content="@revvaerospace" />
      <meta name="twitter:creator" content="@revvaerospace" />
      
      {/* Author */}
      <meta name="author" content={author || name} />
      
      {/* Pinterest */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* Extra SEO */}
      <meta name="theme-color" content="#0a0a23" />
      <meta name="msapplication-TileColor" content="#0a0a23" />
      
      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(aboutPageStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
