import { Montserrat } from "next/font/google";
import "./globals.css";

// components
import Navbar from "./components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        <main className="max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
