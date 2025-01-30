import axios from "axios";
import { VoteRoomRequest, VoteResponse } from "../../types/voteTypes/voteTypes";

const BASE_URL = "http://localhost:"; // ✅ 백엔드 서버 주소 (현재는 사용 안 함)

// ✅ 서버가 꺼져 있을 경우 반환할 mock 데이터
const mockVoteRoomData: VoteResponse = {
  httpStatus: "OK",
  code: "VOTE_200",
  message: "이미 존재하는 투표 방 정보입니다. (Mock Data)",
};

export async function fetchVoteRoom({ tripId, masterId }: VoteRoomRequest): Promise<VoteResponse> {
  console.log(`tripId=${tripId}, masterId=${masterId}`);

  const isServerRunning = false;

  if (!isServerRunning) {
    console.log("서버가 꺼져 있음. mock 데이터 반환");
    return new Promise((resolve) => setTimeout(() => resolve(mockVoteRoomData), 500));
  }

  try {
    const response = await axios.post<VoteResponse>(`${BASE_URL}/api/vote/room`, { tripId, masterId });
    console.log("[API 응답] 성공:", response.data);
    return response.data;
  } catch (error: any) {
    console.warn("⚠️ [API 오류] 404 발생 - mock 데이터 반환");
    return new Promise((resolve) => setTimeout(() => resolve(mockVoteRoomData), 500));
  }
}
