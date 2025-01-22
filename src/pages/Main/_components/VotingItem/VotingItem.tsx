import React, { useState, useEffect } from "react";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import { votingRooms } from "../../MainPage/test"; // 임시 데이터 임포트
import calculateVoteGauge from "./calculateVoteGauge"; //투표율 게이지
import renderParticipantProfiles from "./renderParticipantProfiles";
import calculateRemainingTime from "./calculateRemainingTime";

const VotingItem: React.FC = () => {
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
        <S.RowTravelList>
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
