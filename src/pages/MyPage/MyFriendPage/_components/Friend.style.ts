import styled from "styled-components";

export const Item = {
    AddCircle: styled.div`
        border-radius:50%;
        border:1px solid ${({theme}) => theme.colors.primary};
        width:2.5rem;
        height:2.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color:${({theme}) => theme.colors.primary};
        font-family:${({theme}) => theme.fontFamily.regular};
        font-size:1.5rem;
    `,
    Toggle: styled.div<{ isOpen: boolean }>`
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.3s ease;
        transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
        cursor: pointer;
    `,
    ToggleWrapper: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap:0.25rem;
        font-family:${({theme}) => theme.fontFamily.regular};
        font-size:0.875rem;
        color:#6E6E6E;
    `,
}

export const Accordion = {
    Wrapper: styled.div`
        display: flex;
        flex-direction: column;
        color:#ffffff;
        width:100%;
        margin-top:1.5rem;
    `,
    Title: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family:${({theme}) => theme.fontFamily.semiBold};
        font-size:1rem;
    `,
    ItemWrapper: styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.875rem;
        align-items: start;
        justify-content: center;
        margin-top:1.25rem;
    `,
    Item: styled.div`
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 0.75rem;
        padding: 0 0.875rem;
        font-family:${({theme}) => theme.fontFamily.regular};
        font-size:0.875rem;
        color:#ffffff;
    `,
    Avatar: styled.img`
        border-radius:50%;
        width:2.5rem;
        height:2.5rem;
    `,

}