import styled from "styled-components";

export const SearchInput = styled.input<{ $isError: boolean }>`
  padding: 0.938rem 1.25rem;
  border: ${({ $isError }) => ($isError ? "1px solid red" : "none")}; 
  border-radius: 6.25rem;
  font-size: 1rem;
  background-color: #222222; 
  color: #fff; 
  outline: none;
  opacity: 0.9; 

  &:focus {
    outline: none; 
    border: ${({ $isError }) => ($isError ? "0.5px solid red" : " ")}; 
  }

  &::placeholder {
    color: #6e6e6e; 
  }
`;

export const SearchButton = styled.button<{ $disabled?: boolean }>`
  border: none;
  font-size: 16px;
  background-color: transparent;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;

