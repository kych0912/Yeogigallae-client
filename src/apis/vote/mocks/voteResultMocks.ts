export const DEFAULT_VoteResult = {
  httpStatus: "200 OK", // ✅ HTTP 상태 코드 추가
  code: "SUCCESS", // ✅ 응답 코드 추가
  message: "Vote result fetched successfully", // ✅ 응답 메시지 추가
  result: {
    userId: 900,
    userName: "고민균",
    type: "GOOD",
    count: 5,
  },
};
