import { WhereWeShineMain, Header } from "../WhereWeShine/WhereWeShine.styled";
import { BsArrowRight } from "react-icons/bs";

export default function WhereWeShine(props) {
  return (
    <WhereWeShineMain>
      <div>
        <Header>
          <h2>{props.title}</h2>
          <div className="txt1">
            <p>
              {props.moreText}
            </p>
            <div className="learnMore">
              <a href="">
                {props.learnMore}
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
