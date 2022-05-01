import styled from "styled-components";

export const TextTwoTextColumsMain = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    margin: 0 25px 0 25px;
  }
`;

export const Titulo = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.5px;
    margin-bottom: 0;
    margin-top: 90px;

    @media (max-width: 1024px) {
      margin-top: 50px;
    }
  }
`;

export const Colums = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .text {
    width: 100%;
    padding: 20px 0;
    padding-right: 30px;

    &:nth-child(2n) {
    padding-right: 0;
    padding-left: 30; }
  
  @media (max-width: 1024px) {
    padding: 0;

    }
  }
`;
