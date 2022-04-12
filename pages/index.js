import styles from "../styles/Home.module.css";
import Menu from "../components/menu/menu";
import BannerHero from "../components/BannerHero/BannerHero";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import WhereWeShine from "../components/WhereWeShine/WhereWeShine";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Menu></Menu>
      <BannerHero></BannerHero>
      <div className="container">
        <WhatWeDo></WhatWeDo>
      </div>
      <div className="container">
        <WhereWeShine></WhereWeShine>
      </div>
      <div className="container">
        <Footer></Footer>
      </div>
    </div>
  );
}
