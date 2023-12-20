import React from 'react'
import styles from '../NuevoGasto.module.css'
const CardContact = () => {
  return (
    <div >
        <div className={`${styles.cardContact} mt-5`}>
                    <div className="redondo pl-2 gap-2 flex align-middle">
                      <div className={`${styles.redondo}`}></div>
                      <div className="grid  w-full">
                        <h3>Edad</h3>
                        <h4>Veterinario</h4>
                        <h5>011 155106678</h5>
                        <div className="flex justify-end">
                          <button className={`${styles.verMas} mr-2 mb-3`}>
                            Ver mas
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
    </div>
  )
}

export default CardContact
