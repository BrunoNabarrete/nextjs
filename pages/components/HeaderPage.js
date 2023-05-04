import whatsLogo from '../../public/brotherhoodlogo.jpeg'
import Image from 'next/image'
import MyDropdown from './MyDropDown'

export default function HeaderPage() {
    return (
        <div className='flex justify-center rounded-full '>
            <Image src={whatsLogo} alt='brotherhoodlogo' width={250} height={250}>
            </Image>
            {/* <MyDropdown/> */}
        </div>
    )
  }