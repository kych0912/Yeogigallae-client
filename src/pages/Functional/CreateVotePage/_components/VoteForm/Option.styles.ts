import styled from "styled-components";

export const OptionSection = styled.div`
  margin-bottom: 20px;

  & > label {
    display: block;
    color: #ffffff;
    font-weight: 500;
    padding: 0 5px;
  }

  & > input {
    width: 100%;
    height: 40px;
    border: none;
    padding: 0 5px;
    background-color: transparent;
    color: #ffffff;
    font-size: 16px;

    &::placeholder {
      color: #888888;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 8px;
  display: block;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  &:focus {
    border-color: #6200ee;
  }
`;