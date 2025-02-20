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

    const handleClick = (roomId: number, tripPlanId: number, aiCourseId: number | null, tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET") => {
        if (tripPlanType === "COURSE") {
            if (aiCourseId) {
                // aiCourseId가 존재하면, 이미 생성된 AI 코스를 렌더링
                navigate(`/course/upcoming/${tripPlanId}/${aiCourseId}`);
            } else {
                // aiCourseId가 없을 때
                navigate(`/course/${tripPlanId}/${roomId}?isEnd=true`);
            }
        } else if (tripPlanType === "SCHEDULE") {
            navigate(`/vote/${tripPlanId}/${roomId}?step=찬성확인`);
        } else {
            console.log("else");
            // BUDGET 타입일 때 (추가 로직 필요)
        }
    };
    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <U.TravelList onClick={() => handleClick(room.roomId, room.tripPlanId, room.aiCourseId, room.tripPlanType)} key={room.tripPlanId}>
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
