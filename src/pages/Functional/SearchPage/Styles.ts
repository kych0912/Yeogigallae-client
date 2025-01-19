import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.938rem;
  gap: 16px;
`;

export const Instructions = styled.div`
  font-size: 20px;
  color: #6e6e6e;
  padding: 0 10px;
  margin-bottom: 30px;
  ul {
    margin: 10px 0 0 16px;
  }
  li {
    font-size: 16px;
    padding: 2px 0;
  }
`;