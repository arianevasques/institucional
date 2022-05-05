import {
  TextTwoTextColumsMain,
  Titulo,
  Colums,
} from "../TextTwoTextColums/TextTwoTextColums.styled";

export default function TextTwoTextColums(props) {
  return (
    <TextTwoTextColumsMain>
      <Titulo>
        <h3> {props.title} </h3>
      </Titulo>
      <Colums>
        <div className="text">
          <p>{props.colum1}</p>
        </div>
        <div className="text">
          <p>
            {props.colum2}
          </p>
        </div>
      </Colums>
    </TextTwoTextColumsMain>
  );
}
