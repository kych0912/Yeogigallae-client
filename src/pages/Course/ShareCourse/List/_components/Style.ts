import styled from "styled-components";
import { Card } from "../../Share/_components/Style";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.25rem;
  padding-bottom:5rem;
  width: 100%;
`;

export const AddPlaceButton = styled.div`
    border: 1.5px dashed #434343;
    background-color:#222222;
    border-radius: 1.875rem;
    font-family:${({theme}) => theme.fontFamily.regular};
    display: flex;
    color:#434343;
    flex-direction: column;
    justify-content: center;
    font-size:0.875rem;
    align-items: center;
    padding: 1.375rem 1.25rem;
    gap: 0.75rem;
`
export const BottomButtonWrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  left: 0;
  right: 0;
  padding: 0 1.25rem;
  max-width: 425px;
  margin: 0 auto;
  box-sizing: border-box;
  
  & > button {
    width: 100%;
  }
`;

export const AddImage = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 1.5rem;
    border: 1.5px solid #434343;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap:0.5rem;
`;

export const AddImageText = styled.div`
    font-family:${({theme}) => theme.fontFamily.medium};
    font-size:1rem;
    color:#434343;
`;

export const AddImageCard = styled(Card.Image)`
    width:170px;
    width:100%;
`;

export const Delete = {
  Wrapper:styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width: 100%;
    gap:0.5rem;
  `,
  TitleWrapper:styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  `,
  Text:styled.div`
    font-family:${({theme}) => theme.fontFamily.semibold};
    font-size:1.25rem;
    color:white;
  `,
  Caption:styled.div`
    font-family:${({theme}) => theme.fontFamily.regular};
    font-size:0.75rem;
    color:#6E6E6E;
  `
}


