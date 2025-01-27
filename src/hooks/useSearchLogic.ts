import { useState } from "react";
import { useSearchPlaceWithZip } from "../apis/searchAddress/index";

// Place 데이터 타입 정의
export interface Place {
  id: string;
  place_name: string;
  zone_no: string;
  road_address_name?: string;
  address_name?: string;
  x: number;
  y: number;
}

export function useSearchLogic(itemsPerPage: number = 5) {
  const [query, setQuery] = useState<string>(""); // 검색어
  const [results, setResults] = useState<Place[]>([]); // 검색 결과
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [isError, setIsError] = useState<boolean>(false); // 에러 상태
  const [errorMessage, setErrorMessage] = useState<string | null>(null); // 에러 메시지
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  const [selectedResult, setSelectedResult] = useState<Place | null>(null); // 선택된 항목

  const { mutateAsync: searchPlacesWithZip } = useSearchPlaceWithZip();

  // 검색 실행 함수
  const handleSearch = async () => {
    if (!query.trim()) {
      alert("검색어를 입력해주세요.");
      return;
    }

    setLoading(true);
    setIsError(false);
    setErrorMessage(null);

    try {
      const fetchedResults: Place[] = [];
      let isEnd = false;
      let page = 1;

      while (!isEnd && fetchedResults.length < 50) {
        const data = await searchPlacesWithZip({ query, page, size: 5 });

        const transformedData: Place[] = data.map((doc) => ({
          id: doc.id,
          place_name: doc.place_name,
          zone_no: doc.zone_no || "",
          road_address_name: doc.road_address_name,
          address_name: doc.address_name,
          x: parseFloat(doc.x),
          y: parseFloat(doc.y),
        }));

        fetchedResults.push(...transformedData);

        isEnd = data.length < 5;
        page += 1;
      }

      setResults(fetchedResults);
      setCurrentPage(1); 
    } catch (error) {
      setIsError(true);
      setErrorMessage("검색 중 문제가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectItem = (item: Place) => {
    setSelectedResult((prev) => (prev?.id === item.id ? null : item));
  };

  // 현재 페이지의 결과 계산
  const paginatedResults = results.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    query,
    setQuery,
    results,
    paginatedResults,
    loading,
    isError,
    errorMessage,
    currentPage,
    setCurrentPage,
    selectedResult,
    handleSearch,
    handleSelectItem,
  };
}
