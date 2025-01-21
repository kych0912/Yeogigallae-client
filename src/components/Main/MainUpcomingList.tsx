// 홈 화면 : 예정된 여행
import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import Upcoming from "../../assets/icons/Upcoming.svg";
import { UPcomingRooms } from "../../pages/Main/MainPage/test";

const MainUpcomingList: React.FC = () => {
    return (
        <S.Container>
            <MainSection
                leftContent={
                    <>
                        <img src={Upcoming} alt="Upcoming Icon" /> 예정된 여행
                    </>
                }
                rightContent={UPcomingRooms.length}
            ></MainSection>

            {/*카드부분*/}
            <UpcomingItem />
        </S.Container>
    );
};

export default MainUpcomingList;
