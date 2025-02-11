import { createContext, useContext, useState } from "react";

interface VoteFormContextType {
  tripPlanType: "COURSE" | "SCHEDULE";
  setTripPlanType: (type: "COURSE" | "SCHEDULE") => void;
  roomId: number; 
  setRoomId: (id: number) => void; 
}

export const VoteFormContext = createContext<VoteFormContextType | null>(null);

export const useVoteFormContext = () => {
  const context = useContext(VoteFormContext);
  if (!context) {
    throw new Error("useVoteFormContext must be used within a VoteFormProvider");
  }
  return context;
};

export const VoteFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [tripPlanType, setTripPlanType] = useState<"COURSE" | "SCHEDULE">("SCHEDULE");
  const [roomId, setRoomId] = useState<number>(22); 

  return (
    <VoteFormContext.Provider value={{ tripPlanType, setTripPlanType, roomId, setRoomId }}>
      {children}
    </VoteFormContext.Provider>
  );
};
