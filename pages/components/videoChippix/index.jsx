
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
        <div className="text-center pt-20">
            <button onClick={(e) => mutedOrUnmuted(e)}>
            <video id="video" src="videoChippix.mp4" autoPlay loop playsInline width={480} height={400} >
            </video>
            </button>
        </div>
    )
}