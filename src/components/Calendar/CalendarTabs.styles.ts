import styled, { keyframes } from "styled-components";

interface ProgressLineProps {
  $completed: boolean;
  width: string;
}

const fillProgress = keyframes`
  from {
    background-size: 0% 100%;
  }
  to {
    background-size: 100% 100%;
  }
`;

const shrinkProgress = keyframes`
  from {
    background-size: 100% 100%;
  }
  to {
    background-size: 0% 100%;
  }
`;

export const TabGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 16.969rem;
  position: relative;
`;

export const ProgressCircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1; 
  cursor: pointer;
`;

export const ProgressCircle = styled.div<{ $active: boolean; $completed?: boolean }>`
  width: ${(props) =>
    props.$completed ? "1.775rem" : props.$active ? "2.125rem" : "1.775rem"};
  height: ${(props) =>
    props.$completed ? "1.775rem" : props.$active ? "2.125rem" : "1.775rem"};
  background-color: ${(props) => (props.$completed ? "#3B46F1" : props.$active ? "#3B46F1" : "#A1A1A1")};
  border: ${(props) => 
    (props.$completed ? "0.094rem solid #414589" : props.$active ? "0.25rem solid #414589" : "0.094rem solid #6E6E6E")};
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CircleText = styled.span<{ $active: boolean }>`
  font-family: ${(props) =>
    props.$active ? props.theme.fontFamily.bold : props.theme.fontFamily.semiBold};
  font-size: 0.75rem;
  color: ${(props) => (props.$active ? "#fff" : "#6E6E6E")};
  transition: all 0.3s ease-in-out;
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
  display: flex;
  align-items:center;
  justify-content: center;
  height: 0.25rem;
  border-radius: 100px;
  width: ${(props) => props.width};
  background-color: #6e6e6e; 
  background-image: linear-gradient(to right, #3b46f1, #3b46f1); 
  background-repeat: no-repeat;
  background-size: ${(props) => (props.$completed ? "100% 100%" : "0% 100%")};
  animation: ${(props) =>
      props.$completed ? fillProgress : shrinkProgress}
    0.5s ease-in-out;
  transition: background-size 0.3s ease-in-out;
  position: relative;
  top: -0.65rem;
`;

export const ProgressLabel = styled.div<{ $active: boolean }>`
  font-size: ${(props) => (props.$active ? "0.75rem" : "0.625rem")};
  color: ${(props) => (props.$active ? "#3B46F1" : "#6E6E6E")};
  text-align: center;
  margin-top: 0.25rem;
  line-height: 1.013rem;
  transition: all 0.3s ease-in-out;
`;
