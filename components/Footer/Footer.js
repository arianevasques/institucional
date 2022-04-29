// import styles from "../Footer/Footer.module.css";
import { FooterMain, Content, SocialLinks } from "../Footer/Footer.styled";


export default function Footer() {
  return (
    <FooterMain>
      <div className="container">
        <Content>
          <div className="infos">
            <h4>Uma agência de desenvolvimento WEB na América Latina</h4>
            <p>adoissofthouse@gmail.com</p>
            <p>&copy; 2022 A2 Soft House</p>
          </div>

          <SocialLinks>
            <div className="links">
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
          </SocialLinks>
        </Content>
      </div>
    </FooterMain>
  );
}
