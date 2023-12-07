import Form from "@/components/login/form";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="min-h-screen grid grid-cols-1 p-5 lg:grid-cols-2 lg:p-8">
      <section className="h-full flex flex-col items-center justify-center bg-primary rounded-2xl">
        <div className="relative w-96 h-96 p-5">
          <Image src="/wallpaper.svg" alt="wallpaper" fill />
        </div>
        <div>
          <h3 className="text-white text-xl font-semibold text-center">
            Bienvenidos a PetApp
          </h3>
        </div>
      </section>
      <section className="h-full flex flex-col items-center justify-center">
        <Form />
      </section>
    </main>
  );
}