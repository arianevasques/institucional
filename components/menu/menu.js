import { MenuMain } from "../Menu/Menu.styled";

export default function Menu(props) {

  return (
    <MenuMain>
      <ul>
        {props.data.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </MenuMain>
  );
}
