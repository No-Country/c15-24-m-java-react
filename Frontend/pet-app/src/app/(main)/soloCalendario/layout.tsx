import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

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
      <body className={styles.containerPage}>{children}</body>
    </html>
  );
}
