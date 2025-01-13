import styled from "styled-components";
import BaseButton from "../Button/Button"; // 공통 컴포넌트 Button을 Base로 가져오기

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 6.25rem;
`;

export const Logo = styled.img`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
`;

export const Text = styled.p`
    font-size: 1rem;
    color: #6e6e6e;
    font-family: "PaperLodgy-Regular", sans-serif;
    margin-top: 1.25rem;
`;

export const KakaoButton = styled(BaseButton)`
    width: 24rem;
    padding: 0.875rem 0;
    color: #371d1e;
    background-color: #fae100;
`;
