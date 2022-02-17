import styles from "../styles/Contact.module.css";
import Menu from "../components/menu/menu";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Menu></Menu>
      <h1>Contact</h1>
    </div>
  );
}
