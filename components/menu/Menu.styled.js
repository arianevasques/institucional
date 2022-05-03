import styled from "styled-components";

export const MenuMain = styled.div`
  width: 100%;

  ul {
    display: flex;
    justify-content: space-evenly;
    padding: 0px;
    margin: 0px;
    background-color: #ededed;
    list-style: none;
  }

  li {
    display: inline;
  }

  a {
    padding: 20px 10px;
    display: inline-block;
  }
`;
