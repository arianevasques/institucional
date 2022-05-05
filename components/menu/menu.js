import Link from "next/link";
import { MenuMain } from "../Menu/Menu.styled";

export default function Menu(props) {
  return (
    <MenuMain>
      <ul>
        <li>
          <Link href="/">
            <a>{props.home}</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>{props.about}</a>
          </Link>
        </li>
        <li>
          <Link href="/product">
            <a>{props.product}</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>{props.contact}</a>
          </Link>
        </li>
      </ul>
    </MenuMain>
  );
}
