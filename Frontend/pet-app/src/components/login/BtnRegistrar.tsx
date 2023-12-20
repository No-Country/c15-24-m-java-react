'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const BtnRegistrar = () => {

    const router = useRouter();

  return (
    <button type="button" className='w-full bg-secundario1 text-white py-3 px-4 rounded-xl mb-5 boder-2 border-transparent hover:bg-transparent hover:border-secundario2 hover:text-secundario2 transition-colors duration-300' onClick={() => router.push('/register')}>
            Quiero registarme
    </button>
  )
}
