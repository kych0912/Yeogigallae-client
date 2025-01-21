import React from "react";
import * as S from "../Main.Styles";
import * as H from "./TravelListItem.Styles";

interface TravelListItemProps {
    rooms: completedRoom[]; // 필터링된 방 목록
}

const TravelListItem: React.FC<TravelListItemProps> = ({ rooms }) => {
    return (
        <S.TravelList>
            {rooms.map((room) => (
                <H.TravelListItem key={room.id}>
                    <H.ImageWrapper>
                        <H.Image src={room.image} alt={`${room.name} 이미지`} />
                    </H.ImageWrapper>
                    <H.InfoWrapper>
                        <S.Title>{room.name}</S.Title>
                        <S.Box>
                            <S.Location>{room.location}</S.Location>
                            {/*날짜지만 장소랑 스타일 같아서 같은 스타일 적용*/}
                            <S.Location>{room.date}</S.Location>
                        </S.Box>
                    </H.InfoWrapper>
                </H.TravelListItem>
            ))}
        </S.TravelList>
    );
};

export default TravelListItem;
