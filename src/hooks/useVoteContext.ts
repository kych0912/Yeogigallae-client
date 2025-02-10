import { useContext } from "react";
import { VoteContext } from "../pages/Vote/context/vote/VoteContext";

export const useVoteContext = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVoteContext must be used within a VoteProvider");
  }
  return context;
};
