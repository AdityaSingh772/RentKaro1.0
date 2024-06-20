import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Analytics } from '@vercel/analytics/react';


import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const noto = Raleway({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "RentKaro™",
  description: "This is the renting and selling app for colleges across india",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" overflow-x-hidden bg-black">
      <UserProvider>
        <body className={noto.className} >
          <div className="min-h-screen flex flex-col justify-between">
           <Navbar/>
            <main className="flex-grow">
              {children}
              <Analytics />
            </main>
            <Footer/>
          </div>
        </body>
      </UserProvider>
    </html>
  );
}
