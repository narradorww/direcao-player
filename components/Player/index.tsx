import ReactPlayer from "react-player";
import styles from './Player.module.css';

type PlayerProps = {
    videoURL: string;
    onEnd: () => void;
}


export default function Player(props: PlayerProps){
    const videoURL = "https://www.youtube.com/watch?v=" + props.videoURL;
    return (
        <div className={styles.player}>
            <ReactPlayer
                url={videoURL}
                playing={true}
                onEnded={props.onEnd}
                width="90vmin"
                height="40vh"
                config={{
                    youtube: {
                        playerVars: { 
                            modestbranding: 1,
                            controls: 2,
                            autoplay: 1,
                            showinfo: 0,
                            

                         }
                    }
                }}
                />
         </div>
    )
}