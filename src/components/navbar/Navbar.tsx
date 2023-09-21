import React from 'react';
import logo from '../../images/softlogo.png';

function Navbar() {
  return (
    <header className='ml-8 bg-black '>
    <nav className="w-full h-[70px] laptop:h-[50px] bg-gradient-to-r from-[#000000] to-[#171761] flex justify-center text-white text-sm transition-all duration-500 ease-linear z-50">
      <div className="md:flex md:justify-between">
        <div className="flex items-center justify-between pr-10 ">
          <img src={logo} alt="Logo da Softplan" className="h-20 w-30" /> 
        </div>

        <ul className="hidden pt-6 mt-4 text-white pr-80 mg md:flex md:mt-0 navbar-nav w-100 justify-content-around">
          <li className="mr-4">
            <a href="#sobre" className="hover:underline">Sobre a Softplan</a>
          </li>
          <li className="mr-4">
            <a href="#produtos" className="hover:underline">Produtos</a>
          </li>
          <li className="mr-4">
            <a href="#segmentos" className="hover:underline">Segmentos</a>
          </li>
          <li className="mr-4">
            <a href="#conteudos" className="hover:underline">Conteúdos</a>
          </li>
          <li className="mr-4">
            <a href="#contato" className="hover:underline">Contato</a>
          </li>
          <li className="mr-4">
            <a href="#carreiras" className="hover:underline">Carreiras</a>
          </li>
        </ul>
      </div>
    </nav></header>
  );
}

export default Navbar;
