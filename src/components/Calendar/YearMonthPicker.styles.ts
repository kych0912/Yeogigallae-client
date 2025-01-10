import styled from "styled-components";

export const YearMonthPickerWrapper = styled.div`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  background: #2e2e2e;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  z-index: 20;

  ::-webkit-scrollbar {
    width: 8px; 
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0); 
    border-radius: 4px;
    transition: background 0.3s ease; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2); 
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-button {
    display: none;
  }

  /* Firefox 지원 */
  scrollbar-width: thin; 
  scrollbar-color: transparent transparent; 
  
  &:hover {
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent; 
  }
`;

export const YearMonthSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Year = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 0.5rem;
`;

export const MonthRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const MonthButton = styled.button<{ isCurrent?: boolean }>`
  background: ${({ isCurrent }) => (isCurrent ? "#4f46e5" : "none")};
  color: ${({ isCurrent }) => (isCurrent ? "#fff" : "#ccc")};
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;

  &:hover {
    background-color: #4f46e5;
    color: #fff;
  }
`;
