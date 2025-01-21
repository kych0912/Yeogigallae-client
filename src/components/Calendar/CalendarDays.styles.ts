import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.542rem;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: #ccc;
  font-size: 0.875rem;
  font-weight: semibold;
`;

export const WeekDay = styled.div``;

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.05rem;
`;

export const Day = styled.div<{
  $isToday?: boolean;
  $isCurrentMonth?: boolean;
  $isInRange?: boolean;
  $isSelected?: boolean;
  $isStart?: boolean;
  $isEnd?: boolean;
}>`
  width: 39px;
  height: 39px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.5px;
  background-color: ${({ $isInRange, $isSelected }) =>
    $isSelected ? "#4f46e5" : $isInRange ? "#2c2c5e" : "transparent"};
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#fff" : "#666")};
  border-radius: ${({ $isStart, $isEnd }) =>
    $isStart || $isEnd ? "50%" : "50%"};
  cursor: pointer;

  &:hover {
    background-color: #3d46f1;
    border-radius: 50%;
  }
`;

