'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const BtnRegistrar = () => {

    const router = useRouter();

  return (
    <button type="button" className='w-full bg-secundario4 text-white py-3 px-3 rounded-xl mb-3 border-2 border-transparent hover:bg-transparent hover:border-secundario4 hover:text-black  transition-colors duration-300' onClick={() => router.push('/register')}>
            Quiero registrarme
    </button>
  )
}
