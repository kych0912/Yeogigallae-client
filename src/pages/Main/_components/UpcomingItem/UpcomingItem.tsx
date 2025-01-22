import * as S from "../Main.Styles";
import * as U from "./UpcomingItem.Styles";
import { UPcomingRooms } from "../../MainPage/test";
import Calender2 from "../../../../assets/icons/Calender2.svg";

export default function UpcomingItem() {
    return (
        <S.RowTravelList>
            {UPcomingRooms.map((room) => (
                <U.TravelList key={room.id}>
                    <U.ImageWrapper>
                        <S.Image src={room.image} alt={`${room.name} 이미지`} />
                    </U.ImageWrapper>
                    <U.InfoWrapper>
                        <S.TextBox>
                            <S.Title>{room.name}</S.Title>
                            <S.Location>{room.location}</S.Location>
                        </S.TextBox>
                        <U.Date>
                            <img src={Calender2} alt="Calender2 Icon" />
                            {room.date}
                        </U.Date>
                    </U.InfoWrapper>
                </U.TravelList>
            ))}
        </S.RowTravelList>
    );
}
