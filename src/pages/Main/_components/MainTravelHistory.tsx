import { useState } from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import International from "../../../assets/icons/International.svg";
import Domestic from "../../../assets/icons/Domestic.svg";
import History from "../../../assets/icons/History.png";
import TravelListItem from "./TravelListItem/TravelListItem";
import Empty from "./TravelListItem/Empty";
import { useGetTravelList } from "../../../react-query/queries/main/TravelList/queries";
import { HistoryCardSkeleton } from "./CardSkeleton";
import { Room } from "../../../apis/main/TravelList/types";

export default function MainTravelHistory() {
    const { data, isLoading, error } = useGetTravelList(); // data는 TravelListResult 타입

    if (error) {
        console.error("Error TravelHistory upcoming rooms:", error);
    }

    const [selectedButton, setSelectedButton] = useState<string>("domestic");

    const handleButtonClick = (buttonType: string) => {
        setSelectedButton(buttonType);
    };

    const trips = data?.trips || [];
    const filteredRooms: Room[] = trips.filter((room) => (selectedButton == "domestic" ? room.tripType === "DOMESTIC" : room.tripType === "INTERNATIONAL")) as Room[];

    return (
        <S.HistoryContainer>
            <MainSection
                leftContent={
                    <>
                        <img src={History} alt="History Icon" /> 완료된 여행
                    </>
                }
                rightContent={data?.totalCount || 0}
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
            {isLoading ? <HistoryCardSkeleton /> : filteredRooms.length > 0 ? <TravelListItem rooms={filteredRooms} /> : <Empty />}
        </S.HistoryContainer>
    );
}
