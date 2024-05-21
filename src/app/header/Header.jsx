import Image from 'next/image';
import React from 'react';
import logo from "../../../public/assets/logo.svg";

function Header() {
  return (
    <header className="container z-50 relative mx-auto flex flex-wrap flex-col -mt-10 md:flex-row items-center pb-20">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       <Image src={logo} width={100} class="rounded-full"/>
      </a>
      <nav className="md:ml-auto text-3xl flex flex-wrap items-center justify-center">
        <a href="#home" className="mr-5 hover:text-[#BB994F] nav-item cursor-pointer ">Início</a>
        <a href="#services" className="mr-5 hover:text-[#BB994F]  nav-item cursor-pointer ">Serviços</a>
        <a href="#about" className="mr-5 hover:text-[#BB994F] nav-item cursor-pointer ">Sobre</a>
        <a href="#contact" className="mr-5 hover:text-[#BB994F] nav-item cursor-pointer ">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
