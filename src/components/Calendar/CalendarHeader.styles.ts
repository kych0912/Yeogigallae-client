import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #434343;
  padding: 1px 1px;
  border-radius: 30px;
  width: 236px;   
  height: 48px; 
`;

export const TabGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  background-color: ${({ isActive }) => (isActive ? "#4f46e5" : "#616161")};
  color: #fff;
  border: none;
  border-radius: 20px;
  width: 106px;  
  height: 36px;  
  margin: 0 5px; 
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#3b37b1" : "#555")};
  }
`;

export const MonthHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #fff;
  font-size: 14px;
  width: 100%;
  margin-left: 10px;

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      color: #4f46e5;
    }
  }

  div {
    margin: 0 1px 5px; 
    cursor: pointer;
    display: flex;  
    justify-content: center;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: #616161;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #4f46e5;
  }
`;

export const CurrentMonth = styled.div`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
