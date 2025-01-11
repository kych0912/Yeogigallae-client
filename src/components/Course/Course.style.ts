import styled from "styled-components";
import Card from "../Card";
import { Swiper } from "swiper/react";

export const StyledDivider = styled(Card.Divider)`
  margin-bottom: 36px;
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

export const Caption = styled.div`
  font-family:${({theme})=>theme.fontFamily.medium};
  font-size:${({theme})=>theme.fontSize.small};
  color:#ffffff;
`

export const ButtonWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  gap:0.5rem;
  width:100%;
  padding:1rem 0;
  background-color:${({theme})=>theme.colors.background};
  position:sticky;
  top:60px;
  z-index:100;
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
  height: auto;
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
