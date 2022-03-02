import styles from "../styles/About.module.css";
import Menu from "../components/menu/menu";
import Description from "../components/Description/Description";
import Members from "../components/Members/Members";

export default function About() {
  return (
    <div className={styles.about}>
      <Menu></Menu>
      <div className="container">
        <Description></Description>
      </div>
      <div className="container">
        <Members></Members>
      </div>
    </div>
  );
}
