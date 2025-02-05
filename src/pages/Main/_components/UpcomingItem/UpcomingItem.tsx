import * as S from "../Main.Styles";
import * as U from "./UpcomingItem.Styles";
import Calender2 from "../../../../assets/icons/Calender2.svg";
import { useNavigate } from "react-router-dom";

// Room 타입 정의
interface Room {
    roomName: string;
    location: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
}

interface UpcomingItemProps {
    rooms: Room[]; // MainUpcomingList에서 전달하는 rooms 데이터
}

export default function UpcomingItem({ rooms }: UpcomingItemProps) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/course/upcoming");
    };

    return (
        <S.RowTravelList>
            {rooms.map((room, index) => (
                <U.TravelList onClick={handleNavigate} key={index}>
                    <U.ImageWrapper>
                        <S.Image src={room.imageUrl} alt={`${room.roomName} 이미지`} />
                    </U.ImageWrapper>
                    <U.InfoWrapper>
                        <S.TextBox>
                            <S.Title>{room.roomName}</S.Title>
                            <S.Location>{room.location}</S.Location>
                        </S.TextBox>
                        <U.Date>
                            <img src={Calender2} alt="Calender2 Icon" />
                            {room.startDate} ~ {room.endDate}
                        </U.Date>
                    </U.InfoWrapper>
                </U.TravelList>
            ))}
        </S.RowTravelList>
    );
}
