import styled from "styled-components";

export const Content = styled.div`
  margin: 1rem 1.25rem;
  padding: 20px; 
  background-color: #222222; 
  border-radius: 30px; 
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
