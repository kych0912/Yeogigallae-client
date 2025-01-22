import styled from "styled-components";

export const Results = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  align-items: center;
  flex-direction: column; 
  max-height: 100px;
  overflow-y: auto;
  gap: 8px; 
  border: 0.5px solid #434343; 
  padding: 8px 12px; 
  border-radius: 12px; 
  overflow-x: hidden;
`;

export const ResultItem = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  justify-content: center;
  width: 100%;
  padding: 12px;
  color: #fff;
  font-size: 14px;
  transition: background-color 0.3s ease;
  border-bottom: 2px solid #434343; 

  &:last-child {
    border-bottom: none; 
  }

  &:hover {
    background-color: transparent; 
  }
`;

export const PlaceName = styled.div`
  font-weight: medium; 
  font-size: 16px;
  margin-bottom: 5px;
`;

export const AddressName = styled.div`
  font-size: 14px; 
  color: #a1a1a1; 
`;
