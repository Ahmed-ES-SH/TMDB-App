import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Navbar from "./_components/_globalComponents/Navbar";
import Footer from "./_components/_globalComponents/Footer";
import ClientLayout from "./_components/_globalComponents/ClientLayout";
import "./globals.css";
import FetchData from "./hooks/FetchData";
import { genersMovies, genresShows } from "./constants/apis";

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
  const { genres } = await FetchData(genersMovies, false);
  const { genres: genres_Shows } = await FetchData(genresShows, false);
  return (
    <html lang="en">
      <body className={`${FontRoboto.className} antialiased`}>
        <ClientLayout genres={genres} genres_Shows={genres_Shows}>
          <Navbar />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
