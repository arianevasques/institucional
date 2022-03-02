import Image from "next/image";
import styles from "../Members/Members.module.css";

export default function Members() {
  return (
    <div className={styles.members}>
      <div className={styles.membersTitle}>
        <h4>Conheça a equipe</h4>
      <div className={styles.boxMembers}>
        <div className={styles.box}>
          <Image src="/kurt.jpeg" alt="Foto do membro da empresa" width={325} height={350} />
          <p>Kurt Cobain - Vocalista do Nirvana e UX/UI</p>
        </div>
        <div className={styles.box}>
          <Image src="/amy.jpeg" alt="Foto do membro da empresa" width={325} height={350} />
          <p>Amy Winehouse - Cantora e Social Midia</p>
        </div>
        <div className={styles.box}>
          <Image src="/bob.jpeg" alt="Foto do membro da empresa" width={325} height={350} />
          <p>Bob Marley - Rei do reggae e Rh</p>
        </div>
        <div className={styles.box}>
          <Image src="/janis.jpeg" alt="Foto do membro da empresa" width={325} height={350} />
          <p>Janis Joplin - Cantora e Marketing</p>
        </div>
        <div className={styles.box}>
          <Image src="/jimmy.jpeg" alt="Foto do membro da empresa" width={325} height={350} />
          <p>Jimi Hendrix - Guitarstar e Full Stack Developer </p>
        </div> 
      </div>
      </div>
    </div>
  );
}
