import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin:1rem 1.25rem;
  display: flex;
  justify-content: start;
  padding: 20px 24px;
  border-radius: 16px;
  background-color: #222;
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = styled.button<{ $active: boolean; $isCreateButton?: boolean }>`
  width: 43px;
  height: 40px;
  margin: 0 5px;
  background-color: ${(props) => (props.$isCreateButton ? "transparent" : "#fff")};
  color: color: ${(props) =>
    props.$isCreateButton
      ? "#bbb" 
      : props.$active
      ? "#3b46f1"
      : "#bbb"};
  border: ${(props) =>
    props.$isCreateButton
      ? "2px solid #3b46f1"
      : props.$active
      ? "2px solid #3b46f1"
      : "2px solid transparent"};
  border-radius: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$isCreateButton ? "transparent" : "#f5f5f5")};
  }

  svg {
    width: ${(props) => (props.$isCreateButton ? "24px" : "auto")};
    height: ${(props) => (props.$isCreateButton ? "24px" : "auto")};
  }
`;

export const Text = styled.span`
  color: #3b46f1;
  font-size: 12px;
  font-weight: bold; 
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
`;

export const ButtonLabel = styled.span<{ $active: boolean; $isCreateButton?: boolean }>`
  margin-top: 4px;
  font-size: 12px;
  color: ${(props) =>
    props.$isCreateButton
      ? "#3b46f1" 
      : props.$active
      ? "#3b46f1"
      : "#bbb"}; 
  text-align: center;
  white-space: nowrap;
`;