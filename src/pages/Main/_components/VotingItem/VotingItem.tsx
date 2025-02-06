import React from "react";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
import { formatTime } from "./calculateRemainingTime";
import useRemainingTimes from "./useRemainingTimes";

interface Room {
    roomName: string;
    location: string;
    totalMembers: number;
    completedVotes: number;
    profileImageUrls: string[];
    createdAt: string;
    tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET";
}

interface VotingItemProps {
    rooms: Room[];
}

const VotingItem: React.FC<VotingItemProps> = ({ rooms = [] }) => {
    const remainingTimes = useRemainingTimes(rooms);

    return (
        <S.RowTravelList>
            {rooms.map((room) => {
                const voteGauge = calculateVoteGauge(room.completedVotes, room.totalMembers);
                const remainingTimeStr = formatTime(remainingTimes[room.roomName] || 0);
                return (
                    <V.VotingItem key={room.roomName}>
                        <S.Box>
                            <S.TextBox>
                                <V.Title>{room.roomName}</V.Title>
                                <S.Location>{room.location}</S.Location>
                            </S.TextBox>
                            {/* 시간 카운트다운 표시 */}
                            <V.RemainingTime>{remainingTimeStr}</V.RemainingTime>
                        </S.Box>
                        <S.Box>
                            {/* 참여자 프로필 이미지 */}
                            <V.ParticipantContainer>{renderParticipantProfiles(room.profileImageUrls)}</V.ParticipantContainer>
                            {/* 투표율 */}
                            <V.VoteBox>
                                <V.VoteText>{room.completedVotes}명 투표 완료</V.VoteText>
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
