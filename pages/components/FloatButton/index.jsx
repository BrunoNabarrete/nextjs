import Image from "next/image";
import whatsapp from '../../../public/whatsapp.png'
import className from './Float.module.scss'
import chippix from '../../../public/chippix.jpg'


export default function floatButton() {
    return (
        <div>
            <div className={className.floatWhatsapp}>
                <a target="_blank" className="mr-3 whatsapp-button" href="https://api.whatsapp.com/send/?phone=5511988362072&text=Olá!%20Vi%20o%20anúncio,%20quero%20saber%20mais%20do%20clube!&type=phone_number&app_absent=0">
                    <Image src={whatsapp} alt='whatslogo' className={className.floatWhatsapp} height={38} width={38} />
                </a>
            </div>
            <div className={className.floatChippix}>
                <a target="_blank" className="mr-3 whatsapp-button" href="http://onelink.to/vm2db9">
                    <Image src={chippix} className={className.floatChippix} alt='chippix' height={38} width={38} />
                </a>
            </div>
        </div>
    );
}