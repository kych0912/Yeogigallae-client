import styled from "styled-components";
import Card from "../../../components/Card";

export const Container = styled.div`
  margin:0 1.25rem 1rem 1.25rem;
  min-height: calc(100vh - 88px);
  position: relative;
`

export const Content = styled.div`
  font-size: 14px;
  color: #6E6E6E;
  text-align: center;
  margin: 15px 0;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  background: white;
  border-radius: 30px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

export const StyledItem = styled(Card.Item)`
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  text-align: center;
  width: 100%;
  height: 2.313rem; 
  margin-bottom: 0.5rem;
  gap: 0.063rem;
  font-size: 1rem;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  color: #007bff;

  &:hover {
    color: #0056b3;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const TwoSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  gap: 1rem; 

  button {
    color: #fff;
    background-color: #434343;
    transition: background-color 0.3s ease;

    &:hover, &:focus, &:active {
      background-color: #3b46f1; 
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 15.625rem;
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const TruncatedText = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: medium;
  font-size: 1rem;
  color: #fff;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
`;