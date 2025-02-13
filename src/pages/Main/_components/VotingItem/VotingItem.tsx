import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import 추가
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
    tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET";
    roomId: string;
    masterId: string;
}

interface VotingItemProps {
    rooms: Room[];
}

const VotingItem: React.FC<VotingItemProps> = ({ rooms = [] }) => {
    const remainingTimes = useRemainingTimes(rooms);
    const navigate = useNavigate();

    const handleClick = (tripPlanId: number, roomId: string, tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET") => {
        if (tripPlanType === "COURSE") {
            // COURSE 타입일 때
            navigate(`/course/${roomId}/${tripPlanId}`);
        } else if (tripPlanType === "SCHEDULE") {
            // SCHEDULE 타입일 때
            navigate(`/vote/${tripPlanId}/${roomId}`);
        } else {
            // BUDGET 타입일 때
        }
    };

    return (
        <S.RowTravelList>
            {rooms.map((room) => (
                <V.VotingItem key={room.tripPlanId} onClick={() => handleClick(room.tripPlanId, room.roomId, room.tripPlanType)}>
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
