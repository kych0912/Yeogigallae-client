import styled from "styled-components";
import { BaseButton } from "../../../../../components/Button/Button.styles";

interface ButtonProps {
    $isActive?: boolean;
    size?: string;
}

export const ButtonTypography = styled.div`
    font-family:${({theme})=>theme.fontFamily.regular};
`

export const DayButton = styled(BaseButton)<ButtonProps>`
    padding: 0.875rem 2rem;
    background-color: ${({$isActive, theme}) => $isActive ? theme.colors.primary : theme.colors.secondary};
    color: #ffffff;
    font-family: ${({$isActive, theme}) => $isActive ? theme.fontFamily.semiBold : theme.fontFamily.regular};
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
  background-color: #0a0a0a;
  position: sticky;
  top: 72px;    
  z-index: 100;
  overflow-x: scroll;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;