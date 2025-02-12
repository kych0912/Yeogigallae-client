import * as S from "./Styles";
import ResultList from "./_components/ResultList";
import Pagination from "./_components/Pagination";
import { useSearchPlace } from "../../react-query/queries/search/queries";
import Input from "../../components/Input";
import { useState, useEffect } from "react";
import SearchSkeleton from "./_components/SearchSkeleton";
import { useSearch } from "./context/SearchContext";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { currentPage, setResults, setTotalPages, selectPlace } = useSearch();

  const { placeQuery, coordQueries } = useSearchPlace({ query: searchQuery, page: currentPage, size: 5 });

  const { data: placeData, isLoading, refetch } = placeQuery;
  const pageableCount = placeData?.meta.pageable_count ?? 0;

  const coordData = !isLoading
    ? coordQueries.map((coord) => ({
        zoneNo: coord.data?.documents[0].road_address?.zone_no,
      }))
    : [];

  useEffect(() => {
    if (placeData) {
      setResults(placeData.documents);
      setTotalPages(Math.ceil(pageableCount / 5));
    }
  }, [placeData, pageableCount, setResults, setTotalPages]);

  return (
    <>
      <Input
        variant="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={() => {
          setSearchQuery(query);
          refetch();
        }}
        isSearchButtonDisabled={!query.trim()}
        isError={false}
        placeholder="도로명 또는 지번을 입력하세요"
      />

      <S.ResultWrapper>주소 검색결과 총 {pageableCount}건</S.ResultWrapper>

      {isLoading && <SearchSkeleton />}

      {!isLoading && placeData && placeData.documents.length > 0 && (
        <ResultList results={placeData.documents} coords={coordData} handleSelectItem={selectPlace} />
      )}

      {placeData && (
        <Pagination />
      )}
    </>
  );
}
