import Header from "../Header";
import { useState } from "react";
import FilterIcon from "../../assets/icons/filter.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderCenterContent from "../Header/HeaderCenterContent";
import withAuth from "../../pages/Login/withAuth";

function FullVotingListLayout() {
    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState<string>("");

    const handleRightContentClick = () => {
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleFilterChange = (filter: string) => {
        setSelectedFilter(filter);
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
                <Outlet context={{ isModalVisible, handleCloseModal, selectedFilter, handleFilterChange }} />
            </main>
        </>
    );
}

export default withAuth(FullVotingListLayout, false);