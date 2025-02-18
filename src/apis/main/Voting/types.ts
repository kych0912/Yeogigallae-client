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

export interface VotingResponse {
    totalCount: number;
    rooms: VotingRoom[];
}
