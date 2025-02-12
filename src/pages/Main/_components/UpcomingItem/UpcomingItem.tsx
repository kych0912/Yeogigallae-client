import * as S from "../Main.Styles";
import * as U from "./UpcomingItem.Styles";
import Calender2 from "../../../../assets/icons/Calender2.svg";
import { useNavigate } from "react-router-dom";

interface Room {
    tripPlanId: number; // ✅ tripPlanId 추가
    roomName: string; // ✅ roomName → tripPlanName 변경
    location: string; // ✅ location → destination 변경
    startDate: string;
    endDate: string;
    imageUrl: string; // ✅ imageUrl → thumbnailUrl 변경
}

interface UpcomingItemProps {
    rooms: Room[];
}

export default function UpcomingItem({ rooms }: UpcomingItemProps) {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/course/upcoming");
    };

    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <U.TravelList onClick={handleNavigate} key={room.tripPlanId}>
                    {" "}
                    {/* ✅ key 변경 */}
                    <U.ImageWrapper>
                        <S.Image src={room.imageUrl} alt={`${room.roomName} 이미지`} /> {/* ✅ 필드명 변경 */}
                    </U.ImageWrapper>
                    <U.InfoWrapper>
                        <S.TextBox>
                            <S.Title>{room.roomName}</S.Title> {/* ✅ 필드명 변경 */}
                            <S.Location>{room.location}</S.Location> {/* ✅ 필드명 변경 */}
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
