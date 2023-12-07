import Image from "next/image";
import { FC, ReactNode } from "react";
import Layout from "../layout";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen grid grid -cols-1 lg:grid-cols-2 p-5 lg:p-8  ">
      <section className="h-full flex felx-col items-center justify-center bg-primary rounded-2xl">
        <div className="relative w-96 h-96 p-5">
          <Image src="/wallpaper.svg" alt="wallpaper" fill />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold text-center">
            Bienvenidos a PetApp
          </h3>
        </div>
      </section>
      {children}
    </main>
  );
};

export default AuthLayout;