import styled from "styled-components";

export const MonthHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 14px;
  width: 100%;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: #616161;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #3b46f1;
  }
`;

export const CurrentMonth = styled.div`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

