export const DEFAULT_VoteResult = {
  httpStatus: "200 OK",
  code: "SUCCESS",
  message: "Vote result fetched successfully",
  result: [
    {
      userId: 101,
      userName: "김철수",
      type: "GOOD",
      count: 2, 
    },
    {
      userId: 102,
      userName: "이영희",
      type: "GOOD",
      count: 2,
    },
    {
      userId: 900,
      userName: "고민균",
      type: "BAD",
      count: 5,
    },
    {
      userId: 201,
      userName: "박민수",
      type: "BAD",
      count: 5,
    },
    {
      userId: 202,
      userName: "정수진",
      type: "BAD",
      count: 5,
    }
  ],
};
