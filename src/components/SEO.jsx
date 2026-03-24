import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  type = "website",
  structuredData = null,
}) => {
  const defaultTitle =
    "Knot & Sail - Marine Services UAE | Ship Maintenance & Technical Solutions";
  const defaultDescription =
    "Knot & Sail is a premier marine service provider in UAE offering hydro blasting, tank cleaning, painting works, steel fabrication, and technical manpower supply across all UAE ports.";
  const defaultKeywords =
    "Knot & Sail, marine services UAE, ship maintenance Dubai, hydro blasting UAE, tank cleaning services, marine painting UAE, steel fabrication ships, pipe welding marine, technical manpower supply, riding squad services, antifouling coating UAE, marine maintenance Dubai, ship repair UAE, vessel maintenance, marine services Dubai port";
  const defaultImage = "https://knotandsail.com/og-image.jpg";

  useEffect(() => {
    // Update page title if provided
    if (title) {
      document.title = `${title} | Knot & Sail`;
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
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:type" content={type} />
      <meta
        property="og:url"
        content={canonicalUrl || "https://knotandsail.com"}
      />
      <meta property="og:site_name" content="Knot & Sail" />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${title || "Knot & Sail"} - Marine Services UAE`}
      />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@KnotSail" />
      <meta name="twitter:creator" content="@KnotSail" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={ogImage || defaultImage} />
      <meta
        name="twitter:image:alt"
        content={`${title || "Knot & Sail"} - Marine Services UAE`}
      />

      {/* Additional SEO Meta Tags */}
      <meta
        name="robots"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
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
