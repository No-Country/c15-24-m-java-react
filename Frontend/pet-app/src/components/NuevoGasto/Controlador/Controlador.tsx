import close from "../../../../public/images/Close.svg";
import tres from "../../../../public/images/tresPuntos.svg";
import styles from "../NuevoGasto.module.css";
import { ControladorProps } from "../../interface/interface";
import Image from "next/image";


const Controlador = ({ handleSubmit, toggleForm }: ControladorProps) => {
    
  




  return (
    <div>
      <div className={`${styles.config} absolute top-0 right-0 mt-2 gap-2`}>
        <button onClick={handleSubmit} className={`${styles.botonSave}`}>
          Guardar
        </button>

        <Image
          className="cursor-pointer"
          alt="cerrar"
          src={close}

          onClick={toggleForm}

          
        ></Image>
        <Image className="cursor-pointer" alt="mas info" src={tres}></Image>
      </div>
    </div>
  );
};

export default Controlador;
