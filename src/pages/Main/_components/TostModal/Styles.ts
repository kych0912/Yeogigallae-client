import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(10px);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 1rem;
`;

export const ModalContent = styled.div`
    background: #1a1a1a;
    border-radius: 1rem;
    width: 90%;
    max-width: 400px;
    padding: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
`;

export const CloseButton = styled.button`
    background: transparent;
    border: none;
    color: white;
    font-size: 1.5rem;
    align-self: flex-end;
    cursor: pointer;
`;

export const Title = styled.h2`
    color: white;
    font-size: 1.25rem;
    text-align: center;
`;

export const Options = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    gap: 1rem;
`;

export const Option = styled.div<{ selected?: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    background: ${({ selected }) => (selected ? "#4caf50" : "#333")};
    padding: 1rem;
    border-radius: 0.5rem;
    transition: background 0.3s;

    &:hover {
        background: #555;
    }
`;

export const Icon = styled.img`
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.5rem;
`;

export const OptionText = styled.span`
    color: white;
    font-size: 0.875rem;
`;

export const ApplyButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    width: 100%;

    &:hover {
        background: #0056b3;
    }
`;
