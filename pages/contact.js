import styles from "../styles/Contact.module.css";
import Menu from "../components/menu/menu";
import BannerHero from "../components/BannerHero/BannerHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Menu></Menu>
      <BannerHero></BannerHero>
      <div className="container">
        <ContactForm></ContactForm>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}
