import styles from "../WhereWeShine/WhereWeShine.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function WhereWeShine() {
  return (
    <section className={styles.whereWeShine}>
      <div>
        <div className={styles.header}>
          <header>
            <h2>Where We Shine</h2>
          </header>
          <div className={styles.headerContainer}>
            <p>
              O Gerador de Texto Lorem Ipsum pode ser utilizado para você que
              está desenvolvendo seu projeto e precisa de texto aleatório para
              preencher os espaços e fazer testes. Assim, dá para testar o
              layout e a formatação antes de utilizar com conteúdo real.
            </p>
            <div className={styles.learnMore}>
              <a href="">
                Learn More
                <BsArrowRight className={styles.iconArrow}></BsArrowRight>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
