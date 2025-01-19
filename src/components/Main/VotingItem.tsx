import React from "react";
import * as S from "./Main.Styles";
import Card from "./Card/Card";
import { votingRooms } from "../../pages/Main/MainPage/test"; // 임시 데이터 임포트

const VotingItem: React.FC = () => {
    // 투표율 계산 함수
    const calculateVoteGauge = (votedParticipants: number, totalParticipants: number): number => {
        if (totalParticipants === 0) return 0; // 전체 인원이 0명일 경우 0% 반환
        return Math.round((votedParticipants / totalParticipants) * 100); // 투표율 계산
    };

    return (
        <S.RowTravelList>
            {votingRooms.map((room) => {
                const totalParticipants = room.participantProfiles.length;
                const voteGauge = calculateVoteGauge(room.votedParticipants, totalParticipants);

                return (
                    <S.VotingItem key={room.id}>
                        <S.Box>
                            <S.TextBox>
                                <Card.Title>{room.name}</Card.Title>
                                <Card.Text>{room.location}</Card.Text>
                            </S.TextBox>
                            <S.RemainingTime>{room.remainingTime}</S.RemainingTime>
                        </S.Box>
                        <S.Box>
                            {/* 참여자 프로필 이미지 */}
                            <S.ParticipantContainer>
                                {room.participantProfiles.map((profile, index) => (
                                    <S.ProfileImage key={index} src={profile} alt={`Participant ${index + 1}`} />
                                ))}
                            </S.ParticipantContainer>

                            {/* 투표율 */}
                            <S.VoteBox>
                                <S.VoteText>{room.votedParticipants}명 투표 완료</S.VoteText>
                                <S.VoteGauge>
                                    <S.VoteBar style={{ width: `${voteGauge}%` }} />
                                </S.VoteGauge>
                            </S.VoteBox>
                        </S.Box>
                    </S.VotingItem>
                );
            })}
        </S.RowTravelList>
    );
};

export default VotingItem;
