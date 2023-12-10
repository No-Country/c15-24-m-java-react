import Input from "@/components/login/input";

const Form3 = () => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-primary">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div>
        <h2 className="text-gray-500 font-semibold text- justify-center">
          Ingrese sus datos: 
        </h2>
      </div>
      <form className="w-full">
        <Input type="text" placeholder="Su nombre" />
        <Input type="password" placeholder="Su password" />
        <Input type="text" placeholder="Su telefono" />
        <Input type="email" placeholder="Su email" />
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
