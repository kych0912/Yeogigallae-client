import styled from "styled-components";

export const Results = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column; 
  gap: 8px; 
  border: 0.5px solid #434343; 
  width: 100%;
  border-radius: 12px; 
  background-color: #222222;
  opacity: 1;

  max-height: 476px; 
  height: auto; 
  overflow-y: auto; 
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
  opacity: 1;

  &:last-child {
    border-bottom: none; 
  }

  &:hover {
    background-color: #333333;
  }
`;

export const PlaceName = styled.div`
  opacity: 1;
  font-weight: medium; 
  font-size: 16px;
  margin-bottom: 5px;
  text-align: left;
`;

export const AddressName = styled.div`
  opacity: 1;
  font-size: 14px; 
  color: #a1a1a1; 
  text-align: left; 
`;
