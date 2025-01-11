import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 1.5rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
`;

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

export const InfoLabel = styled.div`
  color: #fff;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 4px;
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