import Input from "@/components/login/input";

import Button from "./button";



const Form = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="mb-5">        
      </div>
      <form className="w-80 bg-gray-100 p-8 rounded-lg shadow-md">
        <Input type="text" placeholder="Email" className="mb-4 block w-full" />
        <Input type="password" placeholder="Password" className="mb-4 block w-full"/>
        <Button type='submit' label='Iniciar sesión'/>
      </form>
    </div>
  );
};

export default Form;
