import Input from "@/components/login/input";

const Form3 = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-primary">
      <div>
        <h2 className="text-gray-500 font-semibold text- justify-center">
          Ingrese sus datos: 
        </h2>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
      <form className="w-full">
        <Input type="text" placeholder="Nombre" />
        <Input type="password" placeholder="Password" />
        <Input type="text" placeholder="Telefono" />
        <Input type="email" placeholder="Email" />
        <div className="flex justify-end ">
          <button type="button" className="w-full bg-secondary text-white py-3 px-4 rounded-xl mb-5 boder-2 border-transparent hover:bg-transparent hover:border-secondary hover:text-secondary transition-colors duration-300">
            Registrar
          </button>
        </div>
      </form>
     </div>
    </section>
  );
};

export default Form3;
