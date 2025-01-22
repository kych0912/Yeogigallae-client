import * as S from "../Main.Styles";
import * as H from "./TravelListItem.Styles";
import { CompletedRoom } from "../../MainPage/test";

interface TravelListItemProps {
    rooms: CompletedRoom[];
}

export default function TravelListItem({ rooms }: TravelListItemProps) {
    return (
        <S.TravelList>
            {rooms.map((room) => (
                <H.TravelListItem key={room.id}>
                    <H.ImageWrapper>
                        <H.Image src={room.image} alt={`${room.name} 이미지`} />
                    </H.ImageWrapper>
                    <H.InfoWrapper>
                        <S.TextBox>
                            <S.Title>{room.name}</S.Title>
                            <S.Location>{room.location}</S.Location>
                        </S.TextBox>
                        <S.Location>{room.date}</S.Location>
                    </H.InfoWrapper>
                </H.TravelListItem>
            ))}
        </S.TravelList>
    );
}
