import styles from "../ContactForm/ContactForm.module.css";

export default function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <div className={styles.row}>
        <div className={styles.txtTitle}>
          <p>
            Se você estiver pronto para conhecer nossa equipe e ver como podemos
            ajudar seu programa de marketing, preencha o formulário abaixo. Um
            dos membros da equipe se conectará com você dentro de 24 horas (ou
            menos)!
          </p>
        </div>
         <form className={styles.formulary}>
          <ul>
            <li className={styles.txt}>
              <input
                type="text"
                name="nome"
                className={styles.txtname}
                placeholder="Seu nome*"
              ></input>
              <input
                type="text"
                name="email"
                className={styles.txtemail}
                placeholder="Seu email*"
              ></input>
            </li>
            <li className={styles.txt}>
              <input
                type="number"
                name="telefone"
                className={styles.tel}
                placeholder="Seu telefone"
              ></input>
              <input
                type="text"
                name="company"
                className={styles.company}
                placeholder="Companhia"
              ></input>
            </li>
            <li className={styles.select}>
              <select name="select" className={styles.content}>
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
              <select name="budget" className={styles.budget}>
                <option value="projectBudget" selected>
                  Project Type
                </option>
                <option>Abaixo de 10k</option>
                <option>10 - 20k</option>
                <option>20 - 35k</option>
                <option>Mais de 35k</option>
              </select>
            </li>
            <li className={styles.mensagem}>
              <textarea
                className={styles.txtmsg}
                name="mensagem"
                rows="7"
                cols="110"
                placeholder="Mensagem"
              ></textarea>
            </li>
            <button className={styles.send}>Enviar</button>
          </ul>
        </form> 
      </div>
    </div>
  );
}
