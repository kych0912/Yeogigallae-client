import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.375rem;
  width: 100%;
  box-sizing: border-box;
`;

export const YearDial = styled.div`
  display: flex;
  overflow-x: auto; 
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  gap: 1rem;
  width: 100%;
  color: #3b46f1;
  justify-content: center;
  padding: 0.969rem 0;
  margin: 0 auto; 

  &::-webkit-scrollbar {
    display: none; 
  }
`;

export const YearItem = styled.div<{ $selected: boolean }>`
  flex: 0 0 auto; 
  scroll-snap-align: center; 
  font-size: ${({ $selected }) => ($selected ? "16px" : "16px")};
  font-weight: "normal"
  color: ${(props) => (props.$selected ? "#3B46F1" : "#6E6E6E")};
  opacity: ${({ $selected }) => ($selected ? 1 : 0.5)};
  transition: transform 0.4s ease, font-size 0.4s ease, color 0.4s ease;
  cursor: pointer;
  margin: 0 6px;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;
  margin-top: 0.625rem;
  width: 100%;
`;

export const MonthItem = styled.div<{ $selected: boolean }>`
  display: flex;
  aligh-itmems: center;
  justify-content: center;
  text-align: center;
  padding: 15px 25px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 0.875rem;
  color: #fff;
  background-color: ${({ $selected }) => ($selected ? "rgba(79, 88, 242, 0.3)" : "#2e2e2e")};
  border-radius: 16px;
  cursor: pointer;
  border: ${({ $selected }) => ($selected ? "1.5px solid #3B46F1" : "1.5px solid #fff")};
  
`;

