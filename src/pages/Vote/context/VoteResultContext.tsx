import { createContext, useContext, useReducer, ReactNode } from "react";
import { VoteType } from "../../../types/voteTypes/voteTypes";
import { VoteResultSchema } from "./voteResultSchema";
import { DEFAULT_VoteResult } from "../../../apis/vote/mocks/voteResultMocks";

interface VoteState {
  voteType: VoteType;
  voteResult: {
    userId: number;
    userName: string;
    type: "GOOD" | "BAD";
    count: number;
  };
}

type VoteAction =
  | { type: "SET_VOTE_TYPE"; payload: VoteType }
  | { type: "SET_VOTE_RESULT"; payload: VoteState["voteResult"] };

const voteResultReducer = (state: VoteState, action: VoteAction): VoteState => {

  switch (action.type) {
    case "SET_VOTE_TYPE":
      return { 
        ...state, 
        voteType: action.payload,
        voteResult: { ...state.voteResult, type: action.payload } // ✅ type도 같이 변경
      };
    case "SET_VOTE_RESULT":
      return { ...state, voteResult: action.payload };
    default:
      return state;
  }
};

const initialVoteState: VoteState = {
  voteType: "GOOD",
  voteResult: VoteResultSchema.parse(DEFAULT_VoteResult).result, 
};

const VoteContext = createContext<{ state: VoteState; dispatch: React.Dispatch<VoteAction> } | null>(null);

export const VoteProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(voteResultReducer, initialVoteState);

  console.log(state.voteResult);
  return <VoteContext.Provider value={{ state, dispatch }}>{children}</VoteContext.Provider>;
};

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVoteContext must be used within a VoteProvider");
  }
  return context;
};
