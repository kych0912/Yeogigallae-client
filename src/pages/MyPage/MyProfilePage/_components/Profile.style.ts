import styled from 'styled-components';

export const Container = styled.div`
  margin:0 1.25rem 1rem 1.25rem;
  min-height: calc(100vh - 88px);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`

export const UserProfile = {
  Container: styled.div`
    display: flex;
    gap:1rem;
    justify-content: start;
    align-items: center;
    width:100%;
    margin-top:1.875rem;
    margin-bottom:2.5rem;
  `,
  Avatar: styled.img`
    width:5rem;
    height:5rem;
    border-radius:50%;
  `,
  NameContainer: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  `,
  NameTypography: styled.div`
    font-size:1.5rem;
    font-family:${({theme}) => theme.fontFamily.bold};
    line-height:2rem;
    color:#ffffff;
  `,
  InfoTypography: styled.div`
    font-size:0.75rem;
    font-family:${({theme}) => theme.fontFamily.regular};
    color:#434343;
    line-height:0.875rem;
    margin-top:0.25rem;
  `
}
