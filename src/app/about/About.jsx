import React from 'react'
import Image from "next/image";
import sobre from "../../../public/assets/sobre.png";

function About() {
  return (
    <div>
        <section class="text-gray-600 body-font" id="about">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image class="object-cover object-center rounded" alt="hero" src={sobre} />
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Sobre</h1>
      <p class="mb-8 leading-relaxed">Desde 1888 até os dias de hoje, situados em Caiçara - PB,
nosso Registro Civil preserva vidas, histórias e vínculos.
Conte conosco para precisão e integridade em todos os
registros, refletindo nossa tradição de serviço ao longo das
gerações.</p>
      <p class="leading-relaxed f">Oficial de Registro: <span>Cynnara Siqueira Paiva de Souza</span></p>
      <p class="mb-8 leading-relaxed">Aberto de segunda à sexta das 7h às 13h</p>
      <div class="flex w-full md:justify-start justify-center items-end">

       
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}

export default About