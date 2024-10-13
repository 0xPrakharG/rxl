import Header from "@/components/navbar/header";
import { Roboto } from "next/font/google";
import "./globals.css";
import { CTA } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";
import Head from "next/head";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "RXL",
    template: "%s - RXL",
  },
  description:
    "RXL Group, Finance & Accounting Software Services, Data Transformation, QuickBooks Desktop, QuickBooks Online, Compliance and Risk management Services",
  openGraph: {
    images: "/opengraph-image.png",
  },
  alternates: {
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <Head>
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_BASE_URL}`} />
        <link
          rel="alternate"
          hreflang="en-US"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/en-US`}
        />
        <link
          rel="preload"
          as="image"
          href="../../public/assets/hero-vectors.svg"
        />
        <link
          rel="preload"
          as="image"
          href="../../public/assets/approach-vector.svg"
        />
        <link
          rel="preload"
          as="image"
          href="../../public/assets/hero-image.webp"
        />
        <link rel="preload" as="image" href="../../public/assets/cta.webp" />
        <link
          rel="preload"
          as="image"
          href="../../public/assets/contact-vector.svg"
        />
      </Head>
      <body className="mx-auto max-w-screen-2xl antialiased">
        <Header />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
