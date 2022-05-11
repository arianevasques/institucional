import styles from "../styles/Contact.module.css";
import Menu from "../components/menu/menu";
import BannerHero from "../components/BannerHero/BannerHero";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <Menu
        data={
          [
            {
              link: "/",
              name: "Home",
            },
            {
              link: "/about",
              name: "Sobre",
            },
            {
              link: "/product",
              name: "Produto",
            },
            {
              link: "/contact",
              name: "Contato",
            },
          ]
        }
      />
      <BannerHero></BannerHero>
      <p>
        Se você estiver pronto para conhecer nossa equipe e ver como podemos
        ajudar seu programa de marketing, preencha o formulário abaixo. Um dos
        membros da equipe se conectará com você dentro de 24 horas (ou menos)!
      </p>
      <div className="container">
        <ContactForm></ContactForm>
      </div>
      <div>
        <Footer
          title={"Uma agência de desenvolvimento WEB na América Latina"}
          email={"adoissofthouse@gmail.com"}
          copy={"&copy; 2022 A2 Soft House"}
          data={[
            {
              link: "/facebook",
              name: "Facebook",
            },
            {
              link: "/twitter",
              name: "Twitter",
            },
            {
              link: "/linkedin",
              name: "LinkedIn",
            },
            {
              link: "/instagram",
              name: "Instagram",
            },
          ]}
        />
      </div>
    </div>
  );
}
