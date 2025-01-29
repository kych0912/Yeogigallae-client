import styled from "styled-components";
import Card from "../Card";
import CommonContainer from "../Layout/CommonContainer";


export const StyledContainer = styled(CommonContainer)<{ onClick?: () => void }>` 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  position: fixed;
  top: 0;
  z-index: 2000;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between; 
  width: 100%;
  gap: 0.75rem; 
`;

export const ModalContent = styled(Card)`
  text-align: center;
  width: 21.9rem;
  border-radius: 30px;
  font-family:${({theme}) => theme.fontFamily.regular};
`;

export const ConfirmText = styled.p`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fontFamily.bold};
  color: white;
  text-align: center;
  line-height: 1.5;
`;

export const TabContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 0.625rem;
  margin: 0 1.25rem;
`;

export const Tab = styled.button<{ active: boolean }>`
  width: 100%;
  padding: 0.688rem 0;
  border-radius: 1rem;
  background: ${({ active }) => (active ? "#434343" : "#252525")};
  color: ${({ active }) => (active ? "#fff" : "#a1a1a1")};
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-family: ${({theme}) => theme.fontFamily.semiBold }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  max-height: 24rem; 
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 1.125rem;

  scrollbar-width: none;
  -ms-overflow-style: none; 

  &::-webkit-scrollbar {
    display: none;
  }

  scroll-behavior: smooth;
`;

export const Image = styled(Card.Item)`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
`;

export const ImageWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  align-items: center;
  margin-bottom: 0.375rem;
  opacity: ${({ selected }) => (selected ? "1" : "0.5")};
  border-radius: 24px;
  cursor: pointer;
  transition: border 0.2s ease-in-out;
`;