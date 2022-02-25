import styles from "../Description/Description.module.css";

export default function Description() {
  return (
    <div className={styles.row}>
      <div className={styles.descriptionTitle}>
        <h2>Sala grande, equipe pequena</h2>
      </div>
      <div className={styles.descriptionAbout}>
        <p>
          Impulsionada por uma equipe de liderança poderosa com mais de 30 anos
          de experiência em marketing estratégico e design criativo, a Big Room
          é uma agência de marketing digital de serviço completo construída com
          base em conhecimento e credibilidade conquistados com muito esforço.
          Com uma seleção diversificada de clientes em toda a América do Norte e
          uma coleção de especialistas de nicho para alavancar para cada
          projeto, podemos nos concentrar em criar a melhor experiência e
          entregar os melhores resultados.
        </p>
      </div>
    </div>
  );
}
