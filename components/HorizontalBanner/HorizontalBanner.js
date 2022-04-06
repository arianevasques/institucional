import styles from "../HorizontalBanner/HorizontalBanner.module.css";

export default function HorizontalBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.imgBanner}>
        <img src="nebulosa.jpeg"></img>
      </div>
    </section>
  );
}
