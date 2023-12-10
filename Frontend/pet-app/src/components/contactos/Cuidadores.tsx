import React from 'react'
import { Card } from './shared/Card'
import { Personas } from './interfaces/interfaces'


export const Cuidadores = ({ data }: Personas) => {
  return (
    <article className="mt-10">
        <h2 className="text-2xl">Cuidadores</h2>
        
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
