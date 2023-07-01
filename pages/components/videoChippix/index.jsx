
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
            <video id="video" loop autoPlay width={400} height={400} >
                <source type="video/mp4" src="videoChippix.mp4"/>
            </video>

            </button>
        </div>
    )
}