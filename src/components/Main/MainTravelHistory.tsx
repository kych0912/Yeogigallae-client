import React, { useState } from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";

const MainTravelHistory: React.FC = () => {
    const [selectedButton, setSelectedButton] = useState<string>("domestic");

    const handleButtonClick = (buttonType: string) => {
        setSelectedButton(buttonType);
    };

    return (
        <S.HistoryContainer>
            <MainSection leftContent={"🙏 완료된 여행"} rightContent={0} />
            <S.BtnBar>
                <S.selectBtn selected={selectedButton === "domestic"} size="medium" onClick={() => handleButtonClick("domestic")}>
                    {"🌍 국내여행"}
                </S.selectBtn>
                <S.selectBtn selected={selectedButton === "international"} size="large" onClick={() => handleButtonClick("international")}>
                    {"🌍 해외여행"}
                </S.selectBtn>
            </S.BtnBar>
            <S.TravelList>
                <S.TravelListItem>
                    <S.Text>새로운 여행 기록으로 채워보세요!</S.Text>
                </S.TravelListItem>
            </S.TravelList>
        </S.HistoryContainer>
    );
};

export default MainTravelHistory;
