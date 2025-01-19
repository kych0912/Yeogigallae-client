import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #6e6e6e; 
`;

export const ArrowButton = styled.button<{ $disabled: boolean }>`
  background: none;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  color: #6e6e6e;
  opacity: ${({ $disabled }) => ($disabled ? "0" : "1")}; 
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")}; 

  &:hover:not(:disabled) {
    color: #fff; 
  }
`;

// 페이지 인디케이터
export const PageIndicator = styled.span<{ $isActive: boolean }>`
  margin: 0 0.25rem;
  color: ${({ $isActive }) => ($isActive ? "#fff" : "#6e6e6e")}; // 활성 페이지는 흰색, 나머지는 회색
  font-weight: ${({ $isActive }) => ($isActive ? "bold" : "normal")};
`;

// 구분자
export const Separator = styled.span`
  margin: 0 0.25rem;
  color: #6e6e6e; 
`;
