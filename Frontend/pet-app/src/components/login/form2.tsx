import Input from "@/components/login/input";

const Form2 = () => {
  return (
    <div className="w-full max-w-md">
      <div className="mb-5">
        <h2 className="text-gray-500 font-semibold text- justify-center">
          Recupere su contraseña
        </h2>
      </div>
      <form className="w-full">
        <Input  type="text" placeholder="Email" />
        
        <div className="flex justify-end ">
          <button type="button" className="text-grey-500">
            Recuperar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
