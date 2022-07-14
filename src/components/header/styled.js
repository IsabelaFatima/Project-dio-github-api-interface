import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 4px;
  input {
    border: 1px solid #000000;
    box-shadow: 5px 0px 5px 5px #161616;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }
  button {
    border: 1px solid #000000; 
    box-shadow: 5px 0px 5px 5px #161616;
    background-color: #161616;
    padding: 12px 50px;
    margin: 0 16px;
    border-radius: 8px;
    &:hover {
      background-color: #585858;
    }
    span {
      font-weight: bold;
      color: #fff;
    }

  }
`;