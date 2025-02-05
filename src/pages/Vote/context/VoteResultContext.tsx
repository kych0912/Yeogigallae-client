import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { VoteResult } from "./voteResultSchema";
import { VoteType } from "../../../types/voteTypes/voteTypes";
import { useVoteResultQuery } from "../../../react-query/queries/useVoteResultQuerie";

interface VoteState {
  voteType: VoteType;
  voteResult: VoteResult | null;
}

type VoteAction =
  | { type: "SET_VOTE_TYPE"; payload: VoteType }
  | { type: "SET_VOTE_RESULT"; payload: VoteResult };

const voteResultReducer = (state: VoteState, action: VoteAction): VoteState => {
  switch (action.type) {
    case "SET_VOTE_TYPE":
      return { ...state, voteType: action.payload };
    case "SET_VOTE_RESULT":
      return { ...state, voteResult: action.payload };
    default:
      return state;
  }
};

const initialVoteState: VoteState = {
  voteType: "GOOD",
  voteResult: null,
};

const VoteContext = createContext<{ state: VoteState; dispatch: React.Dispatch<VoteAction> } | null>(null);

export const VoteProvider = ({ children, tripId }: { children: ReactNode; tripId: number }) => {
  const [state, dispatch] = useReducer(voteResultReducer, initialVoteState);
  const { data, isLoading, error } = useVoteResultQuery(tripId);

  useEffect(() => {
    if (data && !isLoading && !error) {
      dispatch({ type: "SET_VOTE_RESULT", payload: data });
    }
  }, [data, isLoading, error, dispatch]);

  return <VoteContext.Provider value={{ state, dispatch }}>{children}</VoteContext.Provider>;
};

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVoteContext must be used within a VoteProvider");
  }
  return context;
};
