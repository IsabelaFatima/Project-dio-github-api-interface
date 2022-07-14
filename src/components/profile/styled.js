import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 60px 0px 30px 40px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 8px;
  height: 200px;
  h1 {
    font-size: 55px;
    font-weight: bold;
    padding-bottom: 40px;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  margin-left: 65px;
  margin-top: 15px;
  div {
    margin: 8px 9px 8px 13px;
    text-align: center;
    padding: 5px;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  margin-left: 50px;
  h3 {
    padding: 5px;
    margin-right: 8px;
  }
  a {
    font-size: 18px;
    color: #7B8ACB;
    font-weight: bold;
    padding: 5px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 60%;
  width: 25%;
  margin: 10px 100px 0px 50px;
`;