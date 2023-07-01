
export default function video() {
    const mutedOrUnmuted = () => {

        const video = document.getElementById('video');

        if (video.muted) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    }

    return(

        <div>
            <div id='videoDiv' className='container mx-auto p-4 md:p-0'>
                <h3 className="text-center text-4xl text-white font-bold mt-20 mb-8">
                Junte-se ao Clube de Poker da Brotherhood e Adquira Fichas Instantaneamente com o Aplicativo Chippix!
                </h3>
            </div>
            <div className="text-center pt-20 md:w-100 md:h-100">
                <button onClick={(e) => mutedOrUnmuted(e)}>
                <video id="video" src="videoChippix.mp4" autoPlay loop playsInline width={480} height={400} >
                </video>
                </button>
            </div>
        </div>
    )
}

// ver com o matheus sobre o auto play e sobre o tamanho quando for pro celular width e height