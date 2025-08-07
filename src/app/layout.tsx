/** @format */

import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lintas Inovasi Global - Jasa Pembuatan Website & Digital Solutions",
  description:
    "Lintas Inovasi Global adalah perusahaan yang menyediakan kenyamanan bagi client yang ingin berkembang melalui dunia digitalisasi. Spesialis jasa pembuatan website, mobile apps, SEO, dan solusi digital terpercaya.",
  keywords:
    "lintas inovasi global, ligal, jasa pembuatan website, digital solutions, mobile apps, SEO, web development, digital agency, indonesia",
  authors: [{ name: "Lintas Inovasi Global" }],
  creator: "Lintas Inovasi Global",
  publisher: "Lintas Inovasi Global",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://lintasinovasiglobal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lintas Inovasi Global - Jasa Pembuatan Website & Digital Solutions",
    description:
      "Perusahaan yang menyediakan kenyamanan bagi client yang ingin berkembang melalui dunia digitalisasi. Spesialis jasa pembuatan website, mobile apps, SEO, dan solusi digital terpercaya.",
    url: "https://lintasinovasiglobal.com",
    siteName: "Lintas Inovasi Global",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/lgic.png",
        width: 1200,
        height: 630,
        alt: "Lintas Inovasi Global - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lintas Inovasi Global - Jasa Pembuatan Website & Digital Solutions",
    description:
      "Perusahaan yang menyediakan kenyamanan bagi client yang ingin berkembang melalui dunia digitalisasi.",
    images: ["/lgic.png"],
  },
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
  verification: {
    google: "your-google-verification-code", // Ganti dengan kode verifikasi Google Search Console
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Lintas Inovasi Global",
    alternateName: "LIGAL",
    url: "https://lintasinovasiglobal.com",
    logo: "https://lintasinovasiglobal.com/lgic.png",
    description:
      "Perusahaan yang menyediakan kenyamanan bagi client yang ingin berkembang melalui dunia digitalisasi. Spesialis jasa pembuatan website, mobile apps, SEO, dan solusi digital terpercaya.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressLocality: "Indonesia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-857-8881-8811",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: ["https://wa.me/+6285788818811"],
    serviceArea: {
      "@type": "Country",
      name: "Indonesia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website Development",
            description: "Jasa pembuatan website profesional dan responsif",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Pengembangan aplikasi mobile untuk Android",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
            description: "Layanan optimasi mesin pencari",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Design",
            description: "Desain visual dan branding",
          },
        },
      ],
    },
  };

  return (
    <html lang="id">
      <head>
        <meta name="google-adsense-account" content="ca-pub-2113469480437461" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
