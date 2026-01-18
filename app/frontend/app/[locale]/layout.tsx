import "../globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Metadata } from "next";
import { fetchHomepage } from "../libs/payload";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const data = await fetchHomepage(locale);

  return {
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      locale: locale,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className="min-h-screen flex flex-col">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
