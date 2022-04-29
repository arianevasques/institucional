import styled from "styled-components";

export const WhereWeShineMain = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    padding: 25px 25px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 55px;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 40px;
    }
  }

  .txt1 {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  p {
    @media (max-width: 1024px) {
      padding-right: 40px;
      font-size: 16px;
    }
  }

  .learnMore {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1024px) {
      justify-content: flex-start;
    }
  }

  a {
    display: flex;
    flex-direction: row;
  }

  .iconArrow {
    margin: 0 5px 0 15px;
    display: flex;
  }
  
`;