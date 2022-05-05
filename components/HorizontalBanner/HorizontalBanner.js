import { Banner } from "../HorizontalBanner/HorizontalBanner.styled";

export default function HorizontalBanner(props) {
  return (
    <Banner>
        <img src={props.image}></img>
    </Banner>
  );
}
