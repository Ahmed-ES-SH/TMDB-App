import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "./_components/_globalComponents/Navbar";
import Footer from "./_components/_globalComponents/Footer";
import ClientLayout from "./_components/_globalComponents/ClientLayout";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "./globals.css";

const FontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "FlixTV – Movies & TV Shows, Online cinema",
  description: "FlixTV – Movies & TV Shows, Online cinema",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontRoboto.className} antialiased`}>
        <ClerkProvider>
          <ClientLayout>
            <Navbar />
            <Toaster richColors position="top-right" />
            {children}
            <Footer />
          </ClientLayout>
        </ClerkProvider>
      </body>
    </html>
  );
}
