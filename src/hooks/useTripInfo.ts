import { useContext } from "react"
import { TripInfoContext } from "../pages/Vote/context/tripInfo/TripInfoContext";

export const useTripInfoContext = () => {
  const context = useContext(TripInfoContext);
  if (!context) {
    throw new Error("useTripInfoContext must be used within a TripInfoProvider");
  }
  return context;
};