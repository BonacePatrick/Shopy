import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartProviders from "@/components/CartProviders";
import ShoppingCartModel from "@/components/ShoppingCartModel";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";

const Montserrat = localFont({
  src: "./fonts/Montserrat-VariableFont_wght.ttf",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shopy",
  description: "Get amazing digital shopping experience by shopy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Montserrat.className} antialiased`}>
        <CartProviders>
          <div className="px-3 md:px-10 lg:px-20">
           <Toaster />
            <Navbar />
            {children}
            <Footer/>
            <ShoppingCartModel />
          </div>
        </CartProviders>
      </body>
    </html>
  );
}
