import { useState } from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import International from "../../../assets/icons/International.svg";
import Domestic from "../../../assets/icons/Domestic.svg";
import History from "../../../assets/icons/History.png";
import TravelListItem from "./TravelListItem/TravelListItem";
import { completedRooms } from "../MainPage/test";
import Empty from "./TravelListItem/Empty";

export default function MainTravelHistory() {
    const [selectedButton, setSelectedButton] = useState<string>("domestic");

    const handleButtonClick = (buttonType: string) => {
        setSelectedButton(buttonType);
    };

    // 필터링된 데이터 생성
    const filteredRooms = completedRooms.filter((room) => (selectedButton === "domestic" ? room.type === "국내여행" : room.type === "세계여행"));

    return (
        <S.HistoryContainer>
            <MainSection
                leftContent={
                    <>
                        <img src={History} alt="History Icon" /> 완료된 여행
                    </>
                }
                rightContent={completedRooms.length}
            />
            <S.BtnBar>
                <S.selectBtn selected={selectedButton === "domestic"} size="large" onClick={() => handleButtonClick("domestic")}>
                    <S.Icon src={Domestic} alt="Domestic" /> 국내여행
                </S.selectBtn>
                <S.selectBtn selected={selectedButton === "international"} size="large" onClick={() => handleButtonClick("international")}>
                    <S.Icon src={International} alt="International" /> 해외여행
                </S.selectBtn>
            </S.BtnBar>
            {/* 완료된 여행 리스트 */}
            {filteredRooms.length > 0 ? (
                <TravelListItem rooms={filteredRooms} /> // rooms를 props로 전달
            ) : (
                <Empty />
            )}
        </S.HistoryContainer>
    );
}
