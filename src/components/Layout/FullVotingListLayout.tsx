import Header from "../Header";
import FilterIcon from "../../assets/icons/filter.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
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
                centerContent={<HeaderCenterContent title={"참여하기 목록"} />}
                rightContent={
                    <IconButton onClick={() => navigate("/")}>
                        <FilterIcon />
                    </IconButton>
                }
            />
            <main>
                <Outlet />
            </main>
        </>
    );
}
