import styles from "../styles/About.module.css";
import Menu from "../components/menu/menu";
import Description from "../components/Description/Description";
import Members from "../components/Members/Members";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div className={styles.about}>
      <Menu
        data={
          [
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
          ]
        }
      />
      <div className="container">
        <Description
          title={"Sala grande, equipe pequena"}
          content={
            "Impulsionada por uma equipe de liderança poderosa com mais de 30 anos de experiência em marketing estratégico e design criativo, a Big Room é uma agência de marketing digital de serviço completo construída com base em conhecimento e credibilidade conquistados com muito esforço. Com uma seleção diversificada de clientes em toda a América do Norte e uma coleção de especialistas de nicho para alavancar para cada projeto, podemos nos concentrar em criar a melhor experiência e entregar os melhores resultados."
          }
        />
      </div>
      <div className="container">
        <Members title={"Conheça nossa equipe"} />
      </div>
      <div>
        <Footer
          title={"Uma agência de desenvolvimento WEB na América Latina"}
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
    </div>
  );
}
