import styled from "styled-components";

export const CalendarContainer = styled.div`
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

export const WeekDay = styled.div``;

export const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

export const Day = styled.div<{ 
  isToday: boolean; 
  isCurrentMonth: boolean; 
  isInRange: boolean; 
  isSelected: boolean; 
  isStart: boolean; 
  isEnd: boolean; 
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ isInRange, isSelected }) =>
    isSelected ? "#4f46e5" : isInRange ? "#2c2c5e" : "transparent"};
  color: ${({ isCurrentMonth }) => (isCurrentMonth ? "#fff" : "#666")};
  cursor: pointer;

  /* 시작 날짜와 끝 날짜는 완전한 동그라미 */
  border-radius: ${({ isStart, isEnd }) => 
    isStart || isEnd ? "50%" : "0"};
  
  &:hover {
    background-color: ${({ isSelected, isInRange }) =>
      isSelected ? "#3c3c9e" : isInRange ? "#343469" : "#555"};
    border-radius: 50%; 
    transform: scale(1.2);
  }
`;

