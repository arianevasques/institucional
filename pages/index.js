import styles from "../styles/Home.module.css";
import Menu from "../components/menu/menu"

export default function Home() {
  return (
    <div className={styles.home}>
      <Menu></Menu>
      <h1>Home</h1>
    </div>
  );
}
