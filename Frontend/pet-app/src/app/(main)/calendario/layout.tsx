import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../../app/globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { ContainerMain } from "@/components/containerMain/containerMain";

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
        <Navbar></Navbar>
        <ContainerMain isActive={true}>{children}</ContainerMain>
      </body>
    </html>
  );
}
