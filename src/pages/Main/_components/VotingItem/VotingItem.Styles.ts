import styled from "styled-components";

//투표중 정렬을 위한 박스

export const VotingItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary || "#222222"};
    border-radius: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    gap: 1.125rem;
    padding: 1.5rem 1.25rem;
    width: 23.125rem;
    height: auto;
    flex-shrink: 0;
`;
export const FullVotingItem = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.secondary || "#222222"};
    border-radius: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.regular};
    padding: 1.5rem 1.25rem;
    height: auto;
    width: 100%;
    gap: 1rem;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.375rem;
`;

export const EmptyBox = styled.div`
    width: 23.125rem;
    height: 9rem;
    background-color: ${({ theme }) => theme.colors.secondary || "#222222"};
    border-radius: 1.25rem;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const TextBox = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`;

export const ParticipantContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
`;

export const Title = styled.div`
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    color: white;
    line-height: 1.4;
`;

export const ProfileImage = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-left: -0.563rem;
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
    background-color: ${({ theme }) => theme.colors.GrayText};
    font-size: 0.75rem;
    color: white;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    box-shadow: -0.25rem 0.25rem 1rem 0px #000000;

    &:first-child {
        margin-left: 0;
    }
`;

export const RemainingTime = styled.div`
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.bold};
    color: ${({ theme }) => theme.colors.primary};
    text-align: right;
    align-self: center;
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

export const AItext = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: ${({ theme }) => theme.fontSize.medium};
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.primary};
    gap: 0.156rem;
`;
