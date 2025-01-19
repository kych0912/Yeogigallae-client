import styled from "styled-components";
import Card from "../../../../components/Card";

export const StyledCard = styled(Card)<{ $isError: boolean } & React.HTMLAttributes<HTMLDivElement>>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${({ $isError }) => ($isError ? "#2a2a2a" : "#222222")};
  border-radius: 30px;
  border: ${({ $isError }) => ($isError ? "2px solid red" : "2px solid transparent")};
  transition: background-color 0.3s, border 0.3s;
  cursor: text;

  &:hover {
    background-color: #333333;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 1rem;
  color: #fff;
  outline: none;
  padding: 0;
  margin: 0;

  &::placeholder {
    color: #6e6e6e;
  }
`;

export const ClearButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #6e6e6e;
  font-size: 1.5rem;
`;

export const SearchButton = styled.button<{ $disabled?: boolean }>`
  border: none;
  background: none;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: 6E6E6E;

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;
