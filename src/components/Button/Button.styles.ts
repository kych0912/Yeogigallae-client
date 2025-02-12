import styled, { css } from 'styled-components';
import { ButtonProps } from './types';


const smallButtonStyle = css`
    padding: 0.875rem 2rem;
    font-size: ${({theme}) => theme.fontSize.small};
    font-family:${({theme}) => theme.fontFamily.medium};
    border-radius: 6.25rem;
    line-height: 1.178rem;
    font-weight: 500;
`;

const mediumButtonStyle = css`
    padding: 0.625rem 1.375rem;
    font-size: ${({theme}) => theme.fontSize.medium};
    border-radius: 1rem;
    line-height: 1.473rem;
    font-family:${({theme}) => theme.fontFamily.medium};
`;

const largeButtonStyle = css`
    width: 100%;
    padding: 1rem 0;
    font-size: ${({theme}) => theme.fontSize.large};
    font-family:${({theme}) => theme.fontFamily.medium};
    border-radius: 1rem;
    line-height: 1.473rem;
`;

const buttonSizes = {
    small: smallButtonStyle,
    medium: mediumButtonStyle,
    large: largeButtonStyle
};

const outlineButtonStyle = css<ButtonProps>`
    background-color: ${({ color="secondary", theme }) => theme.colors[color]};
    border: 1px solid ${({ color="secondary" }) => color === 'primary' ? '#ffffff' : '#616161'};
    color: ${({ color="secondary" }) => color === 'primary' ? '#ffffff' : '#616161'};
`;

const containedButtonStyle = css<ButtonProps>`
    background-color: ${({ color = 'primary', theme }) => theme.colors[color]};
    color: ${({ color = 'primary' }) => color === 'primary' ? '#ffffff' : '#616161'};
    border: none;
`;

const buttonVariants = {
    outline: outlineButtonStyle,
    contained: containedButtonStyle
};

export const BaseButton = styled.button<ButtonProps>`
    ${({ size = 'medium' }) => buttonSizes[size]}
    ${({ variant = 'contained' }) => buttonVariants[variant]}
    outline: none;
    white-space: nowrap;
    font-family:${({theme}) => theme.fontFamily.medium}; 
    ${({ disabled }) => disabled && css`
        opacity: 0.5;
        background-color: #454545;
    `}
`;


export const IconButtonByBaseButton = styled(BaseButton)`
    padding:0.75rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
`;
