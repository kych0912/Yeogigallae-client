import React, { useState, useEffect } from "react";
import * as S from "./Styles";
import { searchPlaceWithZip } from "../../../apis/searchAddress/index";
import SearchInput from "./_components/SearchInput";
import ResultList from "./_components/ResultList";
import Pagination from "./_components/Pagination";

const SearchPage: React.FC<{ onPlaceSelect: (placeName: string) => void }> = ({
  onPlaceSelect,
}) => {
  const [query, setQuery] = useState<string>(""); // 검색어
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true); // 버튼 비활성화 여부
  const [results, setResults] = useState<any[]>([]); // 검색 결과
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지
  const [selectedResult, setSelectedResult] = useState<string | null>(null); // 선택된 항목
  const [isError, setIsError] = useState<boolean>(false); // 에러 상태
  const [isTouched, setIsTouched] = useState<boolean>(false); // 입력 필드가 터치되었는지
  const ITEMS_PER_PAGE = 5; // 페이지당 아이템 수

  // 입력값 상태 관리
  useEffect(() => {
    if (isTouched) {
      const isQueryEmpty = !query.trim();
      setIsError(isQueryEmpty);
      setIsButtonDisabled(isQueryEmpty);
    }
  }, [query, isTouched]);

  // 검색 처리 함수
  const handleSearch = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      alert("검색어를 입력해주세요.");
      return;
    }

    try {
      const results: any[] = [];
      let isEnd = false;
      let page = 1;

      while (!isEnd && results.length < 100) {
        const data = await searchPlaceWithZip({ query: trimmedQuery, page, size: 15 });

        results.push(...data);
        isEnd = data.length < 15;
        page += 1;
      }

      setResults(results.slice(0, 100)); // 최대 100개 결과
      setCurrentPage(1); // 검색 시 페이지 초기화
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  // 항목 선택 처리 함수
  const handleSelectItem = (selected: { id: string | null; placeName: string | null }) => {
    setSelectedResult(selected.id); // 선택 상태 업데이트
    if (selected.placeName) {
      onPlaceSelect(selected.placeName); // 부모로 선택된 데이터 전달
    } else {
      onPlaceSelect("장소를 입력하세요"); // 기본값 전달
    }
  };

  // 페이지 변경 처리
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 현재 페이지 결과 계산
  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      {/* 검색 입력 */}
      <SearchInput
        query={query}
        setQuery={setQuery}
        isError={isError}
        setIsTouched={setIsTouched}
        handleSearch={handleSearch}
        isButtonDisabled={isButtonDisabled}
      />

      {/* 검색 결과 정보 */}
      <S.ResultWrapper>
        {results.length > 0 && `주소 검색결과 총 ${results.length}건`}
      </S.ResultWrapper>

      {/* 결과 리스트 */}
      <ResultList
        results={paginatedResults} // 현재 페이지 결과 전달
        selectedResult={selectedResult} // 선택된 결과 전달
        handleSelectItem={handleSelectItem} // 선택 처리 함수 전달
      />

      {/* 페이지네이션 */}
      <Pagination
        currentPage={currentPage} // 현재 페이지 전달
        totalItems={results.length} // 총 결과 개수 전달
        itemsPerPage={ITEMS_PER_PAGE} // 페이지당 항목 수 전달
        onPageChange={handlePageChange} // 페이지 변경 처리 함수 전달
      />
    </>
  );
};

export default SearchPage;
