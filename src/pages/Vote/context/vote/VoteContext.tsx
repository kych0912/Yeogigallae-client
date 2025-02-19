import { createContext } from "react";
import { VoteData } from "./VoteDataType";

interface VoteContextProps {
  voteMutation: (voteData: VoteData, roomId: number) => void;
}

export const VoteContext = createContext<VoteContextProps>({
  voteMutation: () => {},
});
