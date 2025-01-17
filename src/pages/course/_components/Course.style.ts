import styled from "styled-components";
import Card from "../../../components/Card";
import { Swiper } from "swiper/react";

export const Container = styled.div`
  margin:0 1.25rem 1rem 1.25rem;
  min-height: calc(100vh - 92px);
  position: relative;
`

export const StyledDivider = styled(Card.Divider)`

`;

export const TitleWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  gap:0.5rem;
  width:100%;
`

export const Content = styled.div`
  font-family:${({theme})=>theme.fontFamily.medium};
  font-size:${({theme})=>theme.fontSize.medium};
  line-height:1.125rem;
  color:#ffffff;
`

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 3.125rem;
  border: none;
  outline: none;
  resize: none;
  background-color: transparent;
  font-family: ${({theme}) => theme.fontFamily.medium};
  font-size: ${({theme}) => theme.fontSize.medium};
  color:#ffffff;
  display:block;
  
  // 자동 높이 조절을 위한 설정
  overflow: auto;
  
  &::placeholder {
    text-align: center;
    // placeholder의 위치를 정중앙으로
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    color:#434343;
  }
`

export const NaverContent = styled(Content)`
  line-height:2rem;
  color:#03C75A;
  display:flex;
  align-items:center;
  gap:0.625rem; 
`

export const Caption = styled.div`
  font-family:${({theme})=>theme.fontFamily.regular};
  font-size:${({theme})=>theme.fontSize.small};
  color:#ffffff;
`

export const DetailCardWrapper = styled.div`
  width: calc(100% - 95px);
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  width: 100%;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.5s;
`;


export const StyledSwiper = styled(Swiper)`
  padding-bottom: 2rem;  

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s;
    height: auto;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.5);
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    width: 16px;
    background: white;
    border-radius: 4px;
  }
`;

export const CompleteMessage = styled.div`
    color:#434343;
    text-align:center;
    font-size:0.875rem;
    font-family:${({theme})=>theme.fontFamily.regular};
    line-height:1.125rem;
    margin-top:0.75rem;
`

