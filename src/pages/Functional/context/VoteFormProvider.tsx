import { useState, ReactNode } from "react";
import { VoteFormContext } from "./VoteFormContext";

interface VoteFormProviderProps {
  children: ReactNode; 
}

export const VoteFormProvider = ({ children }: VoteFormProviderProps) => {
  const [tripPlanType, setTripPlanType] = useState<"COURSE" | "SCHEDULE">("SCHEDULE");
  const [roomId, setRoomId] = useState<number>(22); 

  return (
    <VoteFormContext.Provider value={{ tripPlanType, setTripPlanType, roomId, setRoomId }}>
      {children}
    </VoteFormContext.Provider>
  );
};
