import styles from "../styles/Home.module.css";
import Menu from "../components/menu/menu";
import BannerHero from "../components/BannerHero/BannerHero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhereWeShine from "../components/WhereWeShine/WhereWeShine";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Menu
        data={[
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
        ]}
      />
      <BannerHero></BannerHero>
      <div className="container">
        <WhatWeDo
          title={"Nossa Comunidade"}
          moreText={"Entrar"}
          headerText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          box1Title={"Ttle Box 1"}
          box2Title={"Ttle Box 2"}
          box3Title={"Ttle Box 3"}
          box1Content={
            "Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veion ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          box2Content={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          box3Content={
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
          boxMoreText={"Leia Mais"}
        />
      </div>
      <div className="container">
        <WhereWeShine
          title={"Onde estamos"}
          moreText={
            "O Gerador de Texto Lorem Ipsum pode ser utilizado para voc?? que \n\r est?? desenvolvendo seu projeto e precisa de texto aleat??rio para \n\r preencher os espa??os e fazer testes. Assim, d?? para testar o \n\r layout e a formata????o antes de utilizar com conte??do real."
          }
          learnMore={"Leia Mais"}
        />
      </div>
      <Footer
        title={"Uma ag??ncia de desenvolvimento WEB na Am??rica Latina"}
        email={"adoissofthouse@gmail.com"}
        copy={"&copy; 2022 A2 Soft House"}
        data={[
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
        ]}
      />
    </div>
  );
}
