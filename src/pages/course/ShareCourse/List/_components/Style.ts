import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap:1.25rem;
  padding-bottom:5rem;
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