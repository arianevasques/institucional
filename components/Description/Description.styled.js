import styled from "styled-components";

export const DescriptionMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const Title = styled.div`
  text-align: left;
  color: blanchedalmond;

  h2 {
    font-size: 5.2rem;
    font-weight: 500;
    line-height: 0.95;
    letter-spacing: -2.54px;
    margin-bottom: 2.4rem;

    @media (max-width: 1024px) {
      font-size: 3.5rem;
    }
  }
`;

export const Content = styled.div`
  p {
    color: rgb(255, 255, 255);
    margin-top: 0;
    margin-bottom: 1rem;
    opacity: 1;
    flex: 0 0 100%;
    font-size: 1.3rem;
    font-weight: 300;
    text-align: left;

    @media (max-width: 1024px) {
      padding: 0;
    }
  }
`;
