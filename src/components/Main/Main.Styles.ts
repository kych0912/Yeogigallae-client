import styled from "styled-components";
import BaseButton from "../Button/Button";
import IconButton from "../Button/IconButton";

//컨테이너

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 100%;
    gap: 0.625rem;
    flex-direction: column;
`;

export const TopContainer = styled(Container)`
    flex-direction: row;
    justify-content: space-between;
    height: 4.75rem;
    margin-top: 1.25rem;
    padding: 0 1.25rem;
    box-sizing: border-box;
`;

export const ListContainer = styled(Container)`
    overflow-x: auto;
    white-space: nowrap;
    flex-direction: row;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const HistoryContainer = styled(Container)`
    flex-direction: column;
    justify-content: center;
    height: auto;
    gap: 0.875rem;
`;

export const Emptylist = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

//메인 탑
export const Title = styled.h1`
    font-size: 1.5rem;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.white || "#ffffff"};
    line-height: 1.5;
`;

export const CustomIconButton = styled(IconButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    margin-left: 1rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.textOnPrimary || "#fff"};
    border: ${({ theme }) => `0.063rem solid ${theme.colors.GrayText || "#6E6E6E"}`};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }
`;
export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
`;
export const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSize.medium || "1.25rem"};
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.GrayText || "#6E6E6E"};
    line-height: 1.5;
`;

export const Location = styled.p`
    font-size: 0.75rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: white;
`;
export const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    gap: 0.375rem;
    width: 100%;
    height: 100%;
`;

//예정된 여행
export const Image = styled.img`
    width: 8.125rem;
    height: 8.125rem;
    border-radius: 1.25rem;
`;
//완료된 여행

export const BtnBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 0 1.25rem;
    box-sizing: border-box;
    gap: 0.5rem;
`;
//카드 리스트들들
export const TravelList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    box-sizing: border-box;
    padding: 0 1.25rem;
`;
export const RowTravelList = styled.div`
    display: inline-flex;
    flex-direction: row;
    overflow-x: auto;
    white-space: nowrap;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    padding: 0 1.25rem;

    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
`;

export const selectBtn = styled(BaseButton)<{ selected: boolean }>`
    color: ${({ theme, selected }) => (selected ? "#fff" : theme.colors.GrayText)};
    background-color: ${({ theme, selected }) => (selected ? theme.colors.GrayText : theme.colors.secondary)};
    font-family: ${({ theme, selected }) => (selected ? theme.fontFamily.medium : theme.fontFamily.regular)};
    border: none;
    width: 11.875rem;
    height: 3.25rem;
    font-size: 1.25rem;
`;

export const Icon = styled.img`
    padding: 0 0.625rem 0 0;
    align-self: center;
`;
