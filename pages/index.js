import styles from "../styles/Home.module.css";
import Menu from "../components/menu/menu"
import BannerHero from "../components/BannerHero/BannerHero";

export default function Home() {
  return (
    <div className={styles.home}>
      <Menu></Menu>
      <BannerHero></BannerHero>
    </div>
  );
}
