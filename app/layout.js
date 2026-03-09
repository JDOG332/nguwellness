import "./globals.css";

export const metadata = {
  title: "NGU Wellness — Never Give Up",
  description: "Therapy that fits your life. Individual, couples, and family counseling in Dayton, Rocky River, and across Ohio via telehealth.",
  keywords: "therapy, counseling, mental health, Dayton Ohio, Rocky River Ohio, anxiety, depression, trauma, therapist",
  openGraph: {
    title: "NGU Wellness — Never Give Up",
    description: "Therapy that fits your life. Dayton, Rocky River, and all of Ohio.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
