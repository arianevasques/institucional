// import styles from "../Footer/Footer.module.css";
import { FooterMain, Content, SocialLinks } from "../Footer/Footer.styled";

export default function Footer(props) {
  const retornoDaAPI = [
    {
      link: "/facebook",
      name: "Facebook",
    },
    {
      link: "/twitter",
      name: "Twitter",
    },
    {
      link: "/linkedin",
      name: "LinkedIn",
    },
    {
      link: "/instagram",
      name: "Instagram",
    },
  ];

  return (
    <FooterMain>
      <div className="container">
        <Content>
          <div className="infos">
            <h4>{props.title}</h4>
            <p>{props.email}</p>
            <p>{props.copy}</p>
          </div>

          <SocialLinks>
            <ul>
              {retornoDaAPI.map((itemDaArray, posicaoDoItemNaArray) => {
                return (
                  <li key={posicaoDoItemNaArray}>
                    <a href={itemDaArray.link}>{itemDaArray.name}</a>
                  </li>
                );
              })}
            </ul>
          </SocialLinks>
        </Content>
      </div>
    </FooterMain>
  );
}
{
  /* <div className="links">
              <ul>

                <li>
                  <a href={""}>{props.socialMedia2}</a>
                </li>
                <li>
                  <a href={""}>{props.socialMedia3}</a>
                </li>
                <li>
                  <a href={""}>{props.socialMedia4}</a>
                </li>
              </ul>
            </div> */
}
