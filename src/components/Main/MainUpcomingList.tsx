// 홈 화면 : 예정된 여행
import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import Upcoming from "../../assets/icons/Upcoming.svg";
import { UPcomingRooms } from "../../pages/Main/MainPage/test";
import Empty from "./UpcomingItem/Empty";

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
            {UPcomingRooms.length > 0 ? <UpcomingItem /> : <Empty />}
        </S.Container>
    );
};

export default MainUpcomingList;
