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

export interface CompletedRoom {
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
        name: "봄 피크닉",
        location: "대한민국 서울 특별시 서울숲의 위치가 어디일까요 모르게따",
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
        location: "군포시 산본동 세종6단지ㄴㅁㅇㅁㄴㅇㄴㅁㅇㄴ",
        date: "2025-01-29",
        image: "https://i.namu.wiki/i/uH7NzgRSXa3ilcIkybwnrfVRdHM3DQC6MnbNoKk1K3Grz-NIKd7KB4UiuTBLXihaxv1iRk8gw6ngUw6ITP6RVQ.webp",
    },
    {
        id: 2,
        name: "일곱글자를해볼게 ",
        location: "주소는 글자수제한 말고 길이로 제한해서 길어지는 부분은 생략이 될건데 진짜 될런지 테스트용 긴 주소 쓰는중인데 이거 맞나",
        date: "2025-02-01",
        image: "https://i.namu.wiki/i/uH7NzgRSXa3ilcIkybwnrfVRdHM3DQC6MnbNoKk1K3Grz-NIKd7KB4UiuTBLXihaxv1iRk8gw6ngUw6ITP6RVQ.webp",
    },
];

export const completedRooms: CompletedRoom[] = [
    {
        id: 1,
        name: "여름 바다 여행",
        location: "대한민국 부산광역시 해운대구 뭐시기 뭐시기",
        date: "2024-12-15",
        image: "https://i.namu.wiki/i/uH7NzgRSXa3ilcIkybwnrfVRdHM3DQC6MnbNoKk1K3Grz-NIKd7KB4UiuTBLXihaxv1iRk8gw6ngUw6ITP6RVQ.webp",
        type: "국내여행",
    } /*
    {
        id: 2,
        name: "유럽 투어",
        location: "파리",
        date: "2024-11-20",
        image: "https://i.namu.wiki/i/uH7NzgRSXa3ilcIkybwnrfVRdHM3DQC6MnbNoKk1K3Grz-NIKd7KB4UiuTBLXihaxv1iRk8gw6ngUw6ITP6RVQ.webp",
        type: "세계여행",
    },
    {
        id: 3,
        name: "봄 소풍을 가고싶지만 현실은 강의실에서 수업듣게 될 희망 여행 ",
        location: "파리",
        date: "2024-11-20",
        image: "https://i.namu.wiki/i/uH7NzgRSXa3ilcIkybwnrfVRdHM3DQC6MnbNoKk1K3Grz-NIKd7KB4UiuTBLXihaxv1iRk8gw6ngUw6ITP6RVQ.webp",
        type: "세계여행",
    },*/,
];
