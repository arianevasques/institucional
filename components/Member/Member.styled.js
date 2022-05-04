import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-right: 92px;
  margin-bottom: 92px;
  color: rgb(255, 255, 255);

  &:nth-child(3n) {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    margin: 0 13px;
    width: 100%;

    &:nth-child(3n) {
      margin-right: 13px;
    }
  }

  img {
    margin: 30px 0;
  }

  p {
    text-align: center;
    display: flex;
    justify-content: center;

    @media (max-width: 1024px) {
      padding-bottom: 20px;
    }
  }
`;