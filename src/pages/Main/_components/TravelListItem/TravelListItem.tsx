import * as S from "../Main.Styles";
import * as H from "./TravelListItem.Styles";

export interface Room {
    tripPlanId: number;
    roomName: string;
    location: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
}

interface TravelListItemProps {
    rooms: Room[];
}

export default function TravelListItem({ rooms }: TravelListItemProps) {
    return (
        <S.TravelList>
            {rooms.map((room) => (
                <H.TravelListItem key={room.tripPlanId}>
                    <H.ImageWrapper>
                        <H.Image src={room.imageUrl} alt={`${room.roomName} 이미지`} />
                    </H.ImageWrapper>
                    <H.InfoWrapper>
                        <S.TextBox>
                            <S.Title>{room.roomName}</S.Title> {/* roomName 사용 */}
                            <S.Location>{room.location}</S.Location>
                        </S.TextBox>
                        <S.Location>{`${room.startDate} - ${room.endDate}`}</S.Location>
                    </H.InfoWrapper>
                </H.TravelListItem>
            ))}
        </S.TravelList>
    );
}
