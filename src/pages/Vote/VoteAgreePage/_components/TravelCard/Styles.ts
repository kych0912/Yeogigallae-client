import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 16px 0;
  width: 100%;
`;

export const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  color: #fff;
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #3b46f1;
  color: #fff;
  border: none;
  border-radius: 1.5rem;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  &:hover {
    background-color: #2f3ab2;
  }
`;