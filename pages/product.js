import styles from "../styles/Product.module.css";
import Menu from "../components/menu/menu";
import BigHeader from "../components/BigHeader/BigHeader";
import BestFeatures from "../components/BestFeatures/BestFeatures";
import HorizontalBanner from "../components/HorizontalBanner/HorizontalBanner";
import TitleTextImage from "../components/TitleTextImage/TitleTextImage";
import TextTwoTextColums from "../components/TextTwoTextColums/TextTwoTextColums";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import Footer from "../components/Footer/Footer";

export default function Product() {
  return (
    <div className={styles.product}>
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
        <BigHeader
          title={"Where is Shine"}
          description={
            "Soluções de marketing técnicas e funcionais inovadoras para qualquer problema."
          }
        />
      </div>
      <HorizontalBanner image={"nebulosa.jpeg"} />
      <div className="container">
        <BestFeatures
          title={"Trazemos marcas para fora das sombras e para a luz"}
          content={
            "É raro encontrar profissionais de marketing que falem sua língua e conheçam as nuances do seu setor. Mas na Big Room, esse é o nosso maior patrimônio! Nossa equipe incomparável de profissionais demarketing, designers e desenvolvedores talentosos ajudou clientes de todos os tamanhos e setores a resolver seus desafios de marketing exclusivos e expandir seus negócios. Aqui estão algumas das áreas em que nos especializamos:"
          }
          icon1={"icon-b2b-1.jpeg"}
          icon1Label={"B2B"}
          icon2={"icon-dynamics-1.jpeg"}
          icon2Label={"Microsoft Dynamics"}
          icon3={"icon-business-applications-1.jpeg"}
          icon3Label={"Aplicativos de negócios"}
          icon4={"icon-ecommerce-1.jpeg"}
          icon4Label={"comércio eletrônico"}
        />
      </div>
      <div className="container">
        <TitleTextImage
          title={"B2B"}
          content={
            " Você não encontrará outra agência com a vasta experiência em marketing B2B que temos. Nós prosperamos em nichos de mercado e entendemos rapidamente a terminologia e os processos de compra complicados. Veja como podemos ajudar sua empresa B2B a aumentar as vendas e o ROI:"
          }
          sectionTitle1={
            "Construção de relacionamento personalizado e de longo prazo."
          }
          sectionText1={
            "Construir engajamento e transformar oportunidades em clientes pode ser um desafio na indústria B2B. Podemos ajudar a simplificar esse processo e ajudá-lo a criar clientes para toda a vida."
          }
          sectionTitle2={"Marketing e comunicação de conteúdo B2B direcionado"}
          sectionText2={
            "Com uma profunda compreensão da jornada do comprador B2B, podemos ajudá-lo a personalizar sua estratégia de conteúdo e alinhar seus esforços para educar, atrair e converter as pessoas certas."
          }
          sectionTitle3={
            "Estratégias digitas orientadas a nichos e sites otimizados"
          }
          sectionText3={
            "Entender seu público e setor é apenas metade da batalha. Podemos ajudá-lo a identificar palavras-chave, melhorar a visibilidade online e atrair as empresas certas para o seu site."
          }
          image={"b2b.jpeg"}
        />
      </div>
      <div className="container" style={{ marginTop: 90 }}>
        <WhatWeDo
          title={"Product Variables"}
          moreText={"Mais"}
          headerText={
            "O Google Tradutor é um serviço virtual gratuito da subsidiaria \r\n Google da Alphabet Inc. de tradução instantânea de textos e \r\n websites. A empresa introduziu o software em 2006, inicialmente \r\n suportando apenas os idiomas inglês e árabe."
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
      <HorizontalBanner image={"nebulosa.jpeg"} />
      <div className="container">
        <TextTwoTextColums
          title={"Microsoft Dynamics"}
          colum1={
            "Então, você revende o Microsoft Dynamics 365 Business Central, Finanças, Suprimentos, Vendas, Aplicativos personalizados ou complementos – mas o que o diferencia? Para se destacar efetivamente no Microsoft Dynamics, você precisará de uma equipe familiarizada com os produtos, o público, o canal do parceiro e outros detalhes do mercado de nuvem em evolução. Nós somos essas pessoas."
          }
          colum2={
            "Com mais de 60 anos de experiência combinada em vendas, marketing e rede no canal da Microsoft, temos a experiência para fazer seu parceiro Dynamics ou ISV crescer. Desde conteúdo técnico e vertical atraente de ponta, conhecimento em ERP e aplicativos de negócios, know-how de envio de AppSource, até eventos do setor e insights internos sobre o próximo movimento do mercado - podemos ajudá-lo a crescer e ficar à frente da curva."
          }
        />
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
