import styled from "styled-components";
import Card from "./Card/Card";

//투표중 정렬을 위한 박스

export const VotingItem = styled(Card)`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    gap: 1.375rem;
    flex-direction: column;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    align-items: center;
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
