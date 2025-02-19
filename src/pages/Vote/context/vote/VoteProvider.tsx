import { ReactNode } from "react";
import { VoteContext } from "./VoteContext";
import { usePostVoteResultMutation } from "../../../../react-query/mutation/vote/useVoteMutation";
import { VoteData } from "./VoteDataType";

interface VoteProviderProps {
  children: ReactNode;
}

export const VoteProvider = ({ children }: VoteProviderProps) => {
  const { mutate: voteMutation } = usePostVoteResultMutation();

  const handleVoteMutation = (voteData: VoteData, roomId: number) => {
    const { tripId, voteRoomId } = voteData;
    voteMutation({ tripId, voteRoomId, roomId });
  };

  return (
    <VoteContext.Provider value={{ voteMutation: handleVoteMutation }}>
      {children}
    </VoteContext.Provider>
  );
};
