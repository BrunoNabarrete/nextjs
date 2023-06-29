import { Carousel } from 'flowbite-react'

import Image from 'next/image'
import CardInfo from './components/Cardinfo'
import classNames from '../styles/Home.module.scss';



export default function homePage() {
    return (
        <>
            <Carousel slideInterval={7000} theme={{ 
                root: { 
                    base: `${classNames.slide} relative w-full` 
                } 
            }}>
                <div className={classNames.ppokerSlide}>
                    <div className="container mx-auto">
                        <h2>PPPoker <br /> Club</h2>
                        <h4>Club ID: 2512171</h4>
                    </div>
                </div>
                <div className={classNames.supremaSlide}>
                    <div className="container mx-auto">
                        <h2>Suprema <br />Poker</h2>
                        <h4>Club ID: 2512171</h4>
                    </div>
                </div>
                <div className={classNames.cachetaSlide}>
                    <div className="container mx-auto">
                        <h2>Cacheta League <br />Brazil</h2>
                        <h4>Club ID: 867972</h4>
                    </div>
                </div>
            </Carousel>

            <div className='container mx-auto'>
                <h3 className='text-center text-4xl text-white font-bold mt-20 mb-8'>
                    BEM VINDO
                </h3>

                <p className="text-center text-xl text-white">
                    É ótimo tê-lo aqui e esperamos que você se divirta muito jogando conosco. Estamos comprometidos em fornecer um ambiente amigável e justo para todos os nossos jogadores, onde o respeito e a honestidade são valorizados. Seja você um jogador experiente ou um iniciante, estamos aqui para ajudá-lo a melhorar suas habilidades e aproveitar ao máximo cada jogo. Boa sorte nas suas jogadas!
                </p>
            </div>
            <div className='container mx-auto'>
                <article class="md:flex items-center bg-slate-100 rounded-xl p-8 md:p-8 dark:bg-slate-800 mt-8">
                    <img class="w-48 h-48 md:w-48 rounded-full mx-auto" src="https://cdn-icons-png.flaticon.com/512/3791/3791606.png" alt="Trophy Icon" width="384" height="384" />
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <h4 className="text-2xl text-sky-400 font-bold mb-8">
                            Os melhores torneios do Poker Online
                        </h4>

                        <p class="text-lg text-slate-300">
                        Descubra os melhores torneios de poker online em nossa plataforma! Com mesas de alta qualidade, grandes prêmios em dinheiro e suporte ao cliente eficiente, oferecemos uma experiência emocionante. Junte-se a nós agora e experimente a emoção dos melhores torneios de poker online!
                        </p>
                    </div>
                </article>
                <div className="flex items-center">
                    <Image />
                    <div>
                        <h3 className="text-center text-3xl text-white font-bold mt-20 mb-8">
                            Os melhores torneios do Poker Online
                        </h3>
                        <p className="text-white">
                            
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    <Image />
                    <div>
                        <h3 className="text-center text-3xl text-white font-bold mt-20 mb-8">
                            Melhor Cash Game
                        </h3>
                        <p className="text-white">
                           
                            Jogue conosco e experimente a emoção dos jogos de cash game de poker online! Oferecemos uma ampla variedade de jogos com diferentes limites de aposta, adequados para jogadores de todos os níveis. Nossa plataforma é segura, intuitiva e os jogos são justos. Aproveite também nossos bônus e promoções exclusivas para aumentar suas chances de ganhar. Venha jogar e vivencie a emoção dos nossos jogos de cash game de poker online!
                        </p>
                    </div>
                </div>
                
            </div>
            <div>
                
            </div>

            <div>
                <CardInfo/>
            </div>
        </>
    )
}