import { useRef, useState } from 'react';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';
import classes from './video.module.scss';

export default function Video() {
    const ref = useRef();
    const [paused, setPaused] = useState(false);
    const [muted, setMuted] = useState(true);

    const togglePause = () => {
        setPaused(s => !s);

        if (paused) ref.current?.play();
        else ref.current?.pause();
    };
    const toggleMuted = () => setMuted(s => !s);

    return(
        <div id='videoDiv' className="py-20 px-10 md:px-20 mt-20 md:mb-12 bg-slate-800">
            <div className="container mx-auto items-center flex-wrap flex md:flex-nowrap justify-center">
                <div className={classes.videoContainer}>
                    <video ref={ref} src="videoChippix.mp4" autoplay='autoplay' muted={muted} loop playsinline width={480} height={400} />

                    <div className={classes.videoControls}>
                        {/** Play State controls */}
                        {paused && (
                            <IconButton onClick={togglePause} size='large'>
                                <PlayArrowIcon />
                            </IconButton>
                        )}
                        {!paused && (
                            <IconButton onClick={togglePause} size='large'>
                                <PauseIcon />
                            </IconButton>
                        )}

                        {/** Volume controls */}
                        {muted && (
                            <IconButton onClick={toggleMuted} size='large'>
                                <VolumeUpIcon />
                            </IconButton>
                        )}
                        {!muted && (
                            <IconButton onClick={toggleMuted} size='large'>
                                <VolumeOffIcon />
                            </IconButton>
                        )}
                    </div>
                </div>
                <div className="mt-12 md:mt-0 md:ml-12 md:p-8">
                    <h3 className="text-left text-4xl text-white font-bold mb-8">
                        Adquira fichas instantaneamente com o Chippix!
                    </h3>
                    <p className="text-xl text-gray-400 mb-6">Comece a jogar com o Clube de Poker Brotherhood e faça suas compras ou retiradas de fichas sem atrasos.</p>
                    <a target='_blank' href="https://web.whatsapp.com/send?phone=5511988362072&text=Olá%20vim%20pelo%20site%20para%20fazer%20parte%20do%20clube%20e%20cadastrar%20no%20chippix!!!" className="inline-flex items-center px-4 py-3 text-lg font-medium text-center text-white rounded-lg bg-fuchsia-600 hover:bg-fuchsia-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        COMECE AGORA
                    </a>
                </div>
            </div>
        </div>
    );
}

// ver com o matheus sobre o auto play e sobre o tamanho quando for pro celular width e height