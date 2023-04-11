import Image from 'next/image'
import whatsapp from '../../public/whatsapp.png'
import instagram from '../../public/instagram.png'

export default function FooterPage() {
    return (
        <div className='flex justify-center md:w-full border-2 border-black'>
            <div>
            <h1 className='border-2 border-black'>
                Central de Atendimento
            </h1>
            <h3>
                (11) 98836-2072
            </h3>
            <h3>
                brotherhood.pokerclub@gmail.com
            </h3>
            <h1>
                Siga o BrotherHood Club nas redes sociais
            </h1>
            <a href="https://web.whatsapp.com/send?phone=5511988362072">
                <Image src={whatsapp} alt='whatslogo' height={100} width={100}/>
            </a>

            <a href='https://www.instagram.com/brotherhood_poker/'>
                <Image src={instagram} alt='instagram' height={100} width={100}/>
            </a>
            <h1>
            </h1>
            </div>
            <div>
            </div>

        </div>
    )
  }