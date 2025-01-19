import styled from "styled-components";
import Card from "../../../../components/Card";

export const Results = styled.div<{ $isVisible: boolean }>`
  display: ${({ $isVisible }) => ($isVisible ? "flex" : "none")};
  flex-direction: column; 
  gap: 0.5rem; 
  border: 0.031rem solid #434343; 
  width: 100%;
  border-radius: 0.75rem; 
  background-color: #222222;
  opacity: 1;

  max-height: 476px; 
  height: auto; 
  overflow-y: auto; 
  overflow-x: hidden;

  -ms-overflow-style: none; 
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
`;

export const ResultItem = styled.div<{ $isFirst?: boolean; $isLast?: boolean }>`
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  padding: 0 1.125rem;
  color: #fff;
  font-size: 0.875rem;

  margin-top: ${({ $isFirst }) => ($isFirst ? "1.25rem" : "0")}; 
  margin-bottom: ${({ $isLast }) => ($isLast ? "1.25rem" : "0")}; 
`;

export const ZipCode = styled.div`
  font-size: 0.875rem; 
  font-weight: semi-bold; 
  color: #3b46f1; 
  margin-bottom: 0.25rem; 
  text-align: left;
`;

export const PlaceName = styled.div`
  font-weight: regular; 
  font-size: 0.875rem;
  color: #fff;
  margin-bottom: 0.25rem;
  text-align: left;
`;

export const AddressName = styled.div`
  font-size: 0.875rem; 
  font-weight: regular;
  color: #fff; 
  text-align: left; 
`;

export const ResultWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const MapButton = styled.div`
  display: flex;
  align-items: center;
  color: #6e6e6e;
  font-weight: regular;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
  gap: 0.15rem;
`;

export const Divider = styled(Card.Divider)`
  width: calc(100% - 2.25rem); 
  height: 0.031rem; 
  background-color: rgba(255, 255, 255, 0.4);
  margin: 0 auto;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  align-items: center;
`;

export const RotateIcon = styled.div<{ $isRotated: boolean }>`
  display: inline-block;
  transition: transform 0.3s ease;
  transform: ${({ $isRotated }) => ($isRotated ? "rotate(180deg)" : "rotate(0deg)")};
`;