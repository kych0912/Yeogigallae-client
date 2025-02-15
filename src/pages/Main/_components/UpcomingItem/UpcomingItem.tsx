import * as S from "../Main.Styles";
import * as U from "./UpcomingItem.Styles";
import Calender2 from "../../../../assets/icons/Calender2.svg";
import { useNavigate } from "react-router-dom";

interface Room {
    tripPlanId: number;
    roomName: string;
    location: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    roomId: string;
    aiCourseId: string;
}

interface UpcomingItemProps {
    rooms: Room[];
}

export default function UpcomingItem({ rooms }: UpcomingItemProps) {
    const navigate = useNavigate();

    const handleNavigate = (roomId: string, aiCourseId: string) => {
        navigate(`/course/upcoming/${roomId}/${aiCourseId}`);
    };

    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <U.TravelList onClick={() => handleNavigate(room.roomId, room.aiCourseId)} key={room.tripPlanId}>
                    {" "}
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
