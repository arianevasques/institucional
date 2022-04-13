import styles from "../Footer/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.contentFooter}>
          <div className={styles.infos}>
            <h4>Uma agência de desenvolvimento WEB na América Latina</h4>
            <p>adoissofthouse@gmail.com</p>
            <p>&copy; 2022 A2 Soft House</p>
          </div>

          <div className={styles.socialLinks}>
            <div className={styles.links}>
              <ul>
                <li>
                  <a href="">LinkedIn.</a>
                </li>
                <li>
                  <a href="">Facebook.</a>
                </li>
                <li>
                  <a href="">Instagram.</a>
                </li>
                <li>
                  <a href="">Twitter.</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
