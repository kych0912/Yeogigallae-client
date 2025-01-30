import { VoteType } from "../../types/voteTypes/voteTypes";

export const mockVoteData: { userId: number; userName: string; type: VoteType }[][] = [
  [
    { 
      userId: 1, 
      userName: "유저1", 
      type: "GOOD" 
    },
    { 
      userId: 2, 
      userName: "유저2", 
      type: "BAD" 
    },
    { 
      userId: 3, 
      userName: "유저3", 
      type: "GOOD" 
    },
    { 
      userId: 4, 
      userName: "유저4", 
      type: "BAD" 
    },
    { 
      userId: 5, 
      userName: "유저5", 
      type: "GOOD" 
    },
    { 
      userId: 6, 
      userName: "유저6", 
      type: "BAD" 
    },
    { 
      userId: 7, 
      userName: "유저7", 
      type: "GOOD" 
    },
    { 
      userId: 8, 
      userName: "유저8", 
      type: "BAD" 
    },
    { 
      userId: 9, 
      userName: "유저9", 
      type: "GOOD" 
    },
    { 
      userId: 10, 
      userName: "유저10", 
      type: "BAD" 
    },
  ],
];
