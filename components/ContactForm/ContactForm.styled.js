import styled from "styled-components";

export const ContactFormMain = styled.div`
  @media (max-width: 1024px) {
    padding: 0;
    margin: 0 25px;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0px;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const Description = styled.div`
  p {
    margin-bottom: 1rem;

    @media (max-width: 1024px) {
      font-size: 15px;
    }
  }
`;

export const Formulary = styled.div`
  display: flex;
  flex-direction: column;

  ul {
    padding: 0;
    align-items: center;

    @media (max-width: 1024px) {
      display: flex;
      flex-direction: column;
    }
  }

  li {
    list-style: none;

    @media (max-width: 1024px) {
      width: 100%;
    }
  }
`;

export const InputLine = styled.div`
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 533px;
    height: 55px;
    margin-bottom: 70px;
    margin-right: 7px;

    &:nth-child(2n) {
      margin-left: 7px;
    }

    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;

      &:nth-child(2n) {
        margin-left: 0px;
      }
    }
  }
`;

export const Select = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  select {
    width: 533px;
    height: 55px;
    margin-bottom: 70px;
    margin-right: 7px;

    &:nth-child(2n) {
      margin-left: 7px;
    }

    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
      margin-top: 1px;

      &:nth-child(2n) {
        margin-left: 0;
      }
    }
  }
`;

export const Message = styled.div`
  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  textarea {
    width: 100%;
    height: 100px;
    margin-bottom: 70px;

    @media (max-width: 1024px) {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
      margin-top: 1px;
    }
  }
`;

export const Send = styled.div`
  button {
    width: 150px;
    height: 70px;

    @media (max-width: 1024px) {
      text-align: center;
      width: 60px;
      height: 30px;
    }
  }
`;
