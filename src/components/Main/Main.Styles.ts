import styled from "styled-components";

export const Container = styled.div`
    position: relative; // 부모 컨테이너에 상대 위치 설정
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
`;

//메인탑탑
export const TopContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 4.75rem;
    width: 100%;
    margin: 1.25rem;
    padding: 0 1.25rem;
    box-sizing: border-box;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: ${({ theme }) => theme.fontSize.large || "2.5rem"};
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    color: ${({ theme }) => theme.colors.white || "#ffffff"};
    line-height: 1.5;
`;

export const Icon = styled.img`
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
`;

//투표중
export const ListContainer = styled(Container)`
    overflow-x: auto;
    white-space: nowrap;
`;

export const Text = styled.p`
    font-size: ${({ theme }) => theme.fontSize.medium || "1.25rem"};
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.white || "#ffffff"};
    line-height: 1.5;
`;

export const ListItem = styled.div`
    width: 23.125rem;
    height: 9rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fontSize.medium || "1.25rem"};
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.GrayText || "#6E6E6E"};
    line-height: 1.5;
`;

//완료된 여행

export const HistoryContainer = styled.div`
    position: relative; // 부모 컨테이너에 상대 위치 설정
    display: flex;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
`;
export const BtnBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    padding: 1.25rem 1.25rem 0 1.25rem;
    box-sizing: border-box;
    gap: 0.5rem;
    margin-top: 2rem;
`;

export const TravelList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    box-sizing: border-box;
    margin-top: 2rem;
`;

export const TravelListItem = styled.div`
    width: 24.375rem;
    height: 15.625rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    font-size: ${({ theme }) => theme.fontSize.medium || "1.25rem"};
    font-family: ${({ theme }) => theme.fontFamily.regular};
    color: ${({ theme }) => theme.colors.GrayText || "#6E6E6E"};
    line-height: 1.5;
`;
