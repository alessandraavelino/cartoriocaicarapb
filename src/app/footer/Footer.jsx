import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/logo.svg";
function Footer() {
  return (
    <div>
        <footer class="text-white bg-[#001E5F] body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
    <Image src={logo} width={80} class="rounded-full"/>
      <span class="ml-3 text-xl">Cartório de Caiçara</span>
    </a>
    <p class="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Todos os direitos reservados
      
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      Desenvolvido por<a class="pl-1 text-white font-semibold" href="https://www.dreamslabcode.com.br" target='_blank'> Dreams Lab Code</a>
    </span>
  </div>
</footer>
    </div>
  )
}

export default Footer