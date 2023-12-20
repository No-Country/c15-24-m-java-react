import styles from "../Formulario/Formulario.module.css";

interface FormularioProps {
  children: React.ReactNode;
}

//

const Formulario: React.FC<FormularioProps> = ({ children }) => {
  // Click enviar

  return (
    <div>
      <div className={`${styles.modal}     `}>

      
          {children}
          


      </div>
    </div>
  );
};

export default Formulario;
