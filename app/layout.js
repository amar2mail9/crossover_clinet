import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ContactPopup from "@/components/ContactUs/ContactPopup";
import { SpeedInsights } from "@vercel/speed-insights/next"


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap", // optional: avoids invisible text while loading
  variable: "--font-poppins", // optional: for use with CSS variables/Tailwind
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Specify all weights you need
});

export const metadata = {
  metadataBase: new URL("https://crossoverfintechsupport.com"), // replace with your real domain

  title: {
    default: "Crossover Fintech Support | BPO, ITES & Digital Growth Services",
    template: "%s | Crossover Fintech Support",
  },

  description:
    "Crossover Fintech Support provides professional BPO, Finance & Accounting, IT-Enabled Services, Website Development, Digital Marketing, and Corporate Travel Support for growing businesses worldwide.",

  keywords: [
    "BPO services",
    "Fintech support",
    "Finance and accounting outsourcing",
    "IT enabled services",
    "CRM management",
    "Website development",
    "Digital marketing services",
    "Lead generation",
    "Corporate travel support",
    "Business outsourcing company",
  ],

  authors: [{ name: "Crossover Fintech Support" }],
  creator: "Crossover Fintech Support",
  publisher: "Crossover Fintech Support",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  openGraph: {
    title:
      "Crossover Fintech Support | Professional Business Support Solutions",
    description:
      "Expert BPO, Finance, ITES, Website Development & Digital Marketing services tailored for fintech, startups, and enterprises.",
    url: "https://crossoverfintechsupport.com",
    siteName: "Crossover Fintech Support",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // place this image in /public
        width: 1200,
        height: 630,
        alt: "Crossover Fintech Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Crossover Fintech Support | BPO, ITES & Digital Solutions",
    description:
      "Outsource smarter with Crossover Fintech Support – BPO, Finance, IT, and Growth Services for modern businesses.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://crossoverfintechsupport.com",
  },

  category: "Business Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} `}>
      <body className="bg-gray-50 text-[#102A43]">
        <ContactPopup/>
        <Header />
        {children}
        <Footer />
        <SpeedInsights/>
      </body>
    </html>
  );
}
