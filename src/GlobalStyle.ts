import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  h1 {
    color: ${({ theme }) => theme.colors.primary}; 
    text-align: center;
  }
`;
