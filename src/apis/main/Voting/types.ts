export interface VotingRoom {
    tripPlanId: number;
    roomId: number;
    masterId: number;
    roomName: string;
    location: string;
    totalMembers: number;
    remainingTime: "THIRTY_MINUTES" | "SIXTY_MINUTES" | "FOUR_HOURS" | "SIX_HOURS";
    completedVotes: number;
    profileImageUrls: string[];
    createdAt: string;
    tripPlanType: "COURSE" | "SCHEDULE";
    latitude: number;
    longitude: number;
}

export interface Voting {
    totalCount: number;
    rooms: VotingRoom[];
}

export interface VotingResponse {
    code: number;
    message: string;
    httpStatus: string;
    result: Voting;
}
