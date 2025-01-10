import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24.375rem;
    height: 3.875rem;
    background-color: #fae100;
    color: #371d1e;
    font-size: 1.125rem;
    font-weight: 600;
    font-family: "PaperLodgy-Regular", sans-serif;
    border-radius: 1rem;
    margin-top: 6.25rem;
    cursor: pointer;
    border: none;
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
