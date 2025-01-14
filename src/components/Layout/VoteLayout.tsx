import Header from "../Header"
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import styled from 'styled-components'
import { Outlet, useNavigate } from 'react-router-dom';
import { afterData } from "../../pages/Vote/VoteCompletePage/_data/afterData";

export default function Layout() {
    const navigate = useNavigate();

    return (
        <>
            <Header 
                leftContent={
                    <IconButton onClick={ (() => navigate(-1))}>
                        <BackIcon/>
                    </IconButton>
                }
                centerContent={<Typography>{afterData.groupId}{afterData.groupMembers}</Typography>}
                rightContent={
                    <IconButton onClick={() => navigate('/')}>
                        <HomeIcon/>
                    </IconButton>
                }
            />
            <main>
                <Outlet />
            </main>
        </>
    )
}

const Typography = styled.div`
  font-size:1rem;
  color:#ffffff;
  font-weight:500;
  line-height:1.178rem;
`