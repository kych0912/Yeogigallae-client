import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0; 
  display: flex;
  flex-direction: column; 
  gap: 9px;
`;

export const VoteButton = styled.button<{ $isSelected: boolean; $selectedColor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  background-color: ${({ $isSelected, $selectedColor }) =>
    $isSelected ? $selectedColor : "rgba(255, 255, 255, 0.065)"};
  position: relative;
  cursor: default; 
  pointer-events: none; 
  border: none;
  overflow: hidden; 

  span {
    position: relative;
    z-index: 2; 
  }

  ${({ $isSelected }) =>
    !$isSelected &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 28%; 
      height: 100%;
      background-color: #434343;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
      z-index: 1;
    }
  `}
`;

export const Text = styled.div`
  position: relative;
  z-index: 2; 
  font-size: 14px;
  font-weight: 300;
`;

export const VoteCounter = styled.span`
  font-size: 14px;
  font-weight: normal;
  margin-left: 8px;
`;
