import styles from "../styles/Product.module.css";
import Menu from "../components/menu/menu"

export default function Product() {
  return (
    <div className={styles.product}>
      <Menu></Menu>
      <h1>Product</h1>
    </div>
  );
}
