import styled from "styled-components";

// 메시지 입력
export const MessageInput = styled.textarea`
  width: 100%;
  height: 80px;
  border: none;
  border-radius: 15px;
  background-color: transparent;
  color: #ffffff;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 20px;
  resize: none;
  text-align: center;
  white-space: pre-line;

  &::placeholder {
    color: #626262;
  }
    
  &:focus {
    outline: none; 
    border: none; 
  }
`;