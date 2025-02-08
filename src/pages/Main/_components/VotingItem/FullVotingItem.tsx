import React, { useState, useEffect } from "react";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import { votingRooms } from "../../MainPage/test";
import calculateVoteGauge from "./calculateVoteGauge"; // 투표율 게이지 계산 함수
import renderParticipantProfiles from "./renderParticipantProfiles"; // 참여자 프로필 렌더링 함수
import calculateRemainingTime from "./calculateRemainingTime"; // 남은 시간 계산 함수

const FullVotingItem: React.FC = () => {
    const [rooms, setRooms] = useState(votingRooms); // 상태 관리

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

    return (
        <>
            {rooms.map((room) => {
                const totalParticipants = room.participantProfiles.length;
                const voteGauge = calculateVoteGauge(room.votedParticipants, totalParticipants);

                return (
                    <V.VotingItem key={room.id}>
                        <S.Box>
                            <S.TextBox>
                                <V.Title>{room.name}</V.Title>
                                <S.Location>{room.location}</S.Location>
                            </S.TextBox>
                            <V.RemainingTime>{room.remainingTime}</V.RemainingTime>
                        </S.Box>
                        <S.Box>
                            {/* 참여자 프로필 이미지 */}
                            <V.ParticipantContainer>{renderParticipantProfiles(room.participantProfiles)}</V.ParticipantContainer>
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
        </>
    );
};

export default FullVotingItem;
