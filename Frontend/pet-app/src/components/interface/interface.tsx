
export interface Animal {
    nombre: string;
    especie:string;
    raza: string;
    color: string;
    edad: number;
    sexo: string;
    esterilizado: string;
    tratamiento: string;
    alergias: string;
    mensaje:string;
    idUnico?:string;
    tasks?: Task[]; // Añade esta línea

   
  }


  
export interface TareasInterface {
 fecha:string,
 hora:string,
 mascota:string,
 recordatorio:string,
 notas:string,
 id?:string

 
}

export interface Task {
  fecha: string;
  hora: string;
  mascota: string;
  recordatorio: string;
  notas: string;
  completed: boolean;
  id: string;
  
}

  
// guarda, 3 puntos,cerrar en el formulario, (componets Controlador)
  export interface ControladorProps {
    handleSubmit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    toggleForm?: any ; 
  }