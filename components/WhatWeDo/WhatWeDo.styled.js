import styled from "styled-components";

export const WhatWeDoMain = styled.div`
  padding-bottom: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    padding: 25px 25px;
  }

  .content {
    display: flex;
}
    @media (max-width: 1024px) {
      .content {
        flex-direction: column;
    }
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

  > div {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    margin-bottom: 20px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    p {
      padding-right: 40px;

      @media (max-width: 1024px) {
        padding-right: 0;
        font-size: 16px;
      }
    }
  }

  .more {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 1024px) {
      justify-content: flex-start;
    }

    a {
      display: flex;
      flex-direction: row;
    }
  }

  .iconArrow {
    margin: 0 5px 0 15px;
    display: flex;
  }
`;

export const Box = styled.div`
  padding-right: 50px;

  @media (max-width: 1024px) {
    padding-right: 0;
  }

  h3 {
    font-size: 25px;
  }

  p {
    @media (max-width: 1024px) {
      padding-right: 0;
      font-size: 16px;
    }
  }

  .learnMore {
    width: 100%;
    display: flex;
    padding-top: 40px;
    padding-bottom: 30px;
  }
    @media (max-width: 1024px) {
      .learnMore {
        padding: 0;
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
