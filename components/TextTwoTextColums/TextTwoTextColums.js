import styles from "../TextTwoTextColums/TextTwoTextColums.module.css";

export default function TextTwoTextColums() {
  return (
    <section className={styles.txtColums}>
        <div className={styles.container2}>
          <div className={styles.txt1}>
            <h3> Microsoft Dynamics</h3>
          </div>
        <div className={styles.twoColums}>  
          <div className={styles.txt2}>
            <p>
              Então, você revende o Microsoft Dynamics 365 Business Central,
              Finanças, Suprimentos, Vendas, Aplicativos personalizados ou
              complementos – mas o que o diferencia? Para se destacar
              efetivamente no Microsoft Dynamics, você precisará de uma equipe
              familiarizada com os produtos, o público, o canal do parceiro e
              outros detalhes do mercado de nuvem em evolução. Nós somos essas
              pessoas.
            </p>
          </div>
          <div className={styles.txt3}>
            <p>
              Com mais de 60 anos de experiência combinada em vendas, marketing
              e rede no canal da Microsoft, temos a experiência para fazer seu
              parceiro Dynamics ou ISV crescer. </p>
            <p>  
              Desde conteúdo técnico e vertical atraente de ponta, conhecimento em ERP e aplicativos de
              negócios, know-how de envio de AppSource, até eventos do setor e
              insights internos sobre o próximo movimento do mercado - podemos
              ajudá-lo a crescer e ficar à frente da curva.
            </p>
          </div>
        </div>
      </div>  
    </section>
  );
}
