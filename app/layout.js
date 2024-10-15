import Navigation from "@/components/UI/Navigation/Navigation";
import "./globals.css";
import { Cormorant_Infant } from "next/font/google";
import Footer from "@/components/UI/Footer/Footer";

export const metadata = {
  title: "Barbara Piękoś - Artystka, Malarstwo, Wystawy, Twórczość",
  description:
    "Odkryj twórczość Barbary Piękoś, absolwentki Akademii Sztuk Pięknych w Krakowie. Zobacz jej portrety, autoportrety i wystawy w galeriach sztuki w całej Polsce. Skontaktuj się i poznaj więcej o jej artystycznej wizji i pasji.",
  alternates: {
    canonical: "https://www.barbarapiekos.pl/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: "https://www.beatapiekos.pl/",
    title: "Barbara Piękoś – Oficjalne Portfolio Artystyczne",
    description:
      "Zapraszam do świata malarstwa i sztuki Barbary Piękoś. Zobacz wybrane prace, poznaj biografię artystki i jej dotychczasowe wystawy. Skontaktuj się i odkryj więcej o jej artystycznej podróży.",
    images: "/opengraph-image.png",
  },
};

const font = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={font.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
