import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SEO({
  title,
  description,
  name,
  type,
  keywords,
  image,
}) {
  const location = useLocation();
  const siteTitle = "Özpen PVC | Ankara Winsa Bayi";
  const defaultDescription =
    "Ankara'nın en büyük Winsa bayisi Özpen PVC. Pencere, kapı ve cam balkon sistemlerinde uzman çözümler. İnşaat sektörünün güvenilir adresi.";
  const defaultKeywords =
    "özpen, özpen pvc, winsa, winsa ankara, pvc pencere, pvc kapı, cam balkon, ankara pvc, pvc sistemleri, ankara pimapen, ankara cam balkon, ankara pencere";
  const defaultImage = "https://ozpenpvc.com.tr/ozpen-logo.png";
  const canonicalUrl = `https://ozpenpvc.com.tr${location.pathname}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Özpen PVC",
    image: "https://ozpenpvc.com.tr/ozpen-logo.png",
    "@id": "https://ozpenpvc.com.tr",
    url: "https://ozpenpvc.com.tr",
    telephone: "+905439035617",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "İvedik Organize Sanayi Bölgesi 1332.Sokak No:84/86 Ostim",
      addressLocality: "Ankara",
      addressRegion: "Ankara",
      postalCode: "06370",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.977539853831935,
      longitude: 32.74253822149987,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: ["https://www.instagram.com/baskentozpen_winsa/"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
    description:
      "Ankara'nın en büyük Winsa bayisi. Türkiye'nin en kaliteli PVC markası Winsa ile üstün yalıtım çözümleri.",
  };

  return (
    <Helmet>
      {/* Standart Meta Etiketleri */}
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Facebook / Open Graph */}
      <meta property="og:type" content={type || "website"} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Özpen PVC" />
      <meta property="og:locale" content="tr_TR" />
      <meta
        property="og:title"
        content={title ? `${title} | ${siteTitle}` : siteTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Özpen PVC - Ankara Winsa Bayi" />

      {/* Twitter */}
      <meta name="twitter:creator" content={name || "@ozpenpvc"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ozpenpvc" />
      <meta
        name="twitter:title"
        content={title ? `${title} | ${siteTitle}` : siteTitle}
      />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Yapısal Veri (Structured Data) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
