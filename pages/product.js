import styles from "../styles/Product.module.css";
import Menu from "../components/menu/menu"
import BigHeader from "../components/BigHeader/BigHeader";
import BestFeatures from "../components/BestFeatures/BestFeatures";
import HorizontalBanner from "../components/HorizontalBanner/HorizontalBanner";
import TitleTextImage from "../components/TitleTextImage/TitleTextImage";
import TextTwoTextColums from "../components/TextTwoTextColums/TextTwoTextColums";


export default function Product() {
  return (
    <div className={styles.product}>
      <Menu></Menu>
      <BigHeader></BigHeader>
      <HorizontalBanner></HorizontalBanner>
      <BestFeatures></BestFeatures>
      <TitleTextImage></TitleTextImage>
      <HorizontalBanner></HorizontalBanner>
      <TextTwoTextColums></TextTwoTextColums>
    </div>
  );
}
