import { Carousel } from 'flowbite-react'
import pppoker from '../public/pppokerResoluçãoMelhor.webp'
import suprema from '../public/supremaImagem2.jpg'
import cacheta from '../public/cachetaImagem2.jpg'
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
                <div className="flex items-center">
                    <Image />
                    <div>
                        <h3 className="text-center text-3xl text-white font-bold mt-20 mb-8">
                            Os melhores torneios do Poker Online
                        </h3>
                        <p className="text-white">
                            Aqui é onde você encontrará os melhores torneios de poker na internet! Nossos torneios são projetados para oferecer aos jogadores uma experiência de jogo emocionante e imersiva, com mesas de alta qualidade e revendedores profissionais. Oferecemos uma ampla variedade de jogos, desde os torneios mais populares até os eventos mais exclusivos e desafiadores, com grandes prêmios em dinheiro e entradas com diferentes valores. Nossa plataforma online é segura e confiável, com um sistema de segurança avançado que protege seus dados pessoais e bancários. Além disso, oferecemos uma equipe de suporte ao cliente amigável e eficiente, pronta para ajudar com qualquer dúvida ou problema que você possa ter. Venha jogar conosco e experimente a emoção dos melhores torneios de poker online!
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
                            Venha jogar conosco e experimente a emoção dos nossos jogos de cash game de poker online! Temos uma ampla variedade de jogos disponíveis, com mesas para jogadores iniciantes e experientes. Oferecemos limites de aposta baixos e altos, para que você possa escolher o jogo que melhor se adapta ao seu nível de habilidade e à sua bancada. Nossa plataforma online é segura e confiável, com uma interface fácil de usar que torna a navegação simples e intuitiva. Além disso, nossos jogos são totalmente justos e aleatórios, graças a um sistema de gerador de números aleatórios rigoroso e independente. Nós também oferecemos bônus e promoções exclusivas para os nossos jogadores de cash game, então não perca a oportunidade de aumentar sua banca e ganhar ainda mais jogando com a gente. Venha jogar e experimentar a emoção dos nossos jogos de cash game de poker online!
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