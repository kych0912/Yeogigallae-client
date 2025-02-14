import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import HeaderCenterContent from "../Header/HeaderCenterContent";
import { HeaderConfig } from "../../types/header/header";
import { useNavigate } from "react-router-dom";


export default function Layout() {
    const navigate = useNavigate();
    const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({title:""});
    const { title, number, leftFunction, rightFunction } = headerConfig;

    return (
        <>
            <Header
                leftContent={
                    <IconButton onClick={leftFunction ?? (() => navigate(-1))}>
                        <BackIcon />
                    </IconButton>
                }
                centerContent={
                    <HeaderCenterContent title={title} number={number} />
                }
                rightContent={
                    <IconButton onClick={rightFunction ?? (() => navigate("/"))}>
                        <HomeIcon />
                    </IconButton>
                }   
            />
            <main>
                <Outlet context={{setHeaderConfig}} />
            </main>
        </>
    );
}