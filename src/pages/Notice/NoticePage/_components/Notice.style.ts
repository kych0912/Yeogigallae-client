import styled from "styled-components";

export const NoticeItem = {
    TitleContainer: styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:start;
        gap:0.375rem;
    `,
    Title: styled.div<{$isRead:boolean}>`
        font-family:${({theme}) => theme.fontFamily.semiBold};
        font-size:1rem;
        color:${({$isRead}) => $isRead ? '#6E6E6E' : '#ffffff'};
        line-height:20px;
    `,
    Caption: styled.div`
        font-family:${({theme}) => theme.fontFamily.regular};
        font-size:0.875rem;
        color:#434343;
        line-height:20px;
    `,
}

export const Wrapper = {
    NoticeWrapper:styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        margin-top:1.375rem;    
    `,
    IconWrapper: styled.div`
        border-radius:15px;
        width:3rem;
        height:3rem;
        background-color:${({theme}) => theme.colors.secondary};
        display:flex;
        justify-content:center;
        align-items:center;
    `,
    LeftWrapper: styled.div`
        display:flex;
        gap:0.75rem;
        justify-content:start;
        align-items:center;
    `,
    RightWrapper: styled.div`
        display:flex;
        justify-content:end;
        align-items:center;
    `,
    NoticeUpdateCircle: styled.div`
        border-radius:50%;
        width:10px;
        height:10px;
        background-color:${({theme}) => theme.colors.primary};
    `
}