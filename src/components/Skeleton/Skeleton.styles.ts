import styled, { css, keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
`;

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'circle' | 'rectangular' | 'text';
  width?: string;
  height?: string;
}

const getVariantStyles = (variant?: 'circle' | 'rectangular' | 'text') => {
  switch (variant) {
    case 'circle':
      return css`border-radius: 50%;`;
    case 'text':
      return css`border-radius: 4px;`;
    case 'rectangular':
    default:
      return css`border-radius: 8px;`;
  }
};

export const Base = styled.div<SkeletonProps>`
  background-color: #e1e1e1;
  animation: ${pulse} 1.5s ease-in-out infinite;
  ${({ variant }) => getVariantStyles(variant)}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`;
