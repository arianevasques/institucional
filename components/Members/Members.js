
import styles from "../Members/Members.module.css";

export default function Members() {
  return (
    <div className={styles.membersTitle}>
      <div className={styles.boxMembers}>
        <div className={styles.box}>
          <img src="/kurt.jpeg" alt="Foto do membro da empresa"/> 
        </div>
        <div className={styles.box}>
          <img src="./amy.jpeg" alt="Foto do membro da empresa"/> 
        </div>
        <div className={styles.box}>
          <img src="./bob.jpeg" alt="Foto do membro da empresa"/> 
        </div>
        <div className={styles.box}>
          <img src="./janis.jpeg" alt="Foto do membro da empresa"/>
        </div>
        <div className={styles.box}>
          <img src="./jimmy.jpeg" alt="Foto do membro da empresa"/>
        </div> 
      </div>
    </div>
  );
}
