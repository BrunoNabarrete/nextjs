import Image from 'next/image'
import whatsapp from '../../../public/whatsapp.png'
import instagram from '../../../public/instagram.png'

export default function Footer() {
    return (
        <div id="contact" className='bg-gray-800 md:flex justify-center w-full mt-12 md:mt-24 pb-8 text-white md:divide-x p-6'>
            <div className="md:pr-12 border-slate-700">
                <p className="font-bold font-xl">
                    Central de Atendimento
                </p>
                <p className="font-medium text-md">
                    <strong>Tel:</strong> (11) 98836-2072
                </p>
                <p>
                    <strong>Email:</strong> brotherhood.pokerclub@gmail.com
                </p>
            </div>
            <div className="md:pl-12 border-slate-700 mt-8 md:mt-0">
                <p className="font-bold font-xl">
                    Nos acompanhe nas redes sociais
                </p>
                <div className='flex mt-2 mr-20'>
                    <a target="_blank" className="mr-3" href="https://api.whatsapp.com/send/?phone=5511988362072&text=Ol%C3%A1!%20Vi%20o%20an%C3%BAncio,%20quero%20saber%20mais%20do%20clube!&type=phone_number&app_absent=0">
                        <Image src={whatsapp} alt='whatslogo' className="rounded" height={38} width={38} />
                    </a>

                    <a target="_blank" href="https://www.instagram.com/brotherhood_poker/">
                        <Image src={instagram} alt='instagram' className="rounded" height={38} width={38} />
                    </a>
                </div>
            </div>
        </div> )
};