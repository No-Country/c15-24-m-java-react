


import styles from './SectionMascotas.module.css'



interface DivGeneradoProps {
  deleteCard: (id: string) => void;
  idUnico: string ;
 }


export const DivGenerado = ({ deleteCard, idUnico }: DivGeneradoProps) =>{




  return (
    <div className= {`${styles.divGenerado} `} >

        
       <div className='flex  items-center justify-between '>


       </div>

       <div className=' flex  items-center justify-between'>
       <button onClick={() => deleteCard(idUnico)} className='hover:bg-red-500 p-2 text-xs hover:text-white w-full   transition-colors rounded'>Eliminar</button>

       </div>
   
    </div>
   );
} 