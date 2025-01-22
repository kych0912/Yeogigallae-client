import React, { useState, useEffect } from "react";
import * as S from "./Styles";
import { searchPlace } from "../../../apis/searchAddress/index";
import SearchInput from "./_components/SearchInput";
import ResultList from "./_components/ResultList";
import MapComponent from "./_components/SearchMap/SearchMap";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [results, setResults] = useState<any[]>([]);
  const [center, setCenter] = useState<{ x: string; y: string } | null>(null);
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
      if (data.documents.length > 0) {
        setCenter({ x: data.documents[0].x, y: data.documents[0].y });
      }
    } catch (error) {
      console.error("검색 실패:", error);
    }
  };

  const handleSelectItem = (selected: { x: string; y: string; name: string }) => {
    setCenter({ x: selected.x, y: selected.y });
    setQuery(selected.name);
    setResults([]);
  };

  return (
    <S.Container>
      <S.Header>장소 찾기</S.Header>
      <S.Spacer />
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
        handleSelectItem={handleSelectItem}
      />
      {center && <MapComponent center={center} results={results} />}
    </S.Container>
  );
};

export default SearchPage;
