import styled from "styled-components";
import BaseButton from "../Button/Button";

export const Container = styled.div`
    align-items: center;
    margin-top: 6.25rem;
    padding: 0 1.25rem;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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
    padding: 0.875rem 0;
    color: #371d1e;
    background-color: #fae100;
    width: 100%;
`;
