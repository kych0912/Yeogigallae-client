import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.125rem;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const CurrentDate = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: 0.875rem;
  text-align: center;
  margin-left: 1.25rem; 
  margin-top: 0.844rem;
  color: #fff;
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
  grid-row-gap: 3px;
  margin: 1rem;
`;

export const Day = styled.div<{
  $isToday?: boolean | null;
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
  border: none;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#3b46f1" : "transparent"};
  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? "#fff" : "#6e6e6e")};
  border-radius: ${({ $isStart, $isEnd }) =>
    $isStart || $isEnd ? "50%" : "0"}; /* 시작/끝 날짜 원형 */
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0; 
    right: 0; 
    background-color: ${({ $isInRange }) =>
      $isInRange ? "rgba(59, 70, 241, 0.3)" : "transparent"};
    z-index: -1;

    /* 양쪽 끝부분에 둥근 처리 */
    border-radius: ${({ $isStart, $isEnd }) =>
      $isStart
        ? "50px 0 0 50px" 
        : $isEnd
        ? "0 50px 50px 0"
        : "0"}; 
  }

  &:nth-child(7n + 1):before {
    border-radius: ${({ $isStart }) =>
      $isStart ? "50px 0 0 50px" : "50px 0 0 50px"}; 
  }

  &:nth-child(7n):before {
    border-radius: ${({ $isEnd }) =>
      $isEnd ? "0 50px 50px 0" : "0 50px 50px 0"}; 
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ $isStart, $isEnd }) =>
      $isStart || $isEnd ? "#3b46f1" : "transparent"};
    border-radius: 50%; 
    z-index: -1;
  }
`;
