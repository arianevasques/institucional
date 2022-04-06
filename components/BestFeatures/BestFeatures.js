import styles from "../BestFeatures/BestFeatures.module.css";

export default function BestFeatures() {
  return (
    <section className={styles.bestFeatures}>
      <div className={styles.txtFeatures}>
        <h3>Trazemos marcas para fora das sombras e para a luz</h3>
        <p>
          É raro encontrar profissionais de marketing que falem sua língua e
          conheçam as nuances do seu setor. Mas na Big Room, esse é o nosso
          maior patrimônio! Nossa equipe incomparável de profissionais de
          marketing, designers e desenvolvedores talentosos ajudou clientes de
          todos os tamanhos e setores a resolver seus desafios de marketing
          exclusivos e expandir seus negócios. Aqui estão algumas das áreas em
          que nos especializamos:
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.specialtiesIcon}>
          <img src="icon-b2b-1.jpeg" />
          <p>B2B</p>
        </div>
        <div className={styles.specialtiesIcon}>
          <img src="icon-dynamics-1.jpeg" />
          <p>Microsoft Dynamics</p>
        </div>
        <div className={styles.specialtiesIcon}>
          <img src="icon-business-applications-1.jpeg" />
          <p>Aplicativos de negócios</p>
        </div>
        <div className={styles.specialtiesIcon}>
          <img src="icon-ecommerce-1.jpeg" />
          <p>comércio eletrônico</p>
        </div>
      </div>
    </section>
  );
}
