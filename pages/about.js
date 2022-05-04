import styles from "../styles/About.module.css";
import Menu from "../components/menu/menu";
import Description from "../components/Description/Description";
import Members from "../components/Members/Members";
import Footer from "../components/Footer/Footer";

export default function About() {
  return (
    <div className={styles.about}>
      <Menu></Menu>
      <div className="container">
        <Description
          title={"Sala grande, equipe pequena"}
          content={
            "Impulsionada por uma equipe de liderança poderosa com mais de 30 anos de experiência em marketing estratégico e design criativo, a Big Room é uma agência de marketing digital de serviço completo construída com base em conhecimento e credibilidade conquistados com muito esforço. Com uma seleção diversificada de clientes em toda a América do Norte e uma coleção de especialistas de nicho para alavancar para cada projeto, podemos nos concentrar em criar a melhor experiência e entregar os melhores resultados."
          }
          
        />
      </div>
      <div className="container">
        <Members></Members>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
