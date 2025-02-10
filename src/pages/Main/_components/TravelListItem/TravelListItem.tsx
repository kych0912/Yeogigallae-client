import * as S from "../Main.Styles";
import * as H from "./TravelListItem.Styles";

interface Room {
    tripName: string;
    location: string;
    startDate: string;
    endDate: string;
    tripType: "DOMESTIC" | "INTERNATIONAL";
    imageUrl: string;
}

interface TravelListItemProps {
    rooms: Room[];
}

export default function TravelListItem({ rooms }: TravelListItemProps) {
    return (
        <S.TravelList>
            {rooms.map((room) => (
                <H.TravelListItem key={room.tripName}>
                    {" "}
                    {/* tripName을 key로 사용 */}
                    <H.ImageWrapper>
                        <H.Image src={room.imageUrl} alt={`${room.tripName} 이미지`} /> {/* imageUrl로 이미지 출력 */}
                    </H.ImageWrapper>
                    <H.InfoWrapper>
                        <S.TextBox>
                            <S.Title>{room.tripName}</S.Title> {/* tripName을 제목으로 출력 */}
                            <S.Location>{room.location}</S.Location> {/* location 출력 */}
                        </S.TextBox>
                        <S.Location>{`${room.startDate} - ${room.endDate}`}</S.Location> {/* 날짜 범위 출력 */}
                    </H.InfoWrapper>
                </H.TravelListItem>
            ))}
        </S.TravelList>
    );
}
