import contato from '../../images/undraw-contact.svg';

function Sectionthree() {
  return (
    <div className="flex flex-col lg:flex-row">
      
      <div className="ml-8 lg:w-1/2">
        <img src={contato} alt="" className='w-full h-auto' />
      </div>
    
      
      <div className="p-8 lg:w-1/2">
      <form       
           className="flex flex-col gap-8 "
         >
             <h1 className=" font-bold text-[1.4rem]  text-white ">
         
      
         Entre em contato e conheça nossos serviços...
             </h1>
           <div className="flex gap-4 tablet:flex-row">
             <label className="flex items-center flex-1 w-full border-2 border-gray-200 rounded-md focus-within:border-primary">
               <input
                 type="text"
                 name="name"
                 placeholder="Nome"
                 className="w-full py-2 ml-2 text-white bg-transparent rounded-md outline-none focus-within:border-primary"
               />
             </label>

             <label className="flex items-center flex-1 w-full border-2 border-gray-200 rounded-md focus-within:border-primary">
               <input
                 type="text"
                 name="CPF"
                 placeholder="CPF"
                 className="w-full py-2 ml-2 text-white bg-transparent outline-none focus-within:border-primary"
               />
             </label>
           </div>

           <div className="flex gap-4 tablet:flex-row">
             <label className="flex items-center flex-1 w-full border-2 border-gray-200 rounded-md focus-within:border-primary">
               <input
                 type="email"
                 name="E-mail"
                 placeholder="E-mail"
                 className="w-full py-2 ml-2 text-white bg-transparent rounded-md outline-none focus-within:border-primary"
               />
             </label>

             <label className="flex items-center flex-1 w-full border-2 border-gray-200 rounded-md focus-within:border-primary">
               <input
                 type="text"
                 name="Telefone"
                 placeholder="Telefone de Contato"
                 className="w-full py-2 ml-2 text-white bg-transparent rounded-md outline-none focus-within:border-primary"
               />
             </label>
           </div>

           <textarea
             className="flex items-center w-full px-2 py-2 text-white bg-transparent border-2 border-gray-200 rounded-md outline-none focus-within:border-primary"
             name="message"
             id="message"
             cols={30}
  ml-2 text-white            rows={10}
             placeholder="Mensagem"
           />

           <div className="flex items-center justify-center flex-1">
             <button
               type="submit"
               className="w-full px-4 py-2 font-bold text-white bg-indigo-700 border border-blue-700 rounded md:w-48 hover:bg-blue-700"
             >
               Enviar
             </button>
           </div>
         </form>

         
      </div>
      

      
    </div>
  );
}

export default Sectionthree;
