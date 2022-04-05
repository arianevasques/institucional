import styles from "../BigHeader/BigHeader.module.css";

export default function BigHeader() {
  return (
    <section className={styles.bigHeader}>
      <div className={styles.header}>
        <header>
          <h2>Where is Shine</h2>
          <p>
            Soluções de marketing técnicas e funcionais inovadoras para qualquer
            problema.
          </p>
        </header>
      </div>
    </section>
  );
}
