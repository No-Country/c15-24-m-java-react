import React from 'react'
import { Card } from './shared/Card'
import { Personas } from './interfaces/interfaces'



export const Veterinarios = ({ data }: Personas) => {
  return (
    <article className="">
        <h2 className="text-2xl">Veterinarios</h2>

        {
          data.map(item => (
            <Card 
              key={item.id}
              {...item}
            />

          ))
        }

    </article>
  )
}
