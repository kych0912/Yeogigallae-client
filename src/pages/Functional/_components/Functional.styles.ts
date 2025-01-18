import styled from "styled-components";
import Card from "../../../components/Card";

export const Container = styled.div`
  margin:0 1.25rem 1rem 1.25rem;
  min-height: calc(100vh - 88px);
  position: relative;
`

export const StyledCard = styled(Card)`
  width: 100%;
  background: white;
  border-radius: 30px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

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

// 날짜 섹션
export const DatePickerWrapper = styled.div`
  margin-bottom: 20px;
  margin-start: 20px;

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
    border-radius: 10px;
    padding: 0 5px;
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

