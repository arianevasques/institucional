import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  max-height: 300px;
  margin-top: 50px;

  @media (max-width: 1024px) {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
  }
`;
