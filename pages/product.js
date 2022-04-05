import styles from "../styles/Product.module.css";
import Menu from "../components/menu/menu"
import BigHeader from "../components/BigHeader/BigHeader";


export default function Product() {
  return (
    <div className={styles.product}>
      <Menu></Menu>
      <h1>Product</h1>
      <BigHeader></BigHeader>
    </div>
  );
}
