import React, { useState, useEffect } from "react";
import * as S from "./Styles";
import { searchPlace } from "../../../apis/searchAddress/index";
import SearchInput from "./_components/SearchInput";
import ResultList from "./_components/ResultList";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]);
  const [selectedResult, setSelectedResult] = useState<string | null>(null); // 선택된 항목의 ID 저장
  const [isError, setIsError] = useState<boolean>(false);
  const [isTouched, setIsTouched] = useState<boolean>(false);

  useEffect(() => {
    if (isTouched) {
      const isQueryEmpty = !query.trim();
      setIsError(isQueryEmpty);
      setIsButtonDisabled(isQueryEmpty);
    }
  }, [query, isTouched]);

  const handleSearch = async () => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      alert("검색어를 입력해주세요.");
      return;
    }

    try {
      const searchQuery = query.trim();
      const data = await searchPlace({ query: searchQuery });
      setResults(data.documents.slice(0, 10));
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  const handleSelectItem = (selected: { id: string }) => {
    setSelectedResult(selected.id); // 선택된 항목의 ID 업데이트
  };

  return (
    <S.Container>
      <SearchInput
        query={query}
        setQuery={setQuery}
        isError={isError}
        setIsTouched={setIsTouched}
        handleSearch={handleSearch}
        isButtonDisabled={isButtonDisabled}
      />
      <ResultList
        results={results}
        selectedResult={selectedResult}
        handleSelectItem={handleSelectItem}
      />
    </S.Container>
  );
};

export default SearchPage;
