import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: transparent;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  #root {
    width: 430px; 
    height: 932px;
    background-color: ${({ theme }) => theme.colors.background}; 
    overflow: auto;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary}; 
    text-align: center;
  }
`;
