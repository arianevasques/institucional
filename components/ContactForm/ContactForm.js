import {
  ContactFormMain,
  Content,
  Description,
  Formulary,
  InputLine,
  Select,
  Message,
  Send,
} from "../ContactForm/ContactForm.styled";

export default function ContactForm() {
  return (
    <ContactFormMain>
      <Content>
        <Description>
          <p>
            Se você estiver pronto para conhecer nossa equipe e ver como podemos
            ajudar seu programa de marketing, preencha o formulário abaixo. Um
            dos membros da equipe se conectará com você dentro de 24 horas (ou
            menos)!
          </p>
        </Description>
        <Formulary>
          <ul>
            <li>
              <InputLine>
                <input type="text" name="nome" placeholder="Seu nome*"></input>
                <input
                  type="text"
                  name="email"
                  placeholder="Seu email*"
                ></input>
              </InputLine>
            </li>
            <li>
              <InputLine>
                <input
                  type="number"
                  name="telefone"
                  placeholder="Seu telefone"
                ></input>
                <input
                  type="text"
                  name="company"
                  placeholder="Companhia"
                ></input>
              </InputLine>
            </li>
            <li>
              <Select>
                <select name="select">
                  <option value="projectType" selected>
                    Project Type
                  </option>
                  <option value="contentCreation">Content Creation</option>
                  <option value="website">Website</option>
                  <option value="branding">Branding</option>
                  <option value="businessApplication">
                    Business Application
                  </option>
                </select>
                <select name="budget">
                  <option value="projectBudget" selected>
                    Project Type
                  </option>
                  <option>Abaixo de 10k</option>
                  <option>10 - 20k</option>
                  <option>20 - 35k</option>
                  <option>Mais de 35k</option>
                </select>
              </Select>
            </li>
            <Message>
              <textarea
                name="mensagem"
                rows="7"
                cols="110"
                placeholder="Mensagem"
              ></textarea>
            </Message>
            <Send>
              <button>Enviar</button>
            </Send>
          </ul>
        </Formulary>
      </Content>
    </ContactFormMain>
  );
}
