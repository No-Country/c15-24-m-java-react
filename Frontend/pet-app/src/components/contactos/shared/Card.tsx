import styles from './Card.module.css'

interface Props {
    nombre: string,
    tel: string,
    direccion: string,
    horario: string,
}

export const Card = ({ nombre, tel, direccion, horario }: Props) => {
  return (
    <section className={styles.cardContainer}>
        <article className={styles.card}>
            <div className={styles.info}>
                <div className={styles.imgContainer}>
                    
                </div> 

                <div className={styles.datosContainer}>
                    <p className={styles.datosTitle}>{nombre}</p>
                    <p className={styles.datos}>Tel: {tel}</p>
                    <p className={styles.datos}>Direccion: {direccion}</p>
                    <p className={styles.datos}> {horario} </p>
                </div>
            </div>
        </article>

    </section>
  )
}
