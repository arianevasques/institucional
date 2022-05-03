import Link from "next/link";
import { MenuMain } from "../Menu/Menu.styled";

export default function Menu() {
  return (
    <MenuMain>
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
    </MenuMain>
  );
}
