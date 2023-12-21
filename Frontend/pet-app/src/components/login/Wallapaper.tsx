import Image from 'next/image'
import banner from '../../../public/images/banner.png'
import React from 'react'

export const Wallapaper = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center bg-primary1 rounded-2xl">
        <div className="relative flex items-center justify-center">
        <Image src={banner} alt="banner" fill />
        </div>
        <div className="relative w-96 h-96 p-3">
          <Image src="/pet.png" alt="wallpaper" fill />
        </div>
      </section>
  )
}
