import Image from "next/image";
import Logo from "../../public/logo.svg";
import Play from "../../public/play.svg";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.logo}>
        <Image
          src={Logo}
          alt="Logo da Direção Concursos - Uma águia branca sob fundo preto"
          width={100}
          height={37}
          priority
        />
      </div>
      <div className={styles.playBox}>
        <Image src={Play} alt="Play" width={25} height={20} priority />
      </div>
    </div>
  );
}
