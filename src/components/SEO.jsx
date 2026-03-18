import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  canonicalUrl, 
  ogImage, 
  type = 'website',
  structuredData = null 
}) => {
  const defaultTitle = "ASP Global Marine Trading LLC - Marine Equipment & Spare Parts Supplier Dubai UAE";
  const defaultDescription = "Leading marine equipment supplier in Dubai UAE. Specializing in marine engine spares, safety equipment, pumps, turbochargers, and offshore equipment. Genuine OEM parts with global delivery.";
  const defaultKeywords = "marine equipment supplier UAE, marine spare parts Dubai, ship engine components, marine safety equipment SOLAS, marine pump supplier Middle East, offshore equipment UAE, turbocharger marine parts, marine purifier spare parts, OEM marine parts Dubai, marine engine spares, ship spare parts supplier, marine equipment Dubai, marine accessories UAE, ship chandler Dubai, marine engine parts, marine navigation equipment, marine deck equipment, marine engine room supplies";
  const defaultImage = "https://aspglobalmarine.com/og-image.jpg";

  useEffect(() => {
    // Update page title if provided
    if (title) {
      document.title = `${title} | ASP Global Marine Trading LLC`;
    }
  }, [title]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl || 'https://aspglobalmarine.com'} />
      <meta property="og:site_name" content="ASP Global Marine Trading LLC" />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title || 'ASP Global Marine Trading LLC'} - Marine Equipment Supplier`} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ASPGlobalMarine" />
      <meta name="twitter:creator" content="@ASPGlobalMarine" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta name="twitter:image:alt" content={`${title || 'ASP Global Marine Trading LLC'} - Marine Equipment Supplier`} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Regional Tags */}
      <meta name="content-language" content="en" />
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="Dubai" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
