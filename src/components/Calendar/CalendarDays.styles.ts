import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: #ccc;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fontFamily.semiBold};
`;


export const WeekDay = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin: 1rem;
`;

export const Day = styled.div<{
  $isToday?: boolean | null; // null 허용
  $isCurrentMonth?: boolean | null;
  $isInRange?: boolean | null;
  $isSelected?: boolean | null;
  $isStart?: boolean | null;
  $isEnd?: boolean | null;
}>`
  width: 2.875rem;
  height: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#4f46e5" : "transparent"};
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#fff" : "#666")};
  border-radius: ${({ $isStart, $isEnd }) =>
    $isStart || $isEnd ? "50%" : "0"};
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({ $isStart }) => ($isStart ? "50%" : "0")};
    right: ${({ $isEnd }) => ($isEnd ? "50%" : "0")};
    background-color: ${({ $isInRange }) =>
      $isInRange ? "#2c2c5e" : "transparent"};
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ $isStart, $isEnd }) =>
      $isStart || $isEnd ? "#4f46e5" : "transparent"};
    border-radius: 50%;
    z-index: -1;
  }

  &:hover {
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#3d46f1" : "rgba(61, 70, 241, 0.7)"};
  }
`;



