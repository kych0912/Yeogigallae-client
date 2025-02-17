import styled from "styled-components";
import Card from "../../../components/Card";
import { Toast } from "../../../components/Calendar/CompleteButton.styles";

export const Container = styled.div`
  margin:0 1.25rem 1rem 1.25rem;
  min-height: calc(100vh - 88px);
  position: relative;
`

export const StyledDivider = styled(Card.Divider)`
  background-color: rgba(255, 255, 255, 0.08); // #fff 8%
`;

export const ClickableText = styled.span`
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  color: #fff; 
  border: transparent;
  outline: none;
  font-family: ${({ theme }) => theme.fontFamily.medium};
  font-size: medium;

  &::placeholder {
    color: #fff;
  }
`;

// 날짜 섹션
export const DatePickerWrapper = styled.div`
  margin-bottom: 1.25rem;
  margin-start: 1.25rem;

  & > label {
    display: block;
    color: #ffffff;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    padding: 0 0.313rem;
  }

  & > input {
    width: 100%;
    height: 2.5rem;
    border: none;
    border-radius: 0.625rem;
    padding: 0 0.313rem;
    background-color: transparent;
    color: #ffffff;

    &::placeholder {
      color: #888888;
    }
  }
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8; 
  }
`;

export const StyledCardItem = styled(Card.Item)`
  display: flex;
  flex-direction: row;
  align-items: flex-start; 
  justify-content: space-between; 
  color: #fff;
  width: 100%;
  margin-bottom: 0.25rem;

  .icon {
    cursor: pointer; 
  }
`;

export const CustomCardItem = styled(Card.Item)`
  padding: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;

  scrollbar-width: none; 
  -ms-overflow-style: none; 
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TimeButton = styled.button<{ $isActive: boolean }>`
  background-color: ${({ $isActive }) => ($isActive ? "#3b46f1" : "#434343")};
  color: #fff;
  border: none;
  border-radius: 6.25rem;
  width: 5.25rem;
  height: 2.25rem;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.medium};

  &:hover {
    background-color: #3b46f1;
  }

  &:active {
    outline: none; 
  }
`;

export const StyledToast = styled(Toast)`
  display: flex;
  justify-content: flex-start;
  margin-top: 0.5rem;

`;
