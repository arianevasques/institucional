import styles from "../TitleTextImage/TitleTextImage.module.css";

export default function TitleTextImage() {
  return (
    <section className={styles.titleTextImage}>
        <div className={styles.containertxt}>
          <div className={styles.txt1}>
            <h3> B2B</h3>
            <p>
              Você não encontrará outra agência com a vasta experiência em
              marketing B2B que temos. Nós prosperamos em nichos de mercado e
              entendemos rapidamente a terminologia e os processos de compra
              complicados. Veja como podemos ajudar sua empresa B2B a aumentar
              as vendas e o ROI:
            </p>
            <h4>
              Construção de relacionamento personalizado e de longo prazo.
            </h4>
            <p>
              Construir engajamento e transformar oportunidades em clientes pode
              ser um desafio na indústria B2B. Podemos ajudar a simplificar esse
              processo e ajudá-lo a criar clientes para toda a vida.
            </p>
            <h4>Marketing e comunicação de conteúdo B2B direcionado</h4>
            <p>
              Com uma profunda compreensão da jornada do comprador B2B, podemos
              ajudá-lo a personalizar sua estratégia de conteúdo e alinhar seus
              esforços para educar, atrair e converter as pessoas certas.
            </p>
            <h4>Estratégias digitas orientadas a nichos e sites otimizados</h4>
            <p>
              Entender seu público e setor é apenas metade da batalha. Podemos
              ajudá-lo a identificar palavras-chave, melhorar a visibilidade
              online e atrair as empresas certas para o seu site.
            </p>
          </div>
          <div className={styles.imgb2b}>
            <img src="b2b.jpeg"></img>
          </div>
        </div>  
    </section>
  )
  }        