import pppoker from '../public/pppoker.png'
import suprema from '../public/supremalogo.jpeg'
import cacheta from '../public/cachetaleaguelogo.png'
import Image from 'next/image'
import CardInfo from './components/Cardinfo'



export default function homePage() {
    return (
        <div>


<div id="controls-carousel" class="relative w-full" data-carousel="static">
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={pppoker} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <Image src={suprema} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <Image src={cacheta} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
    </div>
    <div>
        <h2>
            Bem-vindo ao Poker Online
        </h2>
        <h3>
        Bem-vindo ao nosso clube de poker BrotherHood! É ótimo tê-lo aqui e esperamos que você se divirta muito jogando conosco. Estamos comprometidos em fornecer um ambiente amigável e justo para todos os nossos jogadores, onde o respeito e a honestidade são valorizados. Seja você um jogador experiente ou um iniciante, estamos aqui para ajudá-lo a melhorar suas habilidades e aproveitar ao máximo cada jogo. Boa sorte nas suas jogadas!
        </h3>
    </div>
    <div>
        <h2>
            Os melhores torneios do Poker Online
        </h2>
        <h3>
        Aqui é onde você encontrará os melhores torneios de poker na internet! Nossos torneios são projetados para oferecer aos jogadores uma experiência de jogo emocionante e imersiva, com mesas de alta qualidade e revendedores profissionais. Oferecemos uma ampla variedade de jogos, desde os torneios mais populares até os eventos mais exclusivos e desafiadores, com grandes prêmios em dinheiro e entradas com diferentes valores. Nossa plataforma online é segura e confiável, com um sistema de segurança avançado que protege seus dados pessoais e bancários. Além disso, oferecemos uma equipe de suporte ao cliente amigável e eficiente, pronta para ajudar com qualquer dúvida ou problema que você possa ter. Venha jogar conosco e experimente a emoção dos melhores torneios de poker online!
        </h3>
    </div>
    <div>
        <h2>
            Melhor Cash Game
        </h2>
        <h3>
        Venha jogar conosco e experimente a emoção dos nossos jogos de cash game de poker online! Temos uma ampla variedade de jogos disponíveis, com mesas para jogadores iniciantes e experientes. Oferecemos limites de aposta baixos e altos, para que você possa escolher o jogo que melhor se adapta ao seu nível de habilidade e à sua bancada. Nossa plataforma online é segura e confiável, com uma interface fácil de usar que torna a navegação simples e intuitiva. Além disso, nossos jogos são totalmente justos e aleatórios, graças a um sistema de gerador de números aleatórios rigoroso e independente. Nós também oferecemos bônus e promoções exclusivas para os nossos jogadores de cash game, então não perca a oportunidade de aumentar sua banca e ganhar ainda mais jogando com a gente. Venha jogar e experimentar a emoção dos nossos jogos de cash game de poker online!
        </h3>
    </div>

        <div>
            <CardInfo/>
        </div>
        </div>
    )
  }