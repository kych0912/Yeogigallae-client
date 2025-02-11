import { createContext } from "react";
import { VoteData } from "./VoteSchema";

export interface VoteContextType {
  voteMutation: (voteData: VoteData) => void;
}

export const VoteContext = createContext<VoteContextType | null>(null);
