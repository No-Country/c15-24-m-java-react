'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const BtnRegistrar = () => {

    const router = useRouter();

  return (
    <button type="button" className='text-grey-500 font-semibold flex gap-x-2 mb-5' onClick={() => router.push('/register')}>
            Quiero registarme
    </button>
  )
}
