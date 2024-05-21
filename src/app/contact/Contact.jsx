import React from 'react'

function Contact() {
  return (
    <div>
        <section class="text-gray-600 body-font relative" id="contact">
  <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
      <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.560628196418!2d-35.4692288239916!3d-6.6162338477734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad96719e54f901%3A0x6b9aef9b2325ba1c!2sR.%20Jo%C3%A3o%20Pessoa%2C%2032%2C%20Cai%C3%A7ara%20-%20PB%2C%2058253-000!5e0!3m2!1spt-BR!2sbr!4v1716291500406!5m2!1spt-BR!2sbr" ></iframe>
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
        <div class="lg:w-1/2 px-6">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">Endereço</h2>
          <p class="mt-1">Rua Presidente João Pessoa, 32 - Caiçara - PB</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">E-mail</h2>
          <a class="text-indigo-500 leading-relaxed">rcpn.caicara@gmail.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WhatsApp</h2>
          <p class="leading-relaxed">(83) 99383 8118</p>
        </div>
      </div>
    </div>
    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h1 class="text-gray-900 text-4xl mb-1 font-medium title-font">Contato</h1>
      <div class="relative mb-4">
        <label for="name" class="leading-7 text-sm text-gray-600">Nome</label>
        <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Mensagem</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-[#BB994F] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full font-bold text-lg">Enviar</button>
    </div>
  </div>
</section>
    </div>
  )
}

export default Contact