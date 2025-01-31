export type VoteType = "GOOD" | "BAD"; 

// 주석은 지울 예정
// POST 투표
export interface VoteRequest {
  userEmail: string;
  tripId: number;
  type: VoteType;
  voteRoomId: number;
}

export interface VoteResponse {
  httpStatus: string;
  code: string;
  message: string;
}

export interface VoteErrorResponse {
  timestamp: string;
  httpStatus: string;
  code: string;
  path: string;
  errorMessage: string;
}

// GET 투표 결과
export interface VoteResultResponse {
  httpStatus: string;
  code: string;
  message: string;
  result: {
    userId: number;
    userName: string;
    type: VoteType;
    count: number;
  }
}

// GET 여행 정보 
export interface VoteTripInfoResponse {

}

// POST 날짜 지정
export interface VoteDaysResponse {

}

// POST  투표 방 생성하기 
export interface VoteRoomRequest {
  tripId: number;
  masterId: number;
}

export interface VoteRoomResponse {

}

// 필요 시
export interface VoteRoomErrorResponse {
  
}

// POST 투표 확정 여부 판단
export interface VoteTripResultRequest {
  tripId: number;
  roomId: number;
  voreRoomId: number;
}

export interface VoteTripResultResponse {

}

// 필요 시
export interface VoteTripResultErrorResponse {
  
}
