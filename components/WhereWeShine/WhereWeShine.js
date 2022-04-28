import { WhereWeShineMain, Header } from "../WhereWeShine/WhereWeShine.styled";
import { BsArrowRight } from "react-icons/bs";

export default function WhereWeShine() {
  return (
    <WhereWeShineMain>
      <div>
        <Header>
          <h2>Where We Shine</h2>
          <div className="txt1">
            <p>
              O Gerador de Texto Lorem Ipsum pode ser utilizado para você que
              está desenvolvendo seu projeto e precisa de texto aleatório para
              preencher os espaços e fazer testes. Assim, dá para testar o
              layout e a formatação antes de utilizar com conteúdo real.
            </p>
            <div className="learnMore">
              <a href="">
                Learn More
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </div>
        </Header>
      </div>
    </WhereWeShineMain>
  );
}
