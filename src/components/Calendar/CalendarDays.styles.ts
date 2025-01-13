import styled from "styled-components";

export const CalendarContainer = styled.div`
  margin: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const WeekDays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: #ccc;
  font-size: 0.875rem;
`;

export const Spacer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 90%; 
  height: 0.5px; 
  background-color: #434343; 
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
    $isStart || $isEnd ? "50%" : "30%"};
  cursor: pointer;

  &:hover {
    background-color: ${({ $isSelected, $isInRange }) =>
      $isSelected ? "#3c3c9e" : $isInRange ? "#343469" : "#555"};
    border-radius: 50%;
  }
`;

