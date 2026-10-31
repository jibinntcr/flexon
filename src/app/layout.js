import "../styles/index.css";
import AppShell from "../components/AppShell.js";

export const metadata = {
  metadataBase: new URL("https://flexonsports.org"),
  title: {
    default: "Flexon Sports Foundation — Sport, Community & Global Goals",
    template: "%s | Flexon Sports Foundation"
  },
  description:
    "Discover Flexon’s sporting initiatives, FLEXATHON, football coaching and ways to participate, collaborate or support the foundation.",
  icons: {
    icon: "/assets/brand/flexon-sports-foundation-logo.png",
    apple: "/assets/brand/flexon-sports-foundation-logo.png"
  },
  openGraph: {
    title: "Flexon Sports Foundation — Sport, Community & Global Goals",
    description:
      "Connecting communities through athletic participation, inclusive learning, and collective purpose.",
    type: "website",
    url: "https://flexonsports.org/",
    images: [
      {
        url: "/assets/3d/hero-3d-white.jpg",
        alt: "Flexon Sports Foundation"
      }
    ]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Flexon Sports Foundation",
  url: "https://flexonsports.org",
  logo: "https://flexonsports.org/assets/brand/flexon-sports-foundation-logo.png",
  description:
    "A Section 8 not-for-profit company connecting sporting participation with active living, education and community engagement towards the Sustainable Development Goals.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Door No. 2024, Amepadath Lane, Kaloor",
    addressLocality: "Ernakulam",
    addressRegion: "Kerala",
    postalCode: "682017",
    addressCountry: "IN"
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91 96052 06461",
      contactType: "general inquiries",
      email: "flexonsport@gmail.com"
    },
    {
      "@type": "ContactPoint",
      telephone: "+91 90749 34014",
      contactType: "secretariat"
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
      </head>
      <body>
        <a href="#app-main" className="skip-link">
          Skip to main content
        </a>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

