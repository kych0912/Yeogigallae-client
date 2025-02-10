import styled from "styled-components";
import Card from "../../../components/Card";
import CommonContainer from "../../../components/Layout/CommonContainer";

export const StyledCommonContainer = styled(CommonContainer)`
  font-family: ${({ theme }) => theme.fontFamily.medium};
`

export const Content = styled.div`
  font-size: 0.875rem;
  color: #6E6E6E;
  text-align: center;
  line-height: 1.25rem;
  font-size: 0.875rem;
  margin-top: 0.75rem;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const ReContent = styled.div`
  font-size: 0.875rem;
  color: #fff;
  text-align: center;
  line-height: 1.25rem;
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const StyledCardTitle = styled(Card.Title)`
  display: block;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.Bold};

  br {
    display: block; 
    height: 0;
    line-height: 0; 
    margin: 0;
    padding: 0;
  }
`;

export const StyledCard = styled(Card)`
  width: 100%;
  border-radius: 1.875rem;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const StyledItem = styled(Card.Item)`
  display: flex;
  flex-direction: row; 
  justify-content: center; 
  align-items: center; 
  text-align: center;
  width: 100%;
  height: 2.313rem; 
  margin-bottom: 0.5rem;
  gap: 0.063rem;
  font-size: 1rem;
`;

export const CustomCardItem = styled(Card.Item)`
  line-height: 1.5;
  display: inline-block;
  text-align: left;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
  color: #007bff;
  display: flex;
  bottom: 0;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  &:hover {
    color: #0056b3;
  }

  svg {
    width: 1.5rem;
    height: 1.5em;
  }
`;

export const TwoSelect = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between; 
  gap: 1rem; 
  font-family: ${({ theme }) => theme.fontFamily.medium};

  button {
    font-family: ${({ theme }) => theme.fontFamily.medium};
    color: #fff;
    background-color: #434343;
    transition: background-color 0.3s ease;

    &:hover, &:focus, &:active {
      background-color: #3b46f1; 
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 15.625rem;
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const TruncatedText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
  font-size: 1rem;
  color: #fff;
  font-family: ${({ theme }) => theme.fontFamily.medium};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start; 
  align-items: flex-start; 
`;

export const CustomWrapper = styled.div`
  display: flex;
  width: 100%;  
  flex-direction: row; 
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 0; 
`;

export const text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin: 0 8.125rem;
  color: #ffffff; 
  font-family: ${({ theme }) => theme.fontFamily.regular};
`;

export const Custom = styled.div`
  margin-bottom: 0.625rem;
`;

export const CustomItem = styled.div`
  margin-top: 0.75rem;
`;

export const RecommendButton = styled.div`
  display: flex;
  justify-content: space-between; 
  align-items: center;
  gap: 0.625rem;
  width: 100%;
  margin: 0 5rem;
`;

export const CustomSpacer = styled(Card.Divider)`
  background-color: transparent !important;
`;

export const FixedSizeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  border-radius: 16px; 
  height: 2.688rem;
  width: 100%;
  color: #fff;
  border: none;
  font-family: ${({theme}) => theme.fontFamily.medium};
  background-color: #3d46f1;
`;


