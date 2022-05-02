import styles from "../styles/Product.module.css";
import Menu from "../components/menu/menu";
import BigHeader from "../components/BigHeader/BigHeader";
import BestFeatures from "../components/BestFeatures/BestFeatures";
import HorizontalBanner from "../components/HorizontalBanner/HorizontalBanner";
import TitleTextImage from "../components/TitleTextImage/TitleTextImage";
import TextTwoTextColums from "../components/TextTwoTextColums/TextTwoTextColums";
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
