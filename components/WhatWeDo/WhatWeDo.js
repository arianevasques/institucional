import styles from "../WhatWeDo/WhatWeDo.module.css";
import { BsArrowRight } from "react-icons/bs";

export default function WhatWeDo() {
  return (
    <div className={styles.whatWeDo}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>What We Do</h2>
          <div className={styles.headerContainer}>
            <p>
              O Google Tradutor é um serviço virtual gratuito da subsidiaria
              Google da Alphabet Inc. de tradução instantânea de textos e
              websites. A empresa introduziu o software em 2006, inicialmente
              suportando apenas os idiomas inglês e árabe.
            </p>
            <div className={styles.more}>
              <a href="">More 
              <BsArrowRight className={styles.iconArrow}></BsArrowRight>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.box}>
            <h3>Box 1</h3>
            <p>
              Texto dissertativo é um formato de escrita que busca defender uma
              ideia central a partir da argumentação, valendo-se, portanto, de
              opiniões e provas, como dados, levantamentos, estatísticas, fatos,
              exemplos e quaisquer outros elementos que sejam capazes de
              sustentar a tese apresentada.
            </p>
            <div className={styles.learnMore}>
              <a href="">Learn More 
              <BsArrowRight className={styles.iconArrow}></BsArrowRight>
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <h3>Box 2</h3>
            <p>
              Texto dissertativo é um formato de escrita que busca defender uma
              ideia central a partir da argumentação, valendo-se, portanto, de
              opiniões e provas, como dados, levantamentos, estatísticas, fatos,
              exemplos e quaisquer outros elementos que sejam capazes de
              sustentar a tese apresentada.
            </p>
            <div className={styles.learnMore}>
              <a href="">Learn More 
              <BsArrowRight className={styles.iconArrow}></BsArrowRight>
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <h3>Box 3</h3>
            <p>
              Texto dissertativo é um formato de escrita que busca defender uma
              ideia central a partir da argumentação, valendo-se, portanto, de
              opiniões e provas, como dados, levantamentos, estatísticas, fatos,
              exemplos e quaisquer outros elementos que sejam capazes de
              sustentar a tese apresentada.
            </p>
            <div className={styles.learnMore}>
              <a href="">Learn More 
              <BsArrowRight className={styles.iconArrow}></BsArrowRight>
              </a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
