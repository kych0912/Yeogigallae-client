import styled from "styled-components";
import Card from "../../../../../components/Card";

export const Container = styled(Card)`
  width: 100%;
  background: white;
  border-radius: 30px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

export const StyledItem = styled(Card.Item)`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center; 
  text-align: center;
  width: 7.5rem 
  height: 2.313rem; 
  margin-bottom: 0.5rem;
  gap: 0.063rem;
  font-size: 1rem;
`;