import React, { useState, useEffect } from "react";
import * as S from "./Styles";
import { searchPlaceWithZip } from "../../../apis/searchAddress/index";
import SearchInput from "./_components/SearchInput";
import ResultList from "./_components/ResultList";
import Pagination from "./_components/Pagination";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>(""); 
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]); 
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [selectedResult, setSelectedResult] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState<boolean>(false);
  const ITEMS_PER_PAGE = 5;

  // 검색 버튼 활성화 여부 관리
  useEffect(() => {
    if (isTouched) {
      const isQueryEmpty = !query.trim();
      setIsError(isQueryEmpty);
      setIsButtonDisabled(isQueryEmpty);
    }
  }, [query, isTouched]);

  // 검색 실행 함수
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

      setResults(results.slice(0, 100)); 
      setCurrentPage(1); 
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  const handleSelectItem = (selected: { id: string | null }) => {
    setSelectedResult(selected.id);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 현재 페이지에 표시할 데이터
  const paginatedResults = results.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <>
      <SearchInput
        query={query}
        setQuery={setQuery}
        isError={isError}
        setIsTouched={setIsTouched}
        handleSearch={handleSearch}
        isButtonDisabled={isButtonDisabled}
      />
      
      <S.ResultWrapper>
        {results.length > 0 && `주소 검색결과 총 ${results.length}건`}
      </S.ResultWrapper>

      <ResultList
        results={paginatedResults} 
        selectedResult={selectedResult} 
        handleSelectItem={handleSelectItem}/>
      <Pagination
        currentPage={currentPage}
        totalItems={results.length}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default SearchPage;
