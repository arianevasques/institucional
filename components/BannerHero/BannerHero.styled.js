import styled from "styled-components";

export const BannerHeroMain = styled.div`
  position: relative;
  display: flex;
  max-height: 480px;

  img {
    width: 100%;
  }
`;

export const HeroText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;

  h1 {
    font-size: 50px;
    margin-bottom: 0;

    @media (max-width: 1024px) {
      font-size: 30px;
      margin: 0;
    }
  }

  p {
    font-size: 25px;
    padding: 0;

    @media (max-width: 1024px) {
      font-size: 20px;
      margin: 0;
      padding: 13px;
    }
  }

  a {
    border: 1px solid rgb(255, 250, 250);
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    transition: background 0.3s;

    :hover {
      background-color: rgb(255, 7, 214);
    }

    @media (max-width: 1024px) {
      font-size: 13px;
    }
  }
`;
