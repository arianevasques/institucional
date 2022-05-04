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
        <BigHeader></BigHeader>
      </div>
      <HorizontalBanner></HorizontalBanner>
      <div className="container">
        <BestFeatures></BestFeatures>
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
