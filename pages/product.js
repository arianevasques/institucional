import styles from "../styles/Product.module.css";
import Menu from "../components/menu/menu"
import BigHeader from "../components/BigHeader/BigHeader";
import BestFeatures from "../components/BestFeatures/BestFeatures";


export default function Product() {
  return (
    <div className={styles.product}>
      <Menu></Menu>
      <BigHeader></BigHeader>

      <BestFeatures></BestFeatures>
    </div>
  );
}
