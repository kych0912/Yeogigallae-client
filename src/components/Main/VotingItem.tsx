import React, { useState, useEffect } from "react";
import * as S from "./Main.Styles";
import * as V from "./VotingItem.Styles";
import Card from "./Card/Card";
import { votingRooms } from "../../pages/Main/MainPage/test";

const VotingItem: React.FC = () => {
    const [rooms, setRooms] = useState(votingRooms);

    // 남은 시간 계산 함수
    const calculateRemainingTime = (createdAt: string): string => {
        const createdTime = new Date(createdAt).getTime();
        const now = Date.now();
        const diff = 6 * 60 * 60 * 1000 - (now - createdTime);

        if (diff <= 0) return "00:00:00";

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    // 시간 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            setRooms((prevRooms) =>
                prevRooms.map((room) => ({
                    ...room,
                    remainingTime: calculateRemainingTime(room.createdAt),
                }))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // 투표율 계산 함수
    const calculateVoteGauge = (votedParticipants: number, totalParticipants: number): number => {
        if (totalParticipants === 0) return 0;
        return Math.round((votedParticipants / totalParticipants) * 100);
    };

    // 프로필 이미지 렌더링 함수
    const renderParticipantProfiles = (profiles: string[], extraProfiles: string) => {
        const maxVisible = 5;
        const extraCount = profiles.length - maxVisible;

        return profiles.slice(0, maxVisible).map((profile, index) => {
            // 마지막 이미지에 extraProfiles 표시
            if (index === maxVisible - 1 && extraCount > 0) {
                return (
                    <V.ProfileImageOverlay key={index}>
                        <V.ProfileImage src={extraProfiles} alt={`Extra Profiles`} />
                    </V.ProfileImageOverlay>
                );
            }

            return <V.ProfileImage key={index} src={profile} alt={`Participant ${index + 1}`} />;
        });
    };

    return (
        <S.RowTravelList>
            {rooms.map((room) => {
                const totalParticipants = room.participantProfiles.length;
                const voteGauge = calculateVoteGauge(room.votedParticipants, totalParticipants);

                return (
                    <V.VotingItem key={room.id}>
                        <S.Box>
                            <S.TextBox>
                                <Card.Title>{room.name}</Card.Title>
                                <Card.Text>{room.location}</Card.Text>
                            </S.TextBox>
                            <V.RemainingTime>{room.remainingTime}</V.RemainingTime>
                        </S.Box>
                        <S.Box>
                            {/* 참여자 프로필 이미지 */}
                            <V.ParticipantContainer>
                                {renderParticipantProfiles(
                                    room.participantProfiles,
                                    "https://media.istockphoto.com/id/688550958/vector/black-plus-sign-positive-symbol.jpg?s=612x612&w=0&k=20&c=0tymWBTSEqsnYYXWeWmJPxMotTGUwaGMGs6BMJvr7X4=" // 임의로 그냥 + 이미지 가져옴
                                )}
                            </V.ParticipantContainer>
                            {/* 투표율 */}
                            <V.VoteBox>
                                <V.VoteText>{room.votedParticipants}명 투표 완료</V.VoteText>
                                <V.VoteGauge>
                                    <V.VoteBar style={{ width: `${voteGauge}%` }} />
                                </V.VoteGauge>
                            </V.VoteBox>
                        </S.Box>
                    </V.VotingItem>
                );
            })}
        </S.RowTravelList>
    );
};

export default VotingItem;
