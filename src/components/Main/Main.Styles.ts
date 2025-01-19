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
    border: ${({ theme }) => `0.063rem solid ${theme.colors.GrayText || "#6E6E6E"}`};
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    img {
        width: 1.5rem;
        height: 1.5rem;
    }
`;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSize.medium || "1.25rem"};
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.GrayText || "#6E6E6E"};
    line-height: 1.5;
`;

//투표중 정렬을 위한 박스
export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
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
export const ParticipantContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const ProfileImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: -0.5rem;
    border: none;
    z-index: 1;
    box-shadow: -0.25rem 0.25rem 1rem 0px #000000;

    &:first-child {
        margin-left: 0;
    }
`;
export const ProfileImageOverlay = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: -0.5rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    &:first-child {
        margin-left: 0;
    }
`;

export const RemainingTime = styled.div`
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.primary};
    text-align: right;
    align-self: flex-start;
`;
export const VoteBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.375rem;
`;
export const VoteText = styled.div`
    font-size: 0.675rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: white;
    text-align: left;
    flex-grow: 1;
    align-items: flex-s;
`;

//투표중 게이지 160*5
export const VoteGauge = styled.div`
    width: 10rem;
    height: 0.313rem;
    background: ${({ theme }) => theme.colors.GrayText || "#6E6E6E"};
    border-radius: 0.25rem;
    overflow: hidden;
    border: none;
`;

export const VoteBar = styled.div`
    height: 100%;
    border-radius: 0.25rem;
    background: ${({ theme }) => theme.colors.primary};
`;
//예정된 여행
export const Image = styled.img`
    width: 8.125rem;
    height: 8.125rem;
    border-radius: 1.25rem;
`;
export const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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
    gap: 1rem;
    width: 100vw;
    box-sizing: border-box;
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

//카드들, 각 아이템들들
export const TravelListItem = styled(Card)`
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
`;
export const VotingItem = styled(Card)`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    flex-shrink: 0;
    gap: 1.375rem;
`;

export const UpcomingItem = styled(Card)`
    height: 9.875rem;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
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
