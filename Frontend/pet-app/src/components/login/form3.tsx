import Input from "@/components/login/input";

const Form3 = () => {
  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-gray-500 font-semibold text- justify-center">
          Por favor, llene el siguiente formato de registro
        </h2>
      </div>
      <form className="w-full">
        <Input type="text" placeholder="Su nombre" />
        <Input type="password" placeholder="Su password" />
        <Input type="text" placeholder="Su telefono" />
        <Input type="email" placeholder="Su email" />
        <div className="flex justify-end ">
          <button type="button" className="text-grey-500">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
