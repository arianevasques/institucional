import styled from "styled-components";

export const MembersMain = styled.div`
  @media (max-width: 1024px) {
    padding: 0 25px;
  }
`;

export const Title = styled.div`
  h4 {
    margin: 80px 0;
    font-size: 5.2rem;
    text-align: left;
    font-weight: 500;
    line-height: 0.95;
    letter-spacing: -2.54px;
    color: blanchedalmond;

    @media (max-width: 1024px) {
      font-size: 2.5rem;
      margin: 40px 0;
    }
  }
`;

export const BoxMembers = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

