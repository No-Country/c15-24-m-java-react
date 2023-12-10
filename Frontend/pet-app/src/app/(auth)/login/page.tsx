import Form from "@/components/login/form";


export default function LoginPage() {
  return (
    <>
      <section className="h-full flex items-center justify-center bg-primary">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <Form />
        </div>        
      </section>
    </>
    
  );
}