import Link from "next/link";
import styles from "../../styles/Menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.menu}>
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
          <Link href="/product">
            <a>Produto</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
