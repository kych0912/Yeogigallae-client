import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { budgetPageData } from "../../pages/Budget/test";

export default function Layout() {
    const navigate = useNavigate();

    return (
        <>
            <Header
                leftContent={
                    <IconButton onClick={() => navigate(-1)}>
                        <BackIcon />
                    </IconButton>
                }
                centerContent={
                    <Typography>
                        <Title>예산 정하기</Title>
                        <Text>{budgetPageData.peopleCount}</Text>
                    </Typography>
                }
                rightContent={
                    <IconButton onClick={() => navigate("/")}>
                        <HomeIcon />
                    </IconButton>
                }
            />
            <main>
                <Outlet />
            </main>
        </>
    );
}

const Typography = styled.div`
    font-size: 1.25rem;
    font-family: ${({ theme }) => theme.fontFamily.medium};
    line-height: 1.178rem;
    gap: 0.375rem;
    display: flex;
    flex-direction: row;
`;

const Title = styled.div`
    color: #ffffff;
`;

const Text = styled.div`
    color: ${({ theme }) => theme.colors.GrayText || "#f0f0f0"};
`;
