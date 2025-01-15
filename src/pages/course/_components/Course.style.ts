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

export const PlaceWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:start;
  gap:0.5rem;
  width:100%;
`

export const MarkerWrapper = styled.div`
  border-radius:50%;
  background-color:#434343;
  padding:0.5rem;
  `

export const PlaceNameWrapper = styled.div`
  display:flex;
  justify-content:start;
  align-items:center;
  gap:0.5rem;
  width:100%;
  font-weight:500;
  font-size:0.875rem;
  line-height:1rem;
  color:#ffffff;
`

export const PlaceDistanceWrapper = styled.div`
  font-weight:500;
  font-size:0.75rem;
  line-height:0.875rem;
  color:#ffffff;
  display:flex;
  align-items:center;
  gap:0.75rem;
`

export const PlaceLine = styled.div<{line: number}>`
  width: 1px;
  background-color: #ffffff;
  margin-left:calc(1.25rem - 1px);
  height: ${({ line = 0 }) => {
    // 로그 함수를 사용하여 0-100을 0-2rem으로 매핑
    // line이 0일 때는 0을 반환
    if (line <= 0) return '0';
    
    // 로그 스케일 계산 (1을 더해 발산 방지)
    const logValue = Math.log(line + 1);
    const maxLog = Math.log(101); // 100 + 1
    
    // 0-2rem 범위로 매핑
    const heightInRem = (logValue / maxLog) * 2;
    
    return `${heightInRem}rem`;
  }};
`;

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

