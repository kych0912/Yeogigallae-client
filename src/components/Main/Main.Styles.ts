import styled from "styled-components";
import Card from "./Card/Card";
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
    margin: 1.25rem;
    padding: 0 1.25rem;
    box-sizing: border-box;
`;

export const ListContainer = styled(Container)`
    overflow-x: auto;
    white-space: nowrap;
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

//메인 탑
export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.large || "2.5rem"};
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
    border: ${({ theme }) => `1px solid ${theme.colors.GrayText || "#6E6E6E"}`};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

//투표중

export const ListItem = styled(Card)`
    height: 9rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSize.medium || "1.25rem"};
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.GrayText || "#6E6E6E"};
    line-height: 1.5;
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

export const TravelList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
`;

export const TravelListItem = styled(Card)`
    width: 23.125rem;
    height: 15.625rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;

export const selectBtn = styled(BaseButton)<{ selected: boolean }>`
    color: ${({ theme, selected }) => (selected ? "#fff" : theme.colors.GrayText)};
    background-color: ${({ theme, selected }) => (selected ? theme.colors.GrayText : theme.colors.secondary)};
    font-family: ${({ theme }) => theme.fontFamily.regular};
    border: none;
    width: 11.875rem;
    height: 3.25rem;
`;
