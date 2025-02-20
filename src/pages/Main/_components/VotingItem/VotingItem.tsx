import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
import RemainingTimeDisplay from "./useRemainingTimes";
import { VotingRoom } from "../../../../apis/main/Voting/types";

interface VotingItemProps {
    rooms: VotingRoom[];
    isCompleted?: boolean;
}

const VotingItem: React.FC<VotingItemProps> = ({ rooms = [], isCompleted = false }) => {
    const navigate = useNavigate();

    const handleClick = (tripPlanId: number, roomId: number, tripPlanType: "COURSE" | "SCHEDULE") => {
        if (isCompleted) {
            // 투표 완료일 경우
            if (tripPlanType === "COURSE") {
                navigate(`/course/${tripPlanId}/${roomId}?isEnd=true`);
            } else if (tripPlanType === "SCHEDULE") {
                navigate(`/vote/${tripPlanId}/${roomId}`);
            }
        } else {
            // 투표 중일 경우 기존 로직 유지
            if (tripPlanType === "COURSE") {
                navigate(`/course/${tripPlanId}/${roomId}`);
            } else if (tripPlanType === "SCHEDULE") {
                navigate(`/vote/${tripPlanId}/${roomId}`);
            }
        }
    };

    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <V.VotingItem key={room.tripPlanId} onClick={() => handleClick(room.tripPlanId, room.roomId, room.tripPlanType)}>
                    <V.Box>
                        <S.Box>
                            <V.Title>{room.roomName}</V.Title>
                            <V.RemainingTime>{!isCompleted ? <RemainingTimeDisplay createdAt={room.createdAt} remainingTime={room.remainingTime} /> : "00:00:00"}</V.RemainingTime>
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
                            {room.tripPlanType === "COURSE" && !isCompleted && (
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
