import styled from "styled-components";

export const Typography = styled.div`
    font-size: 1.25rem;
    color: #ffffff;
    font-weight: 500;
    line-height: 1.178rem;
    display: flex;
    align-items: center;
`;

export const Title = styled.span`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const Number = styled.div`
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    color: #434343;
    margin-left: 0.375rem;
    flex-shrink: 0;
`;

export default function HeaderCenterContent({ title, number }: { title: string; number?: number }) {
    return (
        <Typography>
            <Title>{title}</Title>
            {number && <Number>{number}</Number>}
        </Typography>
    );
}
