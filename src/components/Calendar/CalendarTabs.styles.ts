import styled from "styled-components";

interface ProgressLineProps {
  $completed: boolean;
  width: string;
}

export const TabGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
`;

export const ProgressRow = styled.div`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  width: 100%;
  position: relative; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  z-index: 2; 
`;

export const ProgressCircleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
`;

export const ProgressCircle = styled.div<{ $active: boolean; $completed?: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => (props.$completed ? "#3B46F1" : "transparent")};
  border: ${(props) =>
    props.$completed ? "none" : props.$active ? "1px solid #fff" : "1px solid #a1a1a1"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const CircleText = styled.span<{ $active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.125rem;
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: 0.625rem;
  color: ${(props) => (props.$active ? "#fff" : "#a1a1a1")};
  transition: all 0.3s ease-in-out;
  z-index: 1;
`;

export const CustomCheckIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

export const ProgressLine = styled.div<ProgressLineProps>`
  flex: 1;
  height: 1px;
  background-image: 
    repeating-linear-gradient(
      to right,
      ${(props) => (props.$completed ? "#3b46f1" : "#a1a1a1")} 0,
      ${(props) => (props.$completed ? "#3b46f1" : "#a1a1a1")} 6px,
      transparent 6px,
      transparent 12px
    );
  margin-left: -1.0rem; 
  margin-right: -0.9rem;
  z-index: 1; 
  position: relative;
  top: -0.65rem;

  transition: background-image 0.5s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%; 
    background: transparent; 
    z-index: 2; 
  }
`;

export const ProgressLabel = styled.div<{ $active: boolean; $completed?: boolean }>`
  font-size: 0.875rem;
  color: ${(props) => (props.$active ? "#fff" : "#a1a1a1")};
  margin-top: 0.5rem; 
  text-align: center;
  transition: all 0.3s ease-in-out;
`;

export const LabelRow = styled.div`
  display: flex;
  justify-content: space-between; /
  text-align: center;
`;
