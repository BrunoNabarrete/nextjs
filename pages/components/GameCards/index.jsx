import Image from 'next/image'
import texasHold from '../../../public/TexasPoker.png'
import omaha from '../../../public/Omaha.png'
import plo from '../../../public/Plo6Poker.png'
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const data = [
    {
        id:1,
        image: texasHold,
        title: "Texas Hold'em",
        description: `Texas Hold'em Poker é um jogo de cartas emocionante e popular que pode ser jogado com dois a dez jogadores. Aqui está um resumo rápido de como jogar Texas Hold em Poker:As apostas iniciais: O jogo começa com cada jogador colocando uma aposta inicial chamada blind pequena ou grande. Distribuição de cartas: Cada jogador recebe duas cartas conhecidas como cartas de buraco ou hole cards. Pré-flop: O jogador à esquerda do jogador da grande blind começa a ação. Os jogadores podem optar por igualar match a aposta da grande blind, aumentar raise ou desistir fold de suas mãos. O flop: Depois que todas as apostas pré-flop são concluídas, o dealer coloca três cartas comunitárias na mesa, conhecidas como flop. Os jogadores podem usar essas cartas, juntamente com suas cartas de buraco, para formar uma mão de poker de cinco cartas. O turn: Depois que a rodada de apostas do flop é concluída, o dealer adiciona uma quarta carta comunitária na mesa, conhecida como turn. O river: Depois que a rodada de apostas do turn é concluída, o dealer adiciona a quinta e última carta comunitária na mesa,conhecida como river. A última rodada de apostas: Após a carta do river ser distribuída, ocorre a última rodada de apostas. Os jogadores podem apostar, aumentar, igualar ou desistir. O showdown: Se mais de um jogador permanecer após a última rodada de apostas, as mãos são reveladas e o jogador com a melhor mão de poker de cinco cartas vence o pote. Se um jogador fizer uma aposta que os outros jogadores não igualarem, ele ganha o pote sem ter que mostrar suas cartas. Espero que isso ajude você a entender o básico do jogo de Texas Hold em Poker. Boa sorte e divirta-se!`,
    },
    {   
        id:2,
        image: omaha,
        title: 'Omaha',
        description: `O Omaha Poker é uma empolgante variação do jogo de cartas poker. Assim como o poker tradicional, é jogado com um baralho padrão de 52 cartas, mas tem algumas diferenças significativas nas regras. O jogo pode ser jogado por duas a dez pessoas, o que proporciona uma dinâmica animada. O objetivo do Omaha Poker é conquistar o pote, que é o dinheiro apostado pelos jogadores durante a partida. No início do jogo, cada jogador recebe um conjunto de quatro cartas pessoais, conhecidas como "cartas de mão". Em seguida, cinco cartas comunitárias são colocadas na mesa. O desafio está em usar exatamente duas das cartas de mão e três das cartas comunitárias para formar a melhor combinação possível de cinco cartas. Após a distribuição das cartas e a revelação das três primeiras cartas comunitárias, ocorre uma rodada de apostas. Os jogadores têm a oportunidade de apostar, aumentar ou desistir, com base em suas mãos e nas possibilidades que enxergam. Em seguida, uma quarta carta comunitária é revelada, seguida por outra rodada de apostas. Por fim, a quinta e última carta comunitária é revelada, e uma última rodada de apostas ocorre. No desfecho do jogo, a mão do jogador com a melhor combinação de cinco cartas leva o pote. A classificação das mãos segue as mesmas regras do poker tradicional, onde as combinações vencedoras são determinadas por sua força, desde um par até uma sequência real (royal flush). O Omaha Poker oferece uma experiência emocionante e estratégica, exigindo dos jogadores um bom conhecimento das probabilidades, leitura de mãos e habilidades de tomada de decisão. É uma opção popular entre os entusiastas do poker, que buscam desafios adicionais e a oportunidade de ganhar grandes prêmios em dinheiro.`,
    },
    {   
        id:3,
        image: plo,
        title: 'PLO6',
        description: `PLO6, também conhecido como Pot-Limit Omaha 6-handed, é uma variante do poker que é jogada com um baralho de 52 cartas. É uma variação do popular jogo de poker Texas Hold em, mas com algumas diferenças significativas nas regras e na dinâmica do jogo. A principal diferença entre o PLO6 e o Texas Hold em é o fato de que cada jogador recebe quatro cartas individuais em vez de duas. Os jogadores usam exatamente duas de suas quatro cartas individuais, juntamente com três cartas comunitárias, para formar a melhor mão possível de cinco cartas. Isso significa que há mais combinações possíveis de mãos e o jogo tende a ser mais complexo e estratégico. Outra diferença importante é que no PLO6, como o nome sugere, são permitidos no máximo seis jogadores por mesa, enquanto no Texas Hold em geralmente são permitidos nove ou dez jogadores. Com menos jogadores, a ação é mais rápida e agressiva, e a posição na mesa torna-se ainda mais crucial. A estrutura de apostas no PLO6 é chamada de Pot-Limit, o que significa que os jogadores podem apostar ou aumentar até o valor do pote atual. Isso adiciona uma dimensão estratégica ao jogo, pois os jogadores devem considerar cuidadosamente o tamanho de suas apostas em relação ao tamanho do pote. O objetivo do PLO6 é o mesmo que em qualquer outra variante de poker: ganhar o pote acumulando as fichas dos outros jogadores. Isso pode ser feito tendo a melhor mão no showdown (quando todas as cartas são reveladas) ou fazendo com que os outros jogadores desistam durante o jogo, usando táticas como blefes e apostas agressivas. Devido à sua natureza complexa e estratégica, o PLO6 é um jogo muito popular entre jogadores experientes e profissionais de poker. Requer uma compreensão sólida das probabilidades, leitura de mãos e habilidades de gestão de bancas. Aqueles que dominam o PLO6 geralmente desfrutam de grandes desafios e oportunidades para ganhar grandes quantias de dinheiro.`
    }
];

export default function GameCards () {
    const refs = React.useRef(data.map(() => React.createRef()));
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [selectedId, setSelectedId] = React.useState(null);

    const handleClickOpen = (scrollType, id) => () => {
    setOpen(true);
    setScroll(scrollType);
    setSelectedId(id);
    };

    const handleClose = () => {
    setOpen(false);
    };
    const descriptionElementRef = React.useRef();
    React.useEffect(() => {
        if (open) {
            let { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
            descriptionElement.focus();
        }
    }
    }, [open]);


    return (
        <div id="jogos" className='container mx-auto p-4 md:p-0'>
            <h3 className='text-center text-4xl text-white font-bold mt-20 mb-8'>
                MODALIDADES DE JOGO
            </h3>

            <p className="text-center text-md md:text-xl text-white">
                É possível jogar a sua modalidade favorita jogando conosco. Se você ainda não conhece todas, veja abaixo algumas delas.
            </p>

            <div className='flex-nowrap md:flex mt-8'>
                {data.map((x, index) => (
                    <div key={x.title} id={x.id}  ref={refs.current[index]} className="bg-white mb-8 md:mb-0 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-2 mr-2">
                        <a href="#">
                            <Image className="rounded-t-lg w-full aspect-video" src={x.image} alt={x.title} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{x.title}</h5>
                            </a>
                            <p  className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {x.description.slice(0, 200)}...
                            </p>
                            <button onClick={handleClickOpen('paper', x.id)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-green-true hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-true dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Saiba mais
                                <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                scroll={scroll}
                                aria-labelledby="scroll-dialog-title"
                                aria-describedby="scroll-dialog-description"
                            >
                            <DialogTitle id="scroll-dialog-title">{data.find((item) => item.id === selectedId)?.title}</DialogTitle>
                            <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                                {data.find((item) => item.id === selectedId)?.description}
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose}>Fechar</Button>
                            </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}