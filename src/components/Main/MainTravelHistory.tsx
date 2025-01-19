import React, { useState } from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import International from "../../assets/icons/International.svg";
import Domestic from "../../assets/icons/Domestic.svg";
import History from "../../assets/icons/History.png";
import TravelListItem from "./TravelListItem";

const MainTravelHistory: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string>("domestic");

    const handleButtonClick = (buttonType: string) => {
        setSelectedButton(buttonType);
    };

    return (
        <S.HistoryContainer>
            <MainSection
                leftContent={
                    <>
                        <img src={History} alt="History Icon" /> 완료된 여행
                    </>
                }
                rightContent={0}
            />
            <S.BtnBar>
                <S.selectBtn selected={selectedButton === "domestic"} size="medium" onClick={() => handleButtonClick("domestic")}>
                    <img src={Domestic} alt="Domestic" /> 국내여행
                </S.selectBtn>
                <S.selectBtn selected={selectedButton === "international"} size="large" onClick={() => handleButtonClick("international")}>
                    <img src={International} alt="International" /> 해외여행
                </S.selectBtn>
            </S.BtnBar>
            {/* 완료된 여행 리스트  */}
            <TravelListItem />
        </S.HistoryContainer>
    );
};

export default MainTravelHistory;
