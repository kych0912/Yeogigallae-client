import { createContext, useContext, useReducer, ReactNode } from "react";
import { z } from "zod";
import { VoteResultSchema } from "./voteResultSchema"; 
import { DEFAULT_VoteResult } from "../../../apis/vote/mocks/voteResultMocks";

export type VoteResult = z.infer<typeof VoteResultSchema>["result"];

interface VoteState {
  voteType: "GOOD" | "BAD" | null;
  voteResult: VoteResult;
}

type VoteAction =
  | { type: "SET_VOTE_TYPE"; payload: "GOOD" | "BAD" }
  | { type: "SET_VOTE_RESULT"; payload: VoteResult };

const voteResultReducer = (state: VoteState, action: VoteAction): VoteState => {
  switch (action.type) {
    case "SET_VOTE_TYPE":
      return { ...state, voteType: action.payload };

    case "SET_VOTE_RESULT":
      return {
        ...state,
        voteResult: action.payload.map((vote) => ({
          ...vote,
          type: vote.type as "GOOD" | "BAD",
        })),
      };

    default:
      return state;
  }
};

const initialVoteState: VoteState = {
  voteType: null,
  voteResult: DEFAULT_VoteResult.result as VoteResult,
};

const VoteContext = createContext<{ state: VoteState; dispatch: React.Dispatch<VoteAction> } | null>(null);

export const VoteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(voteResultReducer, initialVoteState);
  return <VoteContext.Provider value={{ state, dispatch }}>{children}</VoteContext.Provider>;
};

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVoteContext must be used within a VoteProvider");
  }
  return context;
};
