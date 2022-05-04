import { BsArrowRight } from "react-icons/bs";
import { WhatWeDoMain, Header, Box } from "../WhatWeDo/WhatWeDo.styled";

export default function WhatWeDo(props) {
  return (
    <WhatWeDoMain>
      <div>
        <Header>
          <h2>{props.title}</h2>
          <div>
            <p>{props.headerText}</p>
            <div className="more">
              <a href="">
                {props.moreText}
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </div>
        </Header>

        <div className="content">
          <Box>
            <h3>{props.box1Title}</h3>
            <p>{props.box1Content}</p>
            <div className="learnMore">
              <a href="">
                {props.boxMoreText}
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </Box>
          <Box>
            <h3>{props.box2Title}</h3>
            <p>{props.box2Content}</p>
            <div className="learnMore">
              <a href="">
                {props.boxMoreText}
                <div className="iconArrow">
                  <BsArrowRight></BsArrowRight>
                </div>
              </a>
            </div>
          </Box>
          <Box>
            <h3>{props.box3Title}</h3>
            <p>{props.box3Content}</p>
            <div className="learnMore">
              <a href="">
                {props.boxMoreText}
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
