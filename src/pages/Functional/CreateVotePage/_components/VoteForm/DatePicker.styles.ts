import styled from "styled-components";

// 날짜 섹션
export const DatePickerWrapper = styled.div`
  margin-bottom: 20px;

  & > label {
    display: block;
    margin-bottom: 8px;
    color: #ffffff;
    font-weight: 500;
    padding: 0 5px;
  }

  & > input {
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    padding: 0 5px;
    background-color: transparent;
    color: #ffffff;

    &::placeholder {
      color: #888888;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: #555;
  display: block;
  margin-bottom: 30px;
  margin: 0;
  padding: 0; 
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
  box-sizing: border-box;
  margin: 0;
  &:focus {
    border-color: #6200ee;
  }
`;