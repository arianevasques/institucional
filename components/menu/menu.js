import { MenuMain } from "../Menu/Menu.styled";

export default function Menu(props) {
  const retornoDaAPI = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/about",
      name: "Sobre",
    },
    {
      link: "/product",
      name: "Produto",
    },
    {
      link: "/contact",
      name: "Contato",
    },
  ];

  return (
    <MenuMain>
      <ul>
        {retornoDaAPI.map((item, index) => {
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
