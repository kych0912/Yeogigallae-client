import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
import RemainingTimeDisplay from "./useRemainingTimes";
import { VotingRoom } from "../../../../apis/main/Voting/types"; // ✅ 변경된 타입 사용

interface VotingItemProps {
    rooms: VotingRoom[];
}

const VotingItem: React.FC<VotingItemProps> = ({ rooms = [] }) => {
    const navigate = useNavigate();

    const handleClick = (tripPlanId: number, roomId: number, tripPlanType: "COURSE" | "SCHEDULE") => {
        if (tripPlanType === "COURSE") {
            navigate(`/course/${roomId}/${tripPlanId}`);
        } else if (tripPlanType === "SCHEDULE") {
            navigate(`/vote/${tripPlanId}/${roomId}`);
        }
    };

    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <V.VotingItem key={room.tripPlanId} onClick={() => handleClick(room.tripPlanId, room.roomId, room.tripPlanType)}>
                    <V.Box>
                        <S.Box>
                            <V.Title>{room.roomName}</V.Title>
                            <V.RemainingTime>
                                <RemainingTimeDisplay createdAt={room.createdAt} remainingTime={room.remainingTime} />
                            </V.RemainingTime>
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
