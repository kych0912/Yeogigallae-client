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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  margin:1rem 1.25rem;
`;

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  background-color: ;
  color: white;
  flex: 1;
`;

export const SubmitButton = styled.button`
  margin: 1rem 1.25rem;
  height: 58px;
  border: none;
  border-radius: 16px;
  margin-top: 16px;
  background-color: #6200ee;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #7c33ee;
  }

  &:focus {
    outline: none;
  }
`;