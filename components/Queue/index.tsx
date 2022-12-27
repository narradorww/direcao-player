import styles from "./Queue.module.css";
import Image from "next/image";

export default function Queue(props: { data: any[] }) {
  return (
    <div className={styles.queue}>
      <div className={styles.title}>
        <h3>Próximos Vídeos</h3>
      </div>

      {props.data.map((item, index) => {
        return (
          <div className={styles.video} key={index}>
            <div className={styles.videoChannel}>
              <div className={styles.videoThumbnail}>
                <Image
                  src={item.snippet.thumbnails.default.url}
                  alt={item.snippet.title}
                  width={item.snippet.thumbnails.default.width}
                  height={item.snippet.thumbnails.default.height}
                />
              </div>
              <h3 className={styles.videoTitle}>{item.snippet.title}</h3>
            </div>
            <p>{item.snippet.channelTitle}</p>
          </div>
        );
      })}
    </div>
  );
}
