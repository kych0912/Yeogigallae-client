import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import Upcoming from "../../../assets/icons/Upcoming.svg";
import { UPcomingRooms } from "../MainPage/test";
import Empty from "./UpcomingItem/Empty";
import { useNavigate } from "react-router-dom";

export default function MainUpcomingList() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/course/upcoming");
    };

    return (
        <S.Container onClick={handleNavigate} style={{ cursor: "pointer" }}>
            <MainSection
                leftContent={
                    <>
                        <img src={Upcoming} alt="Upcoming Icon" /> 예정된 여행
                    </>
                }
                rightContent={UPcomingRooms.length}
            ></MainSection>

            {/*카드부분*/}
            {UPcomingRooms.length > 0 ? <UpcomingItem /> : <Empty />}
        </S.Container>
    );
}
