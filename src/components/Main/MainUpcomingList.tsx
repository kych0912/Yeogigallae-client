// 홈 화면 : 예정된 여행
import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import UpcomingItem from "./UpcomingItem";
import Upcoming from "../../assets/icons/Upcoming.svg";

const MainUpcomingList: React.FC = () => {
    return (
        <S.Container>
            <MainSection
                leftContent={
                    <>
                        <img src={Upcoming} alt="Upcoming Icon" /> 예정된 여행
                    </>
                }
                rightContent={0}
            ></MainSection>

            {/*카드부분*/}
            <UpcomingItem />
        </S.Container>
    );
};

export default MainUpcomingList;
