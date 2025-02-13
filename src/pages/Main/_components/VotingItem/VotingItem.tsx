import React from "react";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
import useRemainingTimes from "./useRemainingTimes";

interface Room {
    tripPlanId: number;
    roomName: string;
    location: string;
    totalMembers: number;
    completedVotes: number;
    profileImageUrls: string[];
    createdAt: string;
    timerUnit: "THIRTY_MINUTES" | "SIXTY_MINUTES" | "FOUR_HOURS" | "SIX_HOURS";
    tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET";
}

interface VotingItemProps {
    rooms: Room[];
}

const VotingItem: React.FC<VotingItemProps> = ({ rooms = [] }) => {
    const remainingTimes = useRemainingTimes(rooms); // 남은 시간을 계산하여 반환받음

    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <V.VotingItem key={room.tripPlanId}>
                    <V.Box>
                        <S.Box>
                            <V.Title>{room.roomName}</V.Title>
                            <V.RemainingTime>{remainingTimes[room.tripPlanId] || "00:00:00"}</V.RemainingTime>
                        </S.Box>
                        <S.Box>
                            <S.Location>{room.location}</S.Location>
                        </S.Box>
                    </V.Box>
                    <S.Box>
                        <V.ParticipantContainer>{renderParticipantProfiles(room.profileImageUrls)}</V.ParticipantContainer>
                        <V.VoteBox>
                            {room.tripPlanType === "SCHEDULE" && (
                                <>
                                    <V.VoteText>{room.completedVotes}명 투표 완료</V.VoteText>
                                    <V.VoteGauge>
                                        <V.VoteBar style={{ width: `${calculateVoteGauge(room.completedVotes, room.totalMembers)}%` }} />
                                    </V.VoteGauge>
                                </>
                            )}
                            {room.tripPlanType === "COURSE" && (
                                <S.SpinnerContainer>
                                    <S.Spinner />
                                    <V.AItext>AI코스 입력 받는 중..</V.AItext>
                                </S.SpinnerContainer>
                            )}
                        </V.VoteBox>
                    </S.Box>
                </V.VotingItem>
            ))}
        </S.RowTravelList>
    );
};

export default VotingItem;
