import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center; 
  gap: 10px; 
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const TabItem = styled.button<{ isActive: boolean }>`
  width: 190px; 
  height: 50px; 
  font-size: 16px;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#616161")};
  background-color: #333333; 
  border: none;
  border-radius: 16px; 
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.isActive ? "#ffffff" : "#888888")}; /* 비활성 상태 호버 */
  }

  &:focus {
    outline: none;
  }
`;
