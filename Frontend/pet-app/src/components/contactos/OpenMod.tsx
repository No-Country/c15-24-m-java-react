'use client'

import React, { useState } from 'react'

export const OpenMod = () => {

    const [ isModalOpen, setIsModalOpen ] = useState<Boolean>(false); 

  return (
      <>
  
       

    
            <button 
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full absolute top-5 right-5 text-5xl flex items-center justify-center -z-50"
    
            >
                + 
            </button>
      </>
    )
}
