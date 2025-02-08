import Header from "../Header";
import { useState } from "react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderCenterContent from "../Header/HeaderCenterContent";

export default function Layout() {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleRightContentClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

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
                    <IconButton onClick={handleRightContentClick}>
                        <FilterIcon />
                    </IconButton>
                }
            />
            <main>
                <Outlet context={{ isModalVisible, handleCloseModal }} />
            </main>
        </>
    );
}
