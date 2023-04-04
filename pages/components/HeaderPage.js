import whatsLogo from '../../public/brotherhoodlogo.jpeg'
import Image from 'next/image'

export default function HeaderPage() {
    return (
        <div>
            <Image src={whatsLogo} alt='brotherhoodlogo' width={300} height={150}>
            </Image>
            <h1>
                HeaderTeste
            </h1>
        </div>
    )
  }