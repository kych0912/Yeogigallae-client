import * as S from "../Main.Styles";
import * as U from "./UpcomingItem.Styles";
import Calender2 from "../../../../assets/icons/Calender2.svg";
import { useNavigate } from "react-router-dom";
import { Room } from "../../../../apis/main/Upcoming/types";

interface UpcomingItemProps {
    rooms: Room[];
}

export default function UpcomingItem({ rooms }: UpcomingItemProps) {
    const navigate = useNavigate();

    const handleClick = (roomId: number, tripPlanId: number, aiCourseId: number | null) => {
        if (aiCourseId) {
            // aiCourseId가 존재하면, 이미 생성된 AI 코스를 렌더링
            navigate(`/course/upcoming/${tripPlanId}/${aiCourseId}`);
        } else {
            // aiCourseId가 없으면, 클릭한 페이지로 이동
            navigate(`/course/planId/${tripPlanId}/roomId/${roomId}?isEnd=true`);
        }
    };

    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <U.TravelList onClick={() => handleClick(room.roomId, room.tripPlanId, room.aiCourseId)} key={room.tripPlanId}>
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
