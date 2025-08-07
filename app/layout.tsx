import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Clínica Purity - Mapeamento Biológico por Biorressonância | Teste de Parasitas, Toxinas e Deficiências Nutricionais",
  description: "Descubra a causa real dos seus sintomas com o teste de biorressonância da Clínica Purity. Identifique parasitas ocultos, toxinas ambientais, alimentos incompatíveis e deficiências nutricionais. Mais de 5.000 casos de sucesso em Curitiba.",
  keywords: [
    "clínica purity",
    "biorressonância",
    "mapeamento biológico",
    "teste parasitas",
    "toxinas ambientais",
    "deficiências nutricionais",
    "medicina integrativa",
    "terreno biológico",
    "sintomas inexplicáveis",
    "curitiba",
    "hulda clark",
    "medicina preventiva",
    "detoxificação",
    "parasitas intestinais",
    "metais pesados",
    "alimentos incompatíveis",
    "medicina funcional"
  ],
  authors: [{ name: "Clínica Purity" }],
  creator: "Clínica Purity",
  publisher: "Clínica Purity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://clinicapurity.com.br",
    siteName: "Clínica Purity",
    title: "Clínica Purity - Mapeamento Biológico por Biorressonância",
    description: "Descubra a causa real dos seus sintomas com o teste de biorressonância. Identifique parasitas, toxinas e deficiências nutricionais. Mais de 5.000 casos de sucesso.",
    images: [
      {
        url: "/images/clinica-purity-og.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Purity - Medicina Integrativa e Biorressonância",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@clinicapurity",
    creator: "@clinicapurity",
    title: "Clínica Purity - Mapeamento Biológico por Biorressonância",
    description: "Descubra a causa real dos seus sintomas com teste de biorressonância. Mais de 5.000 casos de sucesso em Curitiba.",
    images: ["/images/clinica-purity-twitter.jpg"],
  },
  verification: {
    google: "your-google-site-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  category: "healthcare",
  alternates: {
    canonical: "https://clinicapurity.com.br",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://clinicapurity.com.br/#clinic",
        "name": "Clínica Purity",
        "alternateName": "Clínica Purity de Nutrição Integrada",
        "description": "Clínica especializada em medicina integrativa, biorressonância e mapeamento biológico para identificação de parasitas, toxinas e deficiências nutricionais.",
        "url": "https://clinicapurity.com.br",
        "telephone": "+55-41-99999-9999",
        "email": "contato@clinicapurity.com.br",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua das Flores, 123",
          "addressLocality": "Curitiba",
          "addressRegion": "PR",
          "postalCode": "80000-000",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -25.4284,
          "longitude": -49.2733
        },
        "openingHours": "Mo-Fr 08:00-18:00",
        "priceRange": "$$",
        "medicalSpecialty": [
          "Medicina Integrativa",
          "Nutrição Funcional",
          "Medicina Preventiva"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços da Clínica Purity",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "MedicalTest",
                "name": "Mapeamento Biológico por Biorressonância",
                "description": "Teste para identificação de parasitas, toxinas ambientais, alimentos incompatíveis e deficiências nutricionais através de amostra de urina"
              },
              "price": "997.00",
              "priceCurrency": "BRL"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://clinicapurity.com.br/#website",
        "url": "https://clinicapurity.com.br",
        "name": "Clínica Purity",
        "description": "Clínica especializada em medicina integrativa e biorressonância",
        "inLanguage": "pt-BR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://clinicapurity.com.br/busca?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://clinicapurity.com.br/#organization",
        "name": "Clínica Purity",
        "url": "https://clinicapurity.com.br",
        "logo": {
          "@type": "ImageObject",
          "url": "https://clinicapurity.com.br/images/logo-clinica-purity.png"
        },
        "sameAs": [
          "https://www.facebook.com/clinicapurity",
          "https://www.instagram.com/clinicapurity",
          "https://www.linkedin.com/company/clinicapurity"
        ]
      }
    ]
  }

  return (
    <html lang="pt-BR" className="font-sans">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZD95P3');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZD95P3"
            height="0" 
            width="0" 
            style={{display:'none',visibility:'hidden'}}
          />
        </noscript>
        {children}</body>
    </html>
  )
}
