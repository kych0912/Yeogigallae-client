// 인터페이스 정의
interface VotingRoom {
    id: number;
    name: string; // 방 이름
    location: string; // 장소
    participantProfiles: string[]; // 참여한 프로필 얼굴 (URL 배열)
    remainingTime: string; // 남은 시간 (hh:mm:ss 형식)
    voteGauge: number; // 투표 게이지 (0 ~ 100)
    votedParticipants: number; // 투표한 인원
    createdAt: string; // 생성 시간 (ISO 8601 형식)
}

interface UPcomingRoom {
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
        name: "봄 소풍",
        location: "서울숲",
        participantProfiles: ["https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png"],
        remainingTime: "06:00:00", // 초기 값
        voteGauge: 0,
        votedParticipants: 2,
        createdAt: new Date().toISOString(), // 생성 시간
    },
    {
        id: 2,
        name: "여름 바다다",
        location: "강릉릉",
        participantProfiles: ["https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png"],
        remainingTime: "06:00:00", // 초기 값
        voteGauge: 0,
        votedParticipants: 2,
        createdAt: new Date().toISOString(), // 생성 시간
    },
    {
        id: 3,
        name: "여름 소풍",
        location: "행궁동동",
        participantProfiles: ["https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png", "https://www.studiopeople.kr/common/img/default_profile.png"],
        remainingTime: "06:00:00", // 초기 값
        voteGauge: 0,
        votedParticipants: 2,
        createdAt: new Date().toISOString(), // 생성 시간
    },
    {
        id: 4,
        name: "노윤서 집들이",
        location: "수리산 옆 세종 6단지",
        participantProfiles: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlm0lmFj_reIGsO0-tHWLSQu5Qx6tTaDwEEQ&s", "https://pimg.mk.co.kr/news/cms/202303/20/news-p.v1.20230320.bdc5dc412a4347f88e47fb142e6dd6de.jpg", "https://image.fnnews.com/resource/media/image/2023/08/17/202308171732508054_l.jpg", "https://img.allurekorea.com/allure/2020/10/style_5f90f49e42104-916x1200.jpg"],
        remainingTime: "06:00:00", // 초기 값
        voteGauge: 0,
        votedParticipants: 2,
        createdAt: new Date().toISOString(),
    },
    // 추가 항목...
];

export const UPcomingRooms: UPcomingRoom[] = [
    {
        id: 1,
        name: "윤서 집들이",
        location: "군포시 산본동 세종6단지",
        date: "2025-01-29",
        image: "https://ic.zigbang.com/vp/BigData/667/f559278949cc6d115a7702a7d5f2879f2ab32c8c.jpg?w=500&h=375&q=60&a=1",
    },
    {
        id: 2,
        name: "해돋이 여행",
        location: "정동진",
        date: "2025-02-01",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuivC51kFVd1AGQKSx5TrdJ759DdUU23h2-g&s",
    },
];

export const completedRooms: CompletedRoom[] = [
    {
        id: 1,
        name: "여름 바다 여행",
        location: "부산 해운대",
        date: "2024-12-15",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuivC51kFVd1AGQKSx5TrdJ759DdUU23h2-g&s",
        type: "국내여행",
    },
    {
        id: 2,
        name: "유럽 투어",
        location: "파리",
        date: "2024-11-20",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuivC51kFVd1AGQKSx5TrdJ759DdUU23h2-g&s",
        type: "세계여행",
    },
    {
        id: 3,
        name: "일본가자",
        location: "도쿄",
        date: "2024-11-20",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuivC51kFVd1AGQKSx5TrdJ759DdUU23h2-g&s",
        type: "세계여행",
    },
];
