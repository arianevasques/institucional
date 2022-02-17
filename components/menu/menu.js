import Link from "next/link";
import styles from "../../styles/Menu.module.css";

export default function Menu() {
  return (
    <div className={styles.menu}>
      Menu
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>Produto</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
