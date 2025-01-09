import styled from "styled-components";

// VoteForm 전체 컨테이너
export const Content = styled.div`
  margin: 20px; 
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

export const ColorSelector = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ColorCircle = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => (props.color === "#ffffff" ? "#ccc" : "transparent")};
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

// 제출 버튼
export const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: #6200ee;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7c33ee;
  }

  &:focus {
    outline: none;
  }
`;

