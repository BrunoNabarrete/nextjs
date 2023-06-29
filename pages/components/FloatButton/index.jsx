import Image from "next/image";
import whatsapp from '../../../public/whatsapp.png'
import className from './Float.module.scss'

export default function floatButton() {
    return (
        <div className={className.float}>
            <a target="_blank" className="mr-3 whatsapp-button" href="whatsapp://send?phone=5511988362072">
                <Image src={whatsapp} alt='whatslogo' className={className.float} height={38} width={38} />
            </a>
        </div>
    );
}