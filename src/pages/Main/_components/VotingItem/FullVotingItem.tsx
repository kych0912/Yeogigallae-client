import React from "react";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import Course from "../../../../assets/icons/course.svg";
import Budget from "../../../../assets/icons/budget.svg";
import Schedule from "../../../../assets/icons/calendar3.svg";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
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

interface FullVotingItemProps {
    rooms: Room[];
    selectedFilter: string;
}

const FullVotingItem: React.FC<FullVotingItemProps> = ({ rooms = [], selectedFilter }) => {
    const remainingTimes = useRemainingTimes(
        rooms.map((room) => ({
            roomName: room.roomName,
            createdAt: room.createdAt,
        }))
    );

    const filteredRooms = selectedFilter ? rooms.filter((room) => room.tripPlanType === selectedFilter) : rooms;

    return (
        <>
            {filteredRooms.map((room) => {
                const totalParticipants = room.profileImageUrls.length;
                const voteGauge = calculateVoteGauge(room.completedVotes, totalParticipants);

                const tripPlanInfo = (() => {
                    switch (room.tripPlanType) {
                        case "COURSE":
                            return { icon: Course, text: "코스" };
                        case "BUDGET":
                            return { icon: Budget, text: "예산" };
                        case "SCHEDULE":
                            return { icon: Schedule, text: "일정" };
                        default:
                            return { icon: "", text: "" };
                    }
                })();

                return (
                    <V.FullVotingItem key={room.roomName}>
                        <S.Type>
                            <S.Icon2 src={tripPlanInfo.icon} alt={tripPlanInfo.text} />
                            {tripPlanInfo.text}
                        </S.Type>
                        <V.Box>
                            <S.Box>
                                <V.Title>{room.roomName}</V.Title>
                                <V.RemainingTime>{remainingTimes[room.roomName] || "00:00:00"}</V.RemainingTime>
                            </S.Box>
                            <S.Box>
                                <S.Location>{room.location}</S.Location>
                            </S.Box>
                        </V.Box>
                        <S.Box>
                            <V.ParticipantContainer>{renderParticipantProfiles(room.profileImageUrls)}</V.ParticipantContainer>
                            <V.VoteBox>
                                <V.VoteText>{room.completedVotes}명 투표 완료</V.VoteText>
                                <V.VoteGauge>
                                    <V.VoteBar style={{ width: `${voteGauge}%` }} />
                                </V.VoteGauge>
                            </V.VoteBox>
                        </S.Box>
                    </V.FullVotingItem>
                );
            })}
        </>
    );
};

export default FullVotingItem;
