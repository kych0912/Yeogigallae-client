import * as S from "../Main.Styles";
import * as H from "./TravelListItem.Styles";

interface Room {
    tripPlanId: number;
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
                <H.TravelListItem key={room.tripPlanId}>
                    {" "}
                    <H.ImageWrapper>
                        <H.Image src={room.imageUrl} alt={`${room.tripName} 이미지`} />
                    </H.ImageWrapper>
                    <H.InfoWrapper>
                        <S.TextBox>
                            <S.Title>{room.tripName}</S.Title>
                            <S.Location>{room.location}</S.Location>
                        </S.TextBox>
                        <S.Location>{`${room.startDate} - ${room.endDate}`}</S.Location>
                    </H.InfoWrapper>
                </H.TravelListItem>
            ))}
        </S.TravelList>
    );
}
