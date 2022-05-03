import Link from "next/link";
import { BannerHeroMain, HeroText } from "../BannerHero/BannerHero.styled";

export default function BannerHero() {
  return (
    <BannerHeroMain>
      <img src="./bannerhero.jpeg"></img>
      <HeroText>
        <h1>Título</h1>
        <p>Descrição curta</p>
        <Link href="/product">
          <a>clique aqui</a>
        </Link>
      </HeroText>
    </BannerHeroMain>
  );
}
