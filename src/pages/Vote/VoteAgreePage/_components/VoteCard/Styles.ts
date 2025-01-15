import styled from "styled-components";
import Card from "../../../../../components/Card";

export const Container = styled(Card)`
  margin:0 1.25rem 1rem 1.25rem;
  min-height: calc(100vh - 92px);
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: flex-start;
  padding: 20px 0;
  color: #fff;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TruncatedText = styled.div`
  dispaly: block;
  width: 100%; 
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-w
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
`;
