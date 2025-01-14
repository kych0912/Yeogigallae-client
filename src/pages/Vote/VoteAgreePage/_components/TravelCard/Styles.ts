import styled from "styled-components";
import Card from "../../../../../components/Card";

export const Container = styled(Card)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;

export const StyledItem = styled(Card.Item)`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center; 
  gap: 1px;
  width: 7.5rem 
  height: 2.313rem; 
`;