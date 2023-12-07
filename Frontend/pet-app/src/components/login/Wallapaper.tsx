import Image from 'next/image'
import React from 'react'

export const Wallapaper = () => {
  return (
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
  )
}
