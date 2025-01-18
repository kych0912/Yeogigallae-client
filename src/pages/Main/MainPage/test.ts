interface VotingRoom {
    id: number; // 방 ID (고유값)
    name: string; // 방 이름
    location: string; // 장소
    participants: string[]; // 참여한 사용자 프로필 (이름 또는 ID)
    remainingTime: string; // 남은 시간 (타이머 형식: "hh:mm:ss")
    voteGauge: number; // 투표 정보 게이지 (0~100 사이 값)
}

interface ScheduledRoom {
    id: number; // 방 ID (고유값)
    name: string; // 방 이름
    location: string; // 장소
    date: string; // 날짜 (YYYY-MM-DD 형식)
    image: string; // 이미지 URL
}

export const votingRooms: VotingRoom[] = [
    {
        id: 1,
        name: "방 이름 1",
        location: "장소 1",
        participants: ["user1", "user2", "user3"],
        remainingTime: "05:30:00", // 시작 시간 기준 6시간 타이머
        voteGauge: 75, // 투표 게이지 (예: 75%)
    },
    {
        id: 2,
        name: "방 이름 2",
        location: "장소 2",
        participants: ["user4", "user5"],
        remainingTime: "02:15:45",
        voteGauge: 50,
    },
];

export const scheduledRooms: ScheduledRoom[] = [
    {
        id: 1,
        name: "방 이름 3",
        location: "장소 3",
        date: "2025-01-18",
        image: "https://lh4.googleusercontent.com/proxy/gLjzG8UzNpxYCbSS4WRPRof8y9DJVCPY-sWeYwZKg1eTaWE-py6vP2d26n5wvyDFDOmmbK-sz53rESpVmbdzAJ_zX21FV3KA0_gxjZSM4Q", // 임시 이미지
    },
    {
        id: 2,
        name: "방 이름 4",
        location: "장소 4",
        date: "2025-01-19",
        image: "https://lh4.googleusercontent.com/proxy/gLjzG8UzNpxYCbSS4WRPRof8y9DJVCPY-sWeYwZKg1eTaWE-py6vP2d26n5wvyDFDOmmbK-sz53rESpVmbdzAJ_zX21FV3KA0_gxjZSM4Q",
    },
];
