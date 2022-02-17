import styles from "../styles/About.module.css";
import Menu from "../components/menu/menu";

export default function About() {
  return (
    <div className={styles.about}>
      <Menu></Menu>
      <h1>About</h1>
    </div>
  );
}
