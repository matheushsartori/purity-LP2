import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Clínica Purity - Teste de Biorressonância em Curitiba | Mapeamento Biológico Completo",
    template: "%s | Clínica Purity"
  },
  description: "🔬 Teste de Biorressonância em Curitiba ✅ Identifique parasitas ocultos, toxinas, alimentos incompatíveis e deficiências nutricionais ⭐ +5.000 casos de sucesso 📍 Resultado em 7 dias 💯 Garantia",
  keywords: [
    "teste biorressonância curitiba",
    "clínica purity curitiba", 
    "mapeamento biológico curitiba",
    "exame parasitas curitiba",
    "medicina integrativa curitiba",
    "teste toxinas metais pesados",
    "terreno biológico",
    "sintomas sem explicação",
    "medicina funcional curitiba",
    "detoxificação curitiba",
    "hulda clark brasil",
    "parasitas intestinais teste",
    "alimentos incompatíveis teste",
    "deficiências nutricionais curitiba",
    "medicina preventiva curitiba",
    "biorressonância brasil",
    "consultório medicina integrativa",
    "exames alternativos curitiba"
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
    title: "🔬 Teste de Biorressonância em Curitiba | +5.000 Casos de Sucesso",
    description: "✅ Identifique a CAUSA REAL dos seus sintomas! Parasitas ocultos, toxinas, alimentos incompatíveis. 📍 Curitiba ⭐ Resultado em 7 dias 💯 Garantia",
    images: [
      {
        url: "/images/clinica-purity-og.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Purity - Teste de Biorressonância em Curitiba - Medicina Integrativa",
        type: "image/jpeg",
      },
      {
        url: "/images/clinica-purity-logo.png", 
        width: 400,
        height: 400,
        alt: "Logo Clínica Purity",
        type: "image/png",
      }
    ],
    countryName: "Brasil",
    region: "PR",
    placeName: "Curitiba",
  },
  twitter: {
    card: "summary_large_image",
    site: "@clinicapurity", 
    creator: "@clinicapurity",
    title: "🔬 Teste de Biorressonância Curitiba | Clínica Purity",
    description: "✅ Descubra a CAUSA dos seus sintomas! Parasitas, toxinas, deficiências. ⭐ +5.000 casos de sucesso 📍 Curitiba",
    images: {
      url: "/images/clinica-purity-twitter.jpg",
      alt: "Clínica Purity - Teste de Biorressonância em Curitiba"
    },
  },
  verification: {
    google: "your-google-site-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code",
    },
  },
  category: "healthcare",
  classification: "Medical Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://clinicapurity.com.br"),
  alternates: {
    canonical: "https://clinicapurity.com.br",
    languages: {
      'pt-BR': 'https://clinicapurity.com.br',
    },
  },
  applicationName: "Clínica Purity",
  appleWebApp: {
    capable: true,
    title: "Clínica Purity",
    statusBarStyle: "default",
  },
  archives: ["https://clinicapurity.com.br/blog"],
  bookmarks: ["https://clinicapurity.com.br/servicos"],
  manifest: "/manifest.json",
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
        "@type": ["MedicalClinic", "MedicalBusiness", "HealthAndBeautyBusiness"],
        "@id": "https://clinicapurity.com.br/#clinic",
        "name": "Clínica Purity",
        "alternateName": ["Clínica Purity de Nutrição Integrada", "Purity Clinic"],
        "description": "Clínica especializada em medicina integrativa, biorressonância e mapeamento biológico para identificação de parasitas, toxinas e deficiências nutricionais em Curitiba.",
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
        "openingHours": [
          "Mo 08:00-18:00",
          "Tu 08:00-18:00", 
          "We 08:00-18:00",
          "Th 08:00-18:00",
          "Fr 08:00-18:00"
        ],
        "priceRange": "$$",
        "paymentAccepted": ["Credit Card", "Debit Card", "PIX", "Bank Transfer"],
        "currenciesAccepted": "BRL",
        "medicalSpecialty": [
          "Medicina Integrativa",
          "Nutrição Funcional", 
          "Medicina Preventiva",
          "Medicina Orthomolecular",
          "Biorressonância"
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": -25.4284,
            "longitude": -49.2733
          },
          "geoRadius": "50000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Serviços da Clínica Purity",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Mapeamento Biológico Completo",
              "itemOffered": {
                "@type": "MedicalTest",
                "name": "Mapeamento Biológico por Biorressonância",
                "description": "Teste completo para identificação de parasitas ocultos, toxinas ambientais, metais pesados, alimentos incompatíveis e deficiências nutricionais através de análise por biorressonância",
                "procedure": "Coleta de 10ml de urina em casa",
                "result": "Relatório detalhado em 7 dias úteis"
              },
              "price": "997.00",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "validFrom": "2024-01-01",
              "priceValidUntil": "2024-12-31",
              "warranty": "7 dias de garantia",
              "seller": {
                "@id": "https://clinicapurity.com.br/#clinic"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "156",
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "André Silva"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "15 anos de sofrimento resolvidos em 3 meses. Descobri parasitas e intolerâncias que nenhum médico havia identificado.",
            "datePublished": "2024-01-15"
          }
        ],
        "knowsAbout": [
          "Biorressonância",
          "Parasitas intestinais",
          "Toxinas ambientais",
          "Metais pesados",
          "Deficiências nutricionais",
          "Terreno biológico",
          "Medicina integrativa"
        ]
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
        {/* End Google Tag Manager */}
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
        {/* End Google Tag Manager (noscript) */}
        {children}</body>
    </html>
  )
}
