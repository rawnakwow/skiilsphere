import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/shared/Navbar";
import Footer from '@/components/shared/Footer'; // Note the { }

export const metadata = {
  title: "SkillSphere",
  description: "Online Learning Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main className="min-h-screen">
          {children}
        </main>
        <Footer> </Footer>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}