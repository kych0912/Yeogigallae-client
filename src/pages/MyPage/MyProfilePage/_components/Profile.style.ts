import styled from 'styled-components';

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
    object-fit:cover;
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

export const ServiceSetting = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    width:100%;
    gap:1.5rem;
  `,
  Title: styled.div`
    font-size:1rem;
    font-family:${({theme}) => theme.fontFamily.semiBold};
    color:#ffffff;
  `,
  Setting:styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width:100%;
    padding-left:0.875rem;
    font-family:${({theme}) => theme.fontFamily.regular};
    color:#ffffff;
    font-size:0.875rem;
    line-height:1rem;
  `
}
