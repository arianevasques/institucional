import styles from "../../styles/BannerHero.module.css";

export default function BannerHero() {
  return (
    <section className={styles.bannerHero}>
      <img src="./bannerhero.jpeg"></img>
      <div className={styles.heroText}>
        <h1>Título</h1>
        <p>Descrição curta</p>
        <a href="/product">clique aqui</a>
      </div>
    </section>
  );
}
