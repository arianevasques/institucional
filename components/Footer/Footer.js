// import styles from "../Footer/Footer.module.css";
import { FooterMain, Content, SocialLinks } from "../Footer/Footer.styled";

export default function Footer(props) {
  return (
    <FooterMain>
      <div className="container">
        <Content>
          <div className="infos">
            <h4>{props.title}</h4>
            <p>{props.email}</p>
            <p>{props.copy}</p>
          </div>

          <SocialLinks>
            <div className="links">
              <ul>
                <li>
                  <a href={""}>{props.socialMedia1}</a>
                </li>
                <li>
                  <a href={""}>{props.socialMedia2}</a>
                </li>
                <li>
                  <a href={""}>{props.socialMedia3}</a>
                </li>
                <li>
                  <a href={""}>{props.socialMedia4}</a>
                </li>
              </ul>
            </div>
          </SocialLinks>
        </Content>
      </div>
    </FooterMain>
  );
}
