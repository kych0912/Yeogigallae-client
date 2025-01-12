import styled from "styled-components";

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

export const InfoLabel = styled.div`
  display: flex;
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 3px;
  padding: 5px;
  align-items: flex-start; 
  justify-content: flex-start;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TruncatedText = styled.div`
  dispaly: block;
  max-width: 260px; 
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  padding: 10px;
`;
