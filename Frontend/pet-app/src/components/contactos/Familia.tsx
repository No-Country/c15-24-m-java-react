import React from 'react'
import { Card } from './shared/Card'
import { Personas } from './interfaces/interfaces'


export const Familia = ({ data }: Personas) => {
  return (
    <article className="mt-10 lg:mt-0">
        <h2 className="text-2xl">Familia</h2>
        
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
