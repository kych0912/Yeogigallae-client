import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;
`;

export const Header = styled.h1`
  display: flex;
  font-size: 24px;
  font-weight: medium;
  color: #fff;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Spacer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #434343;
  justify-content: center;
  align-items: center;
`;

export const Instructions = styled.div`
  font-size: 20px;
  color: #6e6e6e;
  padding: 0 10px;
  margin-bottom: 30px;
  ul {
    margin: 10px 0 0 16px;
  }
  li {
    font-size: 16px;
    padding: 2px 0;
  }
`;