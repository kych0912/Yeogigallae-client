import styled from "styled-components";
import { BaseButton } from "../../../../../components/Button/Button.styles";

interface ButtonProps {
    isActive?: boolean;
    size?: string;
}

export const ButtonTypography = styled.div`
    font-family:${({theme})=>theme.fontFamily.regular};
`

export const DayButton = styled(BaseButton)<ButtonProps>`
    padding: 0.875rem 2rem;
    background-color: ${({isActive, theme}) => isActive ? theme.colors.primary : theme.colors.secondary};
    color: #ffffff;
    font-family: ${({isActive, theme}) => isActive ? theme.fontFamily.semiBold : theme.fontFamily.regular};
    line-height: 1rem;
    font-size:0.875rem;
`

export const ButtonWrapper = styled.div`
    padding: 0 1.25rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    box-sizing: border-box;
    min-width: 100%;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.background};
  position: sticky;
  top: 72px;    
  z-index: 100;
  overflow-x: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const PlaceNameWrapper = styled.div`
  display:flex;
  justify-content:start;
  align-items:center;
  gap:0.5rem;
  width:100%;
  font-family:${({theme})=>theme.fontFamily.semiBold};
  font-size:0.875rem;
  line-height:1rem;
  color:#ffffff;
`

export const PlaceDistanceWrapper = styled.div`
  font-family:${({theme})=>theme.fontFamily.regular};
  font-size:0.625rem;
  line-height:0.875rem;
  color:#ffffff;
  display:flex;
  align-items:center;
  gap:0.75rem;
`

export const PlaceLine = styled.div<{line: number}>`
  width: 1px;
  background-color: #ffffff;
  margin-left:calc(1.25rem - 1px);
  height: ${({ line = 0 }) => {
    // 로그 함수를 사용하여 0-100을 0-2rem으로 매핑
    // line이 0일 때는 0을 반환
    if (line <= 0) return '0';
    
    // 로그 스케일 계산 (1을 더해 발산 방지)
    const logValue = Math.log(line + 1);
    const maxLog = Math.log(101); // 100 + 1
    
    // 0-2rem 범위로 매핑
    const heightInRem = (logValue / maxLog) * 2;
    
    return `${heightInRem}rem`;
  }};
`;

export const PlaceWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  gap:0.5rem;
  width:100%;
`

export const MarkerWrapper = styled.div`
  border-radius:50%;
  background-color:#434343;
  padding:0.5rem;
  `