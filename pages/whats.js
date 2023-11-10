import Logo from '../public/logoparapagewhats.jpeg';
import Image from 'next/image';

export default function WhatsPage() {
  const whatsAppLink = 'https://api.whatsapp.com/send?phone=5511988362072&text=Oi,%20vi%20o%20an%C3%BAncio%20e%20quero%20saber%20como%20jogar%20no%20clube%20de%20voc%C3%AAs!';
  return (
    <div className="font-sans text-lg ">
      <div className='flex justify-center mt-2'>
        <Image className='' height={100} src={Logo} alt="Chippix Logo" />
      </div>
      <div className='flex text-center mt-8 w-full md:justify-center'>
        <p>Conversar com +55 11 98836-2072 no WhatsApp</p>
      </div>
      <div className='flex justify-center mt-8'>
        <a 
          href='https://api.whatsapp.com/send/?phone=5511988362072&text=Olá!%20Vi%20o%20anúncio,%20quero%20saber%20mais%20do%20clube!&type=phone_number&app_absent=0' 
          className="text-white bg-green-button hover:text-gray-300 focus:outline-none font-medium rounded-full text-lg px-6 py-3 text-center me-2 mb-2">Iniciar Conversa
        </a>
      </div> 
      <div className='flex text-center mt-12 md:justify-center'>
        <p className=''>
          Oi, vi o anúncio e quero saber como jogar no clube de vocês!
        </p>
      </div>
      <div className='flex justify-center mt-12'>
        <p>Ainda não tem o WhatsApp?</p>
      </div>
      <div className="flex justify-center ">
        <a href="https://www.whatsapp.com/download" className="text-lg text-blue-whats hover:underline">Baixar</a>
      </div>
    </div>
  )
}