import React from "react";
import Header from "../header/Header";
import Image from "next/image";
import heroi from "../../../public/assets/heroi.svg";
import pena from "../../../public/assets/pena.png";

function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      
      <section
        id="home"
        className="text-white body-font py-40 bg-blue-500 w-full h-full flex items-center justify-center"
      >
        
        <div className="absolute inset-0 overflow-hidden z-0">
          <Image
            className="w-full h-full object-cover object-center"
            src={heroi}
            alt="Imagem de fundo"
          />
        </div>
        
        

        

        <div className="container relative z-20 flex flex-col -mt-20 items-center justify-center px-5 text-center">
      <Header />
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <Image
              className="object-center mb-4"
              width={250}
              src={pena}
              alt="Imagem de fundo"
            />
            <h1 className="title-font xl:text-6xl text-6xl mb-4 font-bold text-white">
              Cartório de Caiçara
            </h1>
            <h2 className="mb-8 text-xl leading-relaxed">
              Estamos comprometidos em facilitar seus processos legais e
              burocráticos, proporcionando tranquilidade e confiança em cada
              etapa.
            </h2>
            <div className="flex flex-col md:flex-row justify-center">
              <a
                href="#"
                className="inline-flex font-semibold shadow-xl text-white bg-[#BB994F] rounded-full py-4 px-8 focus:outline-none hover:bg-[#866929] text-xl mb-4 md:mb-0 md:mr-4 transition-colors duration-300 ease-in-out transform hover:-translate-y-1"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
