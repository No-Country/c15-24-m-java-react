'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const BtnRegistrar = () => {

    const router = useRouter();

  return (
    <button type="button" className="text-grey-500" onClick={() => router.push('/register')}>
            Registrarse
    </button>
  )
}
