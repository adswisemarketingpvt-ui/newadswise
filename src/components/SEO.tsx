import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const siteName = "AdsWise Marketing";
const defaultUrl = "https://www.adswisemarketing.com/";
const defaultImage = "https://www.adswisemarketing.com/og-image.jpg";

const SEO = ({
  title = "AdsWise Marketing | Creative Advertising & Digital Agency",
  description = "AdsWise Marketing is a full-service advertising and digital marketing agency offering branding, creative ads, social media and performance marketing.",
  url = defaultUrl,
  image = defaultImage,
}: SEOProps) => {
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: siteName,
          url: defaultUrl,
          logo: "https://www.adswisemarketing.com/logo.png",
          description: description,
          sameAs: [
            "https://www.instagram.com/adswisemarketing",
            "https://www.facebook.com/adswisemarketing",
            "https://www.linkedin.com/company/adswisemarketing"
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Pune",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            telephone: "+91-9730266648",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
