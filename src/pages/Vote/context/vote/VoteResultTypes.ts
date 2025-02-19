export type VoteResultItemType = {
  userId: number | null;
  userName: string | null;
  type: "GOOD" | "BAD";
  count: number;
};

export type VoteResultType = {
  httpStatus: string;
  code: string;
  message: string;
  result: VoteResultItemType[];
};
