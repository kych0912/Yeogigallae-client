import { VotingResponse } from "./types";

export const DEFAULT_Voting: VotingResponse = {
    totalCount: 6,
    rooms: [
        {
            tripPlanId: 1,
            roomId: 1,
            masterId: 1,
            roomName: "친구들과의 여행",
            location: "부산",
            totalMembers: 4,
            remainingTime: "SIXTY_MINUTES",
            completedVotes: 3,
            profileImageUrls: ["Images.com", "Images.com", "Images.com", "Images.com"],
            createdAt: "2025-02-18T16:20:08.696Z",
            tripPlanType: "COURSE",
            latitude: 35.1796,
            longitude: 129.0756,
        },
        {
            tripPlanId: 2,
            roomId: 2,
            masterId: 2,
            roomName: "가족 여행",
            location: "제주도",
            totalMembers: 5,
            remainingTime: "THIRTY_MINUTES",
            completedVotes: 2,
            profileImageUrls: ["Images.com", "Images.com", "Images.com", "Images.com", "Images.com"],
            createdAt: "2025-02-18T16:20:08.696Z",
            tripPlanType: "SCHEDULE",
            latitude: 33.4996,
            longitude: 126.5312,
        },
        {
            tripPlanId: 3,
            roomId: 3,
            masterId: 3,
            roomName: "커플 여행",
            location: "서울",
            totalMembers: 2,
            remainingTime: "FOUR_HOURS",
            completedVotes: 1,
            profileImageUrls: ["Images.com", "Images.com"],
            createdAt: "2025-02-18T16:20:08.696Z",
            tripPlanType: "SCHEDULE",
            latitude: 37.5665,
            longitude: 126.978,
        },
        {
            tripPlanId: 4,
            roomId: 4,
            masterId: 4,
            roomName: "비즈니스 여행",
            location: "대전",
            totalMembers: 3,
            remainingTime: "SIX_HOURS",
            completedVotes: 2,
            profileImageUrls: ["Images.com", "Images.com", "Images.com"],
            createdAt: "2025-02-18T16:20:08.696Z",
            tripPlanType: "SCHEDULE",
            latitude: 36.3504,
            longitude: 127.3845,
        },
        {
            tripPlanId: 5,
            roomId: 5,
            masterId: 5,
            roomName: "솔로 여행",
            location: "강릉",
            totalMembers: 1,
            remainingTime: "FOUR_HOURS",
            completedVotes: 0,
            profileImageUrls: ["Images.com"],
            createdAt: "2025-02-18T16:20:08.696Z",
            tripPlanType: "SCHEDULE",
            latitude: 37.7519,
            longitude: 128.8761,
        },
        {
            tripPlanId: 6,
            roomId: 6,
            masterId: 6,
            roomName: "가족 여행",
            location: "제주도",
            totalMembers: 5,
            remainingTime: "FOUR_HOURS",
            completedVotes: 2,
            profileImageUrls: ["Images.com", "Images.com", "Images.com", "Images.com", "Images.com"],
            createdAt: "2025-02-17T16:20:08.696Z",
            tripPlanType: "SCHEDULE",
            latitude: 33.4996,
            longitude: 126.5312,
        },
    ],
};
