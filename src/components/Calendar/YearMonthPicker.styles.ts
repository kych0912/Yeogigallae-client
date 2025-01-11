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

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 16px;
  width: 100%;
`;

export const MonthItem = styled.div<{ isSelected: boolean }>`
  text-align: center;
  padding: 8px;
  font-size: 14px;
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};
  color: ${({ isSelected }) => (isSelected ? "#fff" : "#6e6e6e")};
  background-color: ${({ isSelected }) => (isSelected ? "#3b46f1" : "#2e2e2e")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isSelected }) =>
      isSelected ? "#3b46f1" : "#444444"};
  }
`;
