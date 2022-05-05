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
      <Menu></Menu>
      <div className="container">
        <BigHeader
          title={"Where is Shine"}
          description={"Soluções de marketing técnicas e funcionais inovadoras para qualquer problema."}
        />
      </div>
      <HorizontalBanner image={'nebulosa.jpeg'} />
      <div className="container">
        <BestFeatures
        title={"Trazemos marcas para fora das sombras e para a luz"}
        content={"É raro encontrar profissionais de marketing que falem sua língua e conheçam as nuances do seu setor. Mas na Big Room, esse é o nosso maior patrimônio! Nossa equipe incomparável de profissionais demarketing, designers e desenvolvedores talentosos ajudou clientes de todos os tamanhos e setores a resolver seus desafios de marketing exclusivos e expandir seus negócios. Aqui estão algumas das áreas em que nos especializamos:"}
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
        <TitleTextImage></TitleTextImage>
      </div>
      <div className="container" style={{marginTop: 90}}>
        <WhatWeDo
          title={"Product Variables"}
          moreText={"Mais"}
          headerText={
            "O Google Tradutor é um serviço virtual gratuito da subsidiaria \r\n Google da Alphabet Inc. de tradução instantânea de textos e \r\n websites. A empresa introduziu o software em 2006, inicialmente \r\n suportando apenas os idiomas inglês e árabe."
          }
          box1Title={'Ttle Box 1'}
          box2Title={'Ttle Box 2'}
          box3Title={'Ttle Box 3'}
          box1Content={"Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veion ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          box2Content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          box3Content={"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
          boxMoreText={'Leia Mais'}
        />
      </div>
      <HorizontalBanner></HorizontalBanner>
      <div className="container">
        <TextTwoTextColums></TextTwoTextColums>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
