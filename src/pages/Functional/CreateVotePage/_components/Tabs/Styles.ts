import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center; 
  gap: 10px; 
  margin-top: 30px;
  margin: 1rem 1.25rem;
`;

export const TabItem = styled.button<{ $active: boolean }>`
  width: 190px; 
  height: 50px; 
  font-size: 16px;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  color: ${(props) => (props.$active ? "#ffffff" : "#616161")};
  background-color: #333333; 
  border: none;
  border-radius: 16px; 
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => (props.$active ? "#ffffff" : "#888888")}; /* 비활성 상태 호버 */
  }

  &:focus {
    outline: none;
  }
`;
