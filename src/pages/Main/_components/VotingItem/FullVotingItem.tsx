import React, { useState, useEffect } from "react";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import Course from "../../../../assets/icons/course.svg";
import Budget from "../../../../assets/icons/budget.svg";
import Schedule from "../../../../assets/icons/calendar3.svg";
import { votingRooms } from "../../MainPage/test";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
import calculateRemainingTime from "./calculateRemainingTime";

interface FullVotingItemProps {
    selectedFilter: string;
}

const FullVotingItem: React.FC<FullVotingItemProps> = ({ selectedFilter }) => {
    const [rooms, setRooms] = useState(votingRooms);

    const getTripPlanInfo = (tripPlanType: string) => {
        switch (tripPlanType) {
            case "COURSE":
                return { icon: Course, text: "코스" };
            case "BUDGET":
                return { icon: Budget, text: "예산" };
            case "SCHEDULE":
                return { icon: Schedule, text: "일정" };
            default:
                return null;
        }
    };

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

    const filteredRooms = selectedFilter ? rooms.filter((room) => room.tripPlanType === selectedFilter) : rooms;

    return (
        <>
            {filteredRooms.map((room) => {
                const totalParticipants = room.participantProfiles.length;
                const voteGauge = calculateVoteGauge(room.votedParticipants, totalParticipants);

                const tripPlanInfo = getTripPlanInfo(room.tripPlanType) || { icon: "", text: "" };

                return (
                    <V.FullVotingItem key={room.id}>
                        <S.Type>
                            <S.Icon2 src={tripPlanInfo.icon} />
                            {tripPlanInfo.text}
                        </S.Type>
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
                    </V.FullVotingItem>
                );
            })}
        </>
    );
};

export default FullVotingItem;
