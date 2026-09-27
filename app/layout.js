import "@fontsource/playfair-display/latin-900.css";
import "@fontsource/playfair-display/latin-900-italic.css";
import "@fontsource/playfair-display/latin-400-italic.css";
import "@fontsource/inter/latin-300.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "./globals.css";
import { SITE } from "../data/site";
import { organizationSchema } from "../data/schema";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "NGU Wellness | Therapy in Dayton, Rocky River & Ohio Telehealth",
    template: "%s | NGU Wellness",
  },
  description:
    "Licensed therapists for children, teens, adults, and couples. In person in Dayton and Rocky River, and by telehealth anywhere in Ohio. Most major insurance and Ohio Medicaid accepted.",
  openGraph: {
    siteName: "NGU Wellness",
    type: "website",
    locale: "en_US",
    images: ["/images/NGU Wellness.png"],
  },
  twitter: { card: "summary" },
  alternates: { canonical: "/" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        {children}
      </body>
    </html>
  );
}
