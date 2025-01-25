import styled from "styled-components";
import { Caption, TitleWrapper } from "../../../_components/Course.style";
import CardImage from "../../../../../components/Card/CardImage";


// Chat 관련 스타일 그룹화
export const Chat = {
  Wrapper: styled.div`
    margin-top: 2rem;
  `,

  Message: styled.div<{$isMine:boolean}>`
    display: flex;
    gap: 0.625rem;
    justify-content:${({$isMine}) => $isMine ? 'flex-end' : 'flex-start'};
  `,

  Avatar: styled.img`
    width: 2.875rem;
    height: 2.875rem;
    border-radius: 50%;
    flex-shrink: 0;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    max-width: 18.75rem;
    width: 100%;
  `,

  Author: styled.div`
    font-family: ${({theme}) => theme.fontFamily.regular};
    font-size: ${({theme}) => theme.fontSize.medium};
    color: #434343;
  `
} as const;

// Card 내부 콘텐츠 관련 스타일 그룹화
export const Card = {
  Image: styled(CardImage)`
    width: 100%;
    height: 150px;
  `,

  Text: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
    font-family: ${({theme}) => theme.fontFamily.regular};
    font-size: 0.875rem;
    color:#ffffff;
  `,

  Section: styled(TitleWrapper)`
    gap: 2px;
  `,

  PlaceContainer: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  `,

  Label: styled(Caption)`
    font-family: ${({theme}) => theme.fontFamily.regular};
    font-size: 0.625rem;
    color: #ffffff;
  `
} as const;

export const Toggle = {
    Title: styled.h1`
        color:#ffffff;
        font-family: ${({theme}) => theme.fontFamily.medium};
        font-size: 1rem;
        margin: 0;
    `,
    Wrapper: styled.button`
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0.875rem;
        border: none;
        border-radius: 1.875rem;
        cursor: pointer;
        background-color: #222222;
        font-family: ${({theme}) => theme.fontFamily.semiBold};
        font-size: ${({theme}) => theme.fontSize.medium};
        justify-content:space-between;
    `
}