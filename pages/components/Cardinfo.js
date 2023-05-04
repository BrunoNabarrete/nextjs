import Image from 'next/image'
import texasHold from '../../public/texashold.jpeg'
import omaha from '../../public/omaha.jpeg'

export default function cardInfo () {
    return (
        <div className='flex justify-center'>

        <div className='flex flex-nowrap flex space-x-52 '>
            <div class="basics-1/2 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <Image class="rounded-t-lg w-full aspect-video" src={texasHold} alt="texasHold" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Texas Hold em</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Texas Hold em Poker é um jogo de cartas emocionante e popular que pode ser jogado com dois a dez jogadores. Aqui está um resumo rápido de como jogar Texas Hold em Poker:

                As apostas iniciais: O jogo começa com cada jogador colocando uma aposta inicial chamada blind pequena ou grande.

                Distribuição de cartas: Cada jogador recebe duas cartas conhecidas como cartas de buraco ou hole cards.

                Pré-flop: O jogador à esquerda do jogador da grande blind começa a ação. Os jogadores podem optar por igualar match a aposta da grande blind, aumentar raise ou desistir fold de suas mãos.

                O flop: Depois que todas as apostas pré-flop são concluídas, o dealer coloca três cartas comunitárias na mesa, conhecidas como flop. Os jogadores podem usar essas cartas, juntamente com suas cartas de buraco, para formar uma mão de poker de cinco cartas.

                O turn: Depois que a rodada de apostas do flop é concluída, o dealer adiciona uma quarta carta comunitária na mesa, conhecida como turn.

                O river: Depois que a rodada de apostas do turn é concluída, o dealer adiciona a quinta e última carta comunitária na mesa,conhecida como river.

                A última rodada de apostas: Após a carta do river ser distribuída, ocorre a última rodada de apostas. Os jogadores podem apostar, aumentar, igualar ou desistir.

                O showdown: Se mais de um jogador permanecer após a última rodada de apostas, as mãos são reveladas e o jogador com a melhor mão de poker de cinco cartas vence o pote. Se um jogador fizer uma aposta que os outros jogadores não igualarem, ele ganha o pote sem ter que mostrar suas cartas.

                Espero que isso ajude você a entender o básico do jogo de Texas Hold em Poker. Boa sorte e divirta-se!</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Saiba mais
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
        
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <Image class="rounded-t-lg w-full aspect-video" src={omaha} alt="Omaha poker" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Omaha </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">O Omaha poker é uma variação do jogo de cartas poker. É jogado com um baralho de 52 cartas e pode ser jogado por duas a dez pessoas.

                    O objetivo do jogo é ganhar o pote, que é o dinheiro apostado pelos jogadores durante a partida.

                    Cada jogador recebe quatro cartas de mão, e cinco cartas comunitárias são colocadas na mesa. Os jogadores usam duas cartas de mão e três cartas comunitárias para formar a melhor mão de cinco cartas possível.

                    Uma rodada de apostas acontece após a distribuição das cartas e após cada uma das três primeiras cartas comunitárias serem reveladas. Uma última rodada de apostas acontece após a quinta e última carta comunitária ser revelada.

                    O jogador com a melhor mão de cinco cartas ganha o pote. A classificação das mãos é a mesma do poker tradicional.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Saiba mais
                        <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            </div>
        </div>
        

    )
}