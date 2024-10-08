import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nusalendra",
  description: "Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <header>
            <Navbar />
          </header>
          <main className="flex-grow flex flex-col items-center justify-between">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
