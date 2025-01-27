import { useState } from "react";
import { Place } from "./useSearchLogic"; 

export function useResultSelection() {
  const [selectedResult, setSelectedResult] = useState<Place | null>(null); // 선택된 결과
  const [selectedPlaceName, setSelectedPlaceName] = useState<string>(""); // 선택된 장소 이름

  // 선택/해제 로직
  const toggleSelectItem = (item: Place) => {
    setSelectedResult((prevSelectedResult) =>
      prevSelectedResult?.id === item.id ? null : item
    );
    setSelectedPlaceName((prev) =>
      prev === item.place_name ? "" : item.place_name
    );
  };

  return {
    selectedResult,
    selectedPlaceName,
    toggleSelectItem,
  };
}
