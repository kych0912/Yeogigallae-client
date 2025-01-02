import styled, { css } from 'styled-components';
import { ButtonProps } from '../../types/button';


const smallButtonStyle = css`
    padding: 0.75rem 0.875rem;
    font-size: 1rem;
    border-radius: 6.25rem;
    line-height: 1.178rem;
    font-weight: 500;
`;

const mediumButtonStyle = css`
    padding: 0.625rem 1.375rem;
    font-size: 1.25rem;
    border-radius: 1rem;
    line-height: 1.473rem;
    font-weight: 600;
`;

const largeButtonStyle = css`
    width: 100%;
    padding: 1rem 0;
    font-size: 1.25rem;
    border-radius: 1rem;
    line-height: 1.473rem;
    font-weight: 500;
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
`;


export const IconButtonByBaseButton = styled(BaseButton)`
    padding:0.75rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
`;
