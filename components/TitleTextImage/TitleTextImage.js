import {
  TitleTextImageMain,
  TitleText,
  Image,
} from "../TitleTextImage/TitleTextImage.styled";

export default function TitleTextImage(props) {
  return (
    <TitleTextImageMain>
      <TitleText>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <h4>{props.sectionTitle1}</h4>
        <p>{props.sectionText1}</p>
        <h4>{props.sectionTitle2}</h4>
        <p>{props.sectionText2}</p>
        <h4>{props.sectionTitle3}</h4>
        <p>{props.sectionText3}</p>
      </TitleText>
      <Image>
        <img src={props.image}></img>
      </Image>
    </TitleTextImageMain>
  );
}
