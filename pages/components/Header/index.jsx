import Image from 'next/image';
import { Carousel } from 'flowbite-react'
import Navbar from '../Navbar';
import classNames from './Header.module.scss';

export default function Header() {
    return (
        <>
            <Navbar />
            <Carousel slide={false} slideInterval={7000} theme={{ 
                root: { 
                    base: `${classNames.slide} relative w-full` 
                } 
            }}>
                <div className={classNames.ppokerSlide}>
                    <div className="container mx-auto p-4 md:p-0 md:flex items-center">
                        <Image alt="PP Poker" src="https://play-lh.googleusercontent.com/43eiRGZtfwxMMoWjiXQ8yq7_YDQYUCoaIBwhTO5xUY61ye8vQVRBBFrshIUt0V8EZiQ" className="mb-12 md:mb-0 w-24 md:w-72 mr-8" width={300} height={300} />
                        <div className="max-w-xl">
                            <p className="text-lg">Jogue em uma das maiores plataformas de poker do Mundo.</p>
                            <p className="text-2xl mt-4 mb-4">O <strong>PPPoker</strong> é uma plataforma de poker online que oferece diversas modalidades de jogos.</p>
                            <p className="text-lg"><strong>Club ID</strong>: 2512171</p>
                        </div>
                    </div>
                </div>
                <div className={classNames.supremaSlide}>
                    <div className="container mx-auto p-4 md:p-0 md:flex items-center">
                        <Image alt="Suprema Poker" src="https://static.wixstatic.com/media/cdc3be_dfadbab346d74cdcbe25a0286e5b309a~mv2.png/v1/fill/w_460,h_460,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Suprema%20Poker.png" className="mb-12 md:mb-0 w-24 md:w-72 mr-8" width={300} height={300} />
                        <div className="max-w-xl">
                            <p className="text-lg">Jogue em uma das maiores plataformas de poker do Brasil.</p>
                            <p className="text-2xl mt-4 mb-4">A <strong>Suprema Poker</strong> é uma plataforma de poker online que oferece uma experiência de jogo única e exclusiva.</p>
                            <p className="text-lg"><strong>Club ID</strong>: 2512171</p>
                        </div>
                    </div>
                </div>
                <div className={classNames.cachetaSlide}>
                    <div className="container mx-auto p-4 md:p-0 md:flex items-center">
                        <Image alt="Cacheta League" src="https://cacheta.com/wp-content/uploads/2022/11/LOGO_CACHETA-1.png" className="mb-12 md:mb-0 w-24 md:w-72 mr-8" width={300} height={300} />
                        <div className="max-w-xl">
                            <p className="text-lg">Jogue em uma das maiores plataformas de cacheta do Brasil.</p>
                            <p className="text-2xl mt-4 mb-4">A <strong>Cacheta League</strong> é uma plataforma de cacheta online que oferece uma experiência de jogo única e exclusiva.</p>
                            <p className="text-lg"><strong>Club ID</strong>: 2512171</p>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    );
}