"use client";
import { useState } from "react";
import { Animal } from "../NuevoGasto/NuevoGasto";
import styles from "../Formulario/Formulario.module.css";

interface FormularioProps {
  children: React.ReactNode;
  datos: Animal;
}

//

const Formulario: React.FC<FormularioProps> = ({ children, datos }) => {
  const [alerta, setAlerta] = useState("");


  // Click enviar


  return (
    <div>
      <div
        className={`${styles.modal}     `}
      >
        <form
          className={`${styles.animationForm}  `}
        
        >
          {children}
    
            
          {alerta && (
            <div
              className="bg-teal-100 border-t-4 mt-5 p-5 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md"
              role="alert"
            >
              <div className="flex">
                <div className="py-1">
                  <svg
                    className="fill-current h-6 w-6 text-red-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">¡Atención!</p>
                  <p className="text-sm">{alerta}</p>

                  <div>
                  
                  </div>
                </div>
              </div>
            </div>
          )}




        </form>
      </div>
    </div>
  );
};

export default Formulario;
