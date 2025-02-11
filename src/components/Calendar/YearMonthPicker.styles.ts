import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.375rem;
  width: 100%;
  box-sizing: border-box;
`;

export const YearItem = styled.div<{ $selected: boolean }>`
  flex: 0 0 auto;
  scroll-snap-align: center;
  font-size: 1rem;
  font-weight: ${({ $selected }) => ($selected ? "bold" : "medium")};
  color: ${(props) => (props.$selected ? "#3B46F1" : "#6E6E6E")};
  opacity: ${({ $selected }) => ($selected ? 1 : 0.5)};
  transition: transform 0.4s ease, font-size 0.4s ease, color 0.4s ease;
  cursor: pointer;
  margin: 0.375rem 0 0.625rem;
  text-align: center;
`;

export const MonthGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.625rem;
  margin-top: 0.625rem;
  width: 100%;
`;

export const MonthItem = styled.div<{ $selected: boolean; $disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px 25px;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 0.875rem;
  color: ${({ $disabled }) => ($disabled ? "rgba(255, 255, 255, 0.5)" : "#fff")};
  background-color: ${({ $selected, $disabled }) => 
    $disabled ? "rgba(46, 46, 46, 0.5)" : $selected ? "rgba(79, 88, 242, 0.3)" : "#2e2e2e"};
  border-radius: 16px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  border: ${({ $selected }) => ($selected ? "1.5px solid #3B46F1" : "1.5px solid #fff")};
`;
