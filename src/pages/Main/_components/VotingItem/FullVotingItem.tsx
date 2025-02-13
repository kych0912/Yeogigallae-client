import { useSearch } from "../../../SearchPage/context/SearchContext";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import Course from "../../../../assets/icons/course.svg";
import Budget from "../../../../assets/icons/budget.svg";
import Schedule from "../../../../assets/icons/calendar3.svg";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
import useRemainingTimes from "./useRemainingTimes";
import MapComponent from "../../../SearchPage/_components/SearchMap/SearchMap";

interface FullVotingItemProps {
    rooms: Room[];
    selectedFilter: string;
}

interface Room {
    tripPlanId: number;
    roomName: string;
    location: string;
    totalMembers: number;
    completedVotes: number;
    profileImageUrls: string[];
    createdAt: string;
    timerUnit: TimerUnit; // 추가된 속성
    tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET";
    coordinates: { x: number; y: number };
    remainingTime?: string; // 이 부분을 옵셔널로 추가
}

type TimerUnit = "THIRTY_MINUTES" | "SIXTY_MINUTES" | "FOUR_HOURS" | "SIX_HOURS";

const FullVotingItem: React.FC<FullVotingItemProps> = ({ rooms = [], selectedFilter }) => {
    const { centerCoords } = useSearch();
    const remainingTimes = useRemainingTimes(rooms); // 여기서는 rooms를 그대로 전달

    const filteredRooms = selectedFilter ? rooms.filter((room) => room.tripPlanType === selectedFilter) : rooms;

    return (
        <>
            {filteredRooms.map((room) => {
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

                const mapCenterCoords = centerCoords;

                return (
                    <V.FullVotingItem key={room.tripPlanId}>
                        <S.Type>
                            <S.Icon2 src={tripPlanInfo.icon} alt={tripPlanInfo.text} />
                            {tripPlanInfo.text}
                        </S.Type>
                        <V.Box>
                            <S.Box>
                                <V.Title>{room.roomName}</V.Title>
                                <V.RemainingTime>{remainingTimes?.[room.tripPlanId] || "00:00:00"}</V.RemainingTime>
                            </S.Box>
                            <S.Box>
                                <S.Location>{room.location}</S.Location>
                            </S.Box>
                        </V.Box>

                        {mapCenterCoords ? (
                            <V.CustomMap>
                                <MapComponent mapContainerId={`map-${room.tripPlanId}`} />
                            </V.CustomMap>
                        ) : (
                            <S.Box>위치 정보 없음</S.Box>
                        )}

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
                    </V.FullVotingItem>
                );
            })}
        </>
    );
};

export default FullVotingItem;
