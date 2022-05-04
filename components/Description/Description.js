import { DescriptionMain, Title, Content } from "../Description/Description.styled";


export default function Description(props) {
  return (
    <DescriptionMain>
      <Title>
        <h2>{props.title}</h2>
      </Title>
      <Content>
        <p>
          {props.content}
        </p>
      </Content>
    </DescriptionMain>
  );
}
