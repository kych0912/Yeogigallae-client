// 인터페이스 정의
interface VotingRoom {
    id: number;
    name: string; // 방 이름
    location: string; // 장소
    participantProfiles: string[]; // 참여한 프로필 얼굴 (URL 배열)
    remainingTime: string; // 남은 시간 (hh:mm:ss 형식)
    voteGauge: number; // 투표 게이지 (0 ~ 100) (계산용)
    votedParticipants: number; // 투표한 인원
}

interface ScheduledRoom {
    id: number;
    name: string; // 방 이름
    location: string; // 장소
    date: string; // 날짜 (YYYY-MM-DD 형식)
    image: string; // 이미지 URL
}

interface CompletedRoom {
    id: number;
    name: string; // 방 이름
    location: string; // 장소
    date: string; // 날짜 (YYYY-MM-DD 형식)
    image: string; // 이미지 URL
    type: "세계여행" | "국내여행"; // 여행 종류
}

// 임시 데이터
export const votingRooms: VotingRoom[] = [
    {
        id: 1,
        name: "봄 소풍 투표",
        location: "서울숲",
        participantProfiles: ["https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png"],
        remainingTime: "03:45:12",
        voteGauge: 0, // 계산되기 전 기본값
        votedParticipants: 2, // 투표한 인원
    },
    {
        id: 2,
        name: "가을 여행 투표",
        location: "한라산",
        participantProfiles: ["https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png"],
        remainingTime: "02:15:30",
        voteGauge: 0, // 계산되기 전 기본값
        votedParticipants: 1, // 투표한 인원
    },
    // 추가 항목...
];

export const scheduledRooms: ScheduledRoom[] = [
    {
        id: 1,
        name: "겨울 여행",
        location: "대관령",
        date: "2025-01-22",
        image: "https://example.com/scheduled1.jpg",
    },
    {
        id: 2,
        name: "해돋이 여행",
        location: "정동진",
        date: "2025-02-01",
        image: "https://example.com/scheduled2.jpg",
    },
];

export const completedRooms: CompletedRoom[] = [
    {
        id: 1,
        name: "여름 바다 여행",
        location: "부산 해운대",
        date: "2024-12-15",
        image: "https://example.com/completed1.jpg",
        type: "국내여행",
    },
    {
        id: 2,
        name: "유럽 투어",
        location: "파리",
        date: "2024-11-20",
        image: "https://example.com/completed2.jpg",
        type: "세계여행",
    },
];
