import styles from "../styles/Contact.module.css";
import Menu from "../components/menu/menu";
import BannerHero from "../components/BannerHero/BannerHero";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Menu></Menu>
      <BannerHero></BannerHero>
      <ContactForm></ContactForm>
    </div>
  );
}
