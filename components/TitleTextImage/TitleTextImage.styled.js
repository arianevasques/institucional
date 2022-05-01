import styled from "styled-components";

export const TitleTextImageMain = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    margin: 0px 25px 0 25px;
    flex-direction: column;
  }
`;

export const TitleText = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.5px;
    margin-bottom: 2rem;
  }
`;

export const Image = styled.div`
  img {
    width: 500px;
    padding-left: 20px;

    @media (max-width: 1024px) {
      padding-left: 0;
      padding-top: 20px;
      padding-bottom: 20px;
      width: 100%;
    }
  }
`;
