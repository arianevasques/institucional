import styles from "../styles/Home.module.css";
import Menu from "../components/menu/menu"
import BannerHero from "../components/BannerHero/BannerHero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhereWeShine from "../components/WhereWeShine/WhereWeShine";


export default function Home() {
  return (
    <div className={styles.home}>
      <Menu></Menu>
      <BannerHero></BannerHero>
      <WhatWeDo></WhatWeDo>
      <WhereWeShine></WhereWeShine>
    </div>
  );
}
