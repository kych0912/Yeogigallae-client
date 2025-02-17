import { ReactNode } from "react";
import { VoteContext } from "./VoteContext";
import {useVoteResultMutation} from "../../../../react-query/mutation/vote/useVoteMutation";

interface VoteProviderProps {
  children: ReactNode;
}

export const VoteProvider = ({ children }: VoteProviderProps) => {
  const { mutate: voteMutation } = useVoteResultMutation(); // useMutation 가져오기

  return (
    <VoteContext.Provider value={{ voteMutation }}>
      {children}
    </VoteContext.Provider>
  );
};
