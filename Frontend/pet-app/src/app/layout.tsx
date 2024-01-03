import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({  weight: ['400', '700','800'], subsets: ["latin"] });

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
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
