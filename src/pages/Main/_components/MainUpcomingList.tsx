import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import UpcomingItem from "./UpcomingItem/UpcomingItem";
import Upcoming from "../../../assets/icons/Upcoming.svg";
import { UPcomingRooms } from "../MainPage/test";
import Empty from "./UpcomingItem/Empty";

export default function MainUpcomingList() {
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
}
