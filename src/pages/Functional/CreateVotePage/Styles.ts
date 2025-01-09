import styled from "styled-components";

export const Typography = styled.div`
  font-size:1rem;
  color:#ffffff;
  font-weight:500;
  line-height:1.178rem;
  position: relative;
`
export const HeaderContainer = styled.div`
  position: relative;
  top: 0;
  left:0;
  width: 100%;
`;

// 기본 컨테이너
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.secondary};
  color: #fff;
  height: 100vh;
`;
