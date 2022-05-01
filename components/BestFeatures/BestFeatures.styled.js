import styled from "styled-components";

export const BestFeaturesMain = styled.div`
  padding: 89px 0 89px 0;

  @media (max-width: 1024px) {
    margin: 0 25px 0 25px;
    padding: 35px 0 35px 0;
  }
`;

export const Content = styled.div`
  h3 {
    text-align: left;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.5px;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 1;
    }
  }

  p {
    margin-bottom: 1rem;
    margin-top: 0;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  .imageIcon {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0px;

    @media (max-width: 1024px) {
      width: 50%;
    }
  }

  img {
    width: 50%;
  }

  p {
    text-align: center;
    font-size: 1.3rem;
    padding-top: 10px;
    margin: 0;
  }
`;
