import styled from "styled-components";

export const BigHeaderMain = styled.div`
  @media (max-width: 1024px) {
    padding: 25px 25px;
    margin: 0;
  }
`;

export const Titulo = styled.div`
  h2 {
    font-size: 5.2rem;
    margin: 0;
    margin-bottom: 2.4rem;

    @media (max-width: 1024px) {
      margin-bottom: 1.5rem;
      font-size: 2.5rem;
    }
  }
`;

export const Description = styled.div`
  p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
`;
