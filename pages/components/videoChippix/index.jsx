
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
        <div className="text-center">
            <button onClick={(e) => mutedOrUnmuted(e)}>
            <video id="video" playsInline src="videoChippix.mp4" loop autoPlay width={400} height={400} >
            </video>

            </button>
        </div>
    )
}