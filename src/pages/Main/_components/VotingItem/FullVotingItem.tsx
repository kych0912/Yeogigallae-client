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
import { isTimeExpired } from "../utils";

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
    remainingTime: "THIRTY_MINUTES" | "SIXTY_MINUTES" | "FOUR_HOURS" | "SIX_HOURS";
}

const FullVotingItem: React.FC<FullVotingItemProps> = ({ rooms = [], selectedFilter }) => {
    const navigate = useNavigate();

    const handleClick = (tripPlanId: number, roomId: string, tripPlanType: "COURSE" | "SCHEDULE" | "BUDGET") => {
        if (tripPlanType === "COURSE") {
            navigate(`/course/${roomId}/${tripPlanId}`);
        } else if (tripPlanType === "SCHEDULE") {
            navigate(`/vote/${tripPlanId}/${roomId}`);
        } else {
            // BUDGET 타입일 때 (추가 로직 필요)
        }
    };

    // ✅ "투표 완료된 항목" 제거하고 필터 적용
    const filteredRooms = rooms.filter((room) => !isTimeExpired(room.createdAt, room.remainingTime)).filter((room) => (selectedFilter ? room.tripPlanType === selectedFilter : true));

    return (
        <>
            {filteredRooms.length === 0 ? (
                <V.EmptyBox>
                    <S.Text>
                        여행 투표와 AI 코스 생성을 통해
                        <br />더 이상 여행을 미루지마세요!
                    </S.Text>
                </V.EmptyBox>
            ) : (
                filteredRooms.map((room) => {
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
                })
            )}
        </>
    );
};

export default FullVotingItem;
