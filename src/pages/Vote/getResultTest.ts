import { VoteResultResponse } from "../../types/voteTypes/voteTypes";

const dummyVoteResults: Record<number, VoteResultResponse> = {
  1: {
    httpStatus: "200",
    code: "SUCCESS",
    message: "임시 데이터 - 여행 1번 투표 결과",
    result: {
      userId: 123,
      userName: "테스트 유저",
      type: "GOOD",
      count: 42,
    },
  },
  2: {
    httpStatus: "200",
    code: "SUCCESS",
    message: "임시 데이터 - 여행 2번 투표 결과",
    result: {
      userId: 456,
      userName: "테스트 유저2",
      type: "BAD",
      count: 12,
    },
  },
};

export const getVoteResult = async (tripId: number): Promise<VoteResultResponse> => {
  if (!navigator.onLine) {
    console.warn(`[OFFLINE MODE] 인터넷이 연결되지 않음 → 임시 데이터 반환`);
    return dummyVoteResults[tripId] || {
      httpStatus: "404",
      code: "NOT_FOUND",
      message: "임시 데이터 - 해당 여행 투표 결과 없음",
      result: {
        userId: 0,
        userName: "N/A",
        type: "BAD",
        count: 0,
      },
    };
  }

  try {
    const response = await fetch(`http://43.201.12.8:8081/api/vote/results/${tripId}`);
    if (!response.ok) throw new Error("API 요청 실패");

    const data: VoteResultResponse = await response.json();

    return data;
  } catch (error) {
    console.error(`[ERROR] API 요청 실패 → 임시 데이터 반환`, error);
    return dummyVoteResults[tripId] || {
      httpStatus: "500",
      code: "ERROR",
      message: "임시 데이터 - 서버 오류",
      result: {
        userId: 0,
        userName: "N/A",
        type: "BAD",
        count: 0,
      },
    };
  }
};
