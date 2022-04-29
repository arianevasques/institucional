import styled from "styled-components";

export const FooterMain = styled.div`
  width: 100%;
  background-color: #ededed;
  padding: 40px;

  @media (max-width: 1024px) {
    padding: 25px;
  }
`;

export const Content = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .infos {
    display: flex;
    flex-direction: column;
  }

  h4 {
    margin: 0;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    padding-top: 30px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: flex-start;
    margin: 0;
    padding-left: 10px;

    @media (max-width: 1024px) {
      padding-left: 0;
      flex-wrap: wrap;
    }
  }

  li {
    padding-left: 10px;

    @media (max-width: 1024px) {
      padding-left: 0;
      width: 50%;
    }
  }
`;
