import styled from "styled-components";

export const SearchInput = styled.input<{ $isError: boolean }>`
  padding: 8px;
  border: ${({ $isError }) => ($isError ? "1px solid red" : "none")}; /* 입력 오류 시 빨간색, 기본 border 없음 */
  border-radius: 8px;
  font-size: 16px;
  background-color: #fff; 
  color: #222222; 
  outline: none;

  &:focus {
    outline: none; 
    border: ${({ $isError }) => ($isError ? "2px solid red" : "1px solid #434343")}; 
  }

  &::placeholder {
    color: #6e6e6e; 
  }
`;

export const SearchButton = styled.button<{ $disabled?: boolean }>`
  background-color: ${({ $disabled }) => ($disabled ? "#3b46f1" : "#434343")};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  transition: background-color 0.3s ease, opacity 0.3s ease;

  &:hover {
    background-color: ${({ $disabled }) =>
      $disabled ? "#6e6e6e" : "#2f39d0"}; /* 활성화 상태에서만 hover 효과 */
  }
`;
