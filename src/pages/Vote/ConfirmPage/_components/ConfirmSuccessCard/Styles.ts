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

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TruncatedText = styled.div`
  dispaly: block;
  width: 100% 
  white-space: wrap;
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
