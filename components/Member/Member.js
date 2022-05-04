import Image from "next/image";
import { Box } from "./Member.styled";

export default function Member(props) {
  return (
    <Box>
      <Image
        src={props.image}
        alt={props.imageAlt}
        width={props.imageWidth}
        height={props.imageHeight}
      />
      <p>{props.name} - {props.role}</p>
    </Box>
  );
}
