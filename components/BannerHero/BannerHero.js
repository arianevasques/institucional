import styles from "../../styles/BannerHero.module.css";
import Link from "next/link";

export default function BannerHero() {
  return (
    <section className={styles.bannerHero}>
      <img src="./bannerhero.jpeg"></img>
      <div className={styles.heroText}>
        <h1>Título</h1>
        <p>Descrição curta</p>
        <Link href="/product">
          <a>clique aqui</a></Link>
      </div>
    </section>
  );
}
