import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
  box-sizing: border-box;
`;

export const YearDial = styled.div`
  display: flex;
  overflow-x: auto; 
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  gap: 16px;
  width: 100%;
  max-width: 90%;
  justify-content: center;
  padding: 8px 0;
  margin: 0 auto; 

  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const YearItem = styled.div<{ isSelected: boolean }>`
  flex: 0 0 auto; 
  scroll-snap-align: center; 
  font-size: ${({ isSelected }) => (isSelected ? "14px" : "14px")};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#999")};
  opacity: ${({ isSelected }) => (isSelected ? 1 : 0.5)};
  transform: ${({ isSelected }) => (isSelected ? "scale(1.3)" : "scale(1)")};
  transition: transform 0.4s ease, font-size 0.4s ease, color 0.4s ease;
  cursor: pointer;
`;
