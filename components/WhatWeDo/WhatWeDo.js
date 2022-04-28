import { BsArrowRight } from "react-icons/bs";
import { WhatWeDoMain, Header, Box } from "../WhatWeDo/WhatWeDo.styled";

export default function WhatWeDo() {
  return (
    <WhatWeDoMain>
      <div>
        <Header>
          <h2>What We Do</h2>
          <div>
            <p>
              O Google Tradutor é um serviço virtual gratuito da subsidiaria
              Google da Alphabet Inc. de tradução instantânea de textos e
              websites. A empresa introduziu o software em 2006, inicialmente
              suportando apenas os idiomas inglês e árabe.
            </p>
            <div className="more">
              <a href="">
                More
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </div>
        </Header>

        <div className="content">
          <Box>
            <h3>Box 1</h3>
            <p>
              Texto dissertativo é um formato de escrita que busca defender uma
              ideia central a partir da argumentação, valendo-se, portanto, de
              opiniões e provas, como dados, levantamentos, estatísticas, fatos,
              exemplos e quaisquer outros elementos que sejam capazes de
              sustentar a tese apresentada.
            </p>
            <div className="learnMore">
              <a href="">
                Learn More
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </Box>
          <Box>
            <h3>Box 2</h3>
            <p>
              Texto dissertativo é um formato de escrita que busca defender uma
              ideia central a partir da argumentação, valendo-se, portanto, de
              opiniões e provas, como dados, levantamentos, estatísticas, fatos,
              exemplos e quaisquer outros elementos que sejam capazes de
              sustentar a tese apresentada.
            </p>
            <div className="learnMore">
              <a href="">
                Learn More
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </Box>
          <Box>
            <h3>Box 3</h3>
            <p>
              Texto dissertativo é um formato de escrita que busca defender uma
              ideia central a partir da argumentação, valendo-se, portanto, de
              opiniões e provas, como dados, levantamentos, estatísticas, fatos,
              exemplos e quaisquer outros elementos que sejam capazes de
              sustentar a tese apresentada.
            </p>
            <div className="learnMore">
              <a href="">
                Learn More
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </Box>
        </div>
      </div>
    </WhatWeDoMain>
  );
}
