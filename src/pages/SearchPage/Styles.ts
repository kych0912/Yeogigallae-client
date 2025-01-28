import styled from "styled-components";

export const ResultWrapper = styled.div`
  display: flex;
  aligh-items: center;
  justify-content: center;
  margin: 1.25rem 0;
  color: #6e6e6e;
  font-weight: regular;
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;