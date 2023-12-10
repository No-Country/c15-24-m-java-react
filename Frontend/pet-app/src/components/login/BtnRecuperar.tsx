'use client'

import { useRouter } from 'next/navigation';
import React from 'react'

export const BtnRecuperar = () => {

    const router = useRouter();

  return (
    <button type="button" className="text-grey-500" onClick={() => router.push('/recover')}>
            Olvidé mi contraseña
    </button>
  )
}
