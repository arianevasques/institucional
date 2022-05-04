import { BigHeaderMain, Titulo, Description } from "../BigHeader/BigHeader.styled";

export default function BigHeader(props) {
  return (
    <BigHeaderMain>
      <Titulo>
        <h2>{props.title}</h2>
      </Titulo>
      <Description>
        <p>
          {props.description}
        </p>
      </Description>
    </BigHeaderMain>
  );
}
