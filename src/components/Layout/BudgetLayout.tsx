import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
import { budgetPageData } from "../../pages/Budget/test";
import HeaderCenterContent from "../Header/HeaderCenterContent";

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
                centerContent={<HeaderCenterContent title={budgetPageData.roomName} number={budgetPageData.peopleCount} />}
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
