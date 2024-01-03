import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import { Wallapaper } from "@/components/login/Wallapaper";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pet App",
  description:
    "aplicacion para gestionar las tareas que conlleva el cuidado de las mascotas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
         <main className="min-h-screen grid grid-cols-1 p-5 lg:grid-cols-2 lg:p-8">
            <Wallapaper />    
            {children}

        </main>  
      </body>
    </html>
  );
}
