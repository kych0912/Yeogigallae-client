import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";
import Course from "../../../../assets/icons/course.svg";
import Budget from "../../../../assets/icons/budget.svg";
import Schedule from "../../../../assets/icons/calendar3.svg";
import calculateVoteGauge from "./calculateVoteGauge";
import renderParticipantProfiles from "./renderParticipantProfiles";
import RemainingTimeDisplay from "./useRemainingTimes";
import MapComponent from "../../../SearchPage/_components/SearchMap/SearchMap";
import { useNavigate } from "react-router-dom";

// interface RemainingTimeProps {
//     tripPlanId: number;
//     remainingTimes: { [key: number]: string };
// }

interface FullVotingItemProps {
    rooms: Room[];
    selectedFilter: string;
}

interface Room {
    tripPlanId: number;
    roomId: string;
    roomName: string;
    location: string;
    totalMembers: number;
    completedVotes: number;
    profileImageUrls: string[];
    createdAt: string;
    tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET";
    latitude?: number;
    longitude?: number;
    masterId: string;
    remainingTime: "THIRTY_MINUTES" | "SIXTY_MINUTES" | "FOUR_HOURS" | "SIX_HOURS";
}

// // 타이머 부분만 메모이제이션
// const RemainingTimeDisplay: React.FC<RemainingTimeProps> = memo(({ tripPlanId, remainingTimes }) => {
//     return <span>{remainingTimes[tripPlanId] || "00:00:00"}</span>;
// });

const FullVotingItem: React.FC<FullVotingItemProps> = ({ rooms = [], selectedFilter }) => {
    // const remainingTimes = useRemainingTimes(rooms);
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

                return (
                    <V.FullVotingItem key={room.tripPlanId} onClick={() => handleClick(room.tripPlanId, room.roomId, room.tripPlanType)}>
                        <S.Type>
                            <S.Icon2 src={tripPlanInfo.icon} alt={tripPlanInfo.text} />
                            {tripPlanInfo.text}
                        </S.Type>
                        <V.Box>
                            <S.Box>
                                <V.Title>{room.roomName}</V.Title>
                                {/* 🔥 개별 타이머 컴포넌트로 리렌더링 최소화 */}
                                <V.RemainingTime>
                                    <RemainingTimeDisplay createdAt={room.createdAt} remainingTime={room.remainingTime} />
                                </V.RemainingTime>
                            </S.Box>

                            <S.Box>
                                <S.Location>{room.location}</S.Location>
                            </S.Box>
                        </V.Box>

                        {room.latitude && room.longitude ? (
                            <V.CustomMap>
                                <MapComponent
                                    center={{
                                        x: room.longitude.toString(),
                                        y: room.latitude.toString(),
                                    }}
                                    results={[
                                        {
                                            ...room,
                                            x: room.longitude.toString(),
                                            y: room.latitude.toString(),
                                            place_name: room.roomName || "투표 장소",
                                        },
                                    ]}
                                    mapContainerId={`map-${room.roomId}`}
                                />
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
