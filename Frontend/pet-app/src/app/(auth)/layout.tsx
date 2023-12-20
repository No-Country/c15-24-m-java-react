import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "../../app/globals.css";



const inter = Nunito({ subsets: ["latin"] });

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
         <main className="min-h-screen grid grid-cols-1"> 
            {children}
        </main>  
      </body>
    </html>
  );
}
