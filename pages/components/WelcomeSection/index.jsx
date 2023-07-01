import Image from 'next/image'
import FloatButton from '../FloatButton';
import VideoChippix from '../videoChippix';

export default function WelcomeSection() {
    return (
        <>
            <FloatButton>

            </FloatButton>
            <div className='container mx-auto p-4 md:p-0'>
                <h3 id='welcome' className='text-center text-4xl text-white font-bold mt-20 mb-8'>
                    BEM VINDO
                </h3>

                <p className="text-center text-md md:text-xl text-white">
                    Um clube de infinitas possibilidades, feito especialmente para você, seja recreativo, regular ou mesmo profissional. Aqui, você encontrará uma experiência única, repleta de benefícios exclusivos. Desfrute de bônus semanais incríveis, um VIP card que abre portas para um mundo de vantagens e privilégios, além de receber bonés estilosos, camisetas personalizadas e muito mais!
                    Nossa equipe está pronta para atendê-lo. Não perca tempo, entre em contato com nossa central agora mesmo e saiba como ingressar no clube que está conquistando o Brasil. <strong>Seja parte desse sucesso e aproveite todas as oportunidades que o nosso clube tem a oferecer!</strong>
                </p>
            </div>
            <div className='container mx-auto p-4 md:p-0'>
                <article className="md:flex items-center bg-slate-100 rounded-xl p-8 md:p-8 dark:bg-slate-800 mt-8">
                    <Image className="w-48 h-48 md:w-48 rounded-full mx-auto" src="https://cdn-icons-png.flaticon.com/512/3791/3791606.png" alt="Trophy Icon" width="384" height="384" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <h4 className="text-2xl text-sky-400 font-bold mb-8">
                            Os melhores torneios do Poker Online
                        </h4>

                        <p className="text-lg text-slate-300">
                        Descubra os melhores torneios de poker online em nossa plataforma! Com mesas de alta qualidade, grandes prêmios em dinheiro e suporte ao cliente eficiente, oferecemos uma experiência emocionante. Junte-se a nós agora e experimente a emoção dos melhores torneios de poker online!
                        </p>
                    </div>
                </article>

                <article className="md:flex items-center bg-slate-100 rounded-xl p-8 md:p-8 dark:bg-slate-800 mt-8">
                    <Image className="md:hidden w-48 h-48 md:w-48 rounded-full mx-auto" src="https://cdn-icons-png.flaticon.com/512/1028/1028137.png" alt="Trophy Icon" width="384" height="384" />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <h4 className="text-2xl text-sky-400 font-bold mb-8">
                        Melhor Cash Game
                        </h4>

                        <p className="text-lg text-slate-300">
                        Participe de nossos jogos de cash game de poker online e desfrute da emoção! Oferecemos uma ampla variedade de jogos com diferentes limites de aposta, adequados para jogadores de todos os níveis. Nossa plataforma é segura, intuitiva e os jogos são justos. Não deixe de aproveitar nossos bônus e promoções exclusivas para aumentar suas chances de ganhar. Venha jogar e vivencie a emoção dos nossos jogos de cash game de poker online!    
                        </p>
                    </div>
                    <Image className="hidden md:inline-block w-48 h-48 md:w-48 rounded-full mx-auto" src="https://cdn-icons-png.flaticon.com/512/1028/1028137.png" alt="Trophy Icon" width="384" height="384" />
                </article>
                <div>
                </div>
            </div>
        </>
    );
}