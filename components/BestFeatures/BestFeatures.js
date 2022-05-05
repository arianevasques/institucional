import { BestFeaturesMain, Content, Icons } from "../BestFeatures/BestFeatures.styled";

export default function BestFeatures(props) {
  return (
    <BestFeaturesMain>
      <Content>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </Content>
      <Icons>
        <div className="imageIcon">
          <img src={props.icon1}/>
          <p>{props.icon1Label}</p>
        </div>
        <div className="imageIcon">
          <img src={props.icon2}/>
          <p>{props.icon2Label}</p>
        </div>
        <div className="imageIcon">
          <img src={props.icon3}/>
          <p>{props.icon3Label}</p>
        </div>
        <div className="imageIcon">
          <img src={props.icon4}/>
          <p>{props.icon4Label}</p>
        </div>
      </Icons>
    </BestFeaturesMain>
  );
}
