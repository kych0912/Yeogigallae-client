import * as S from "./Styles";
import ResultList from "./_components/ResultList";
import Pagination from "./_components/Pagination";
import { useSearchPlace } from "../../react-query/queries/search/queries";
import Input from "../../components/Input";
import { useState } from "react";
import SearchSkeleton from "./_components/SearchSkeleton";
import { KakaoPlaceDocument } from "../../apis/searchAddress/types";
export default function SearchPage({
  handleSelectItem,
}: {
  handleSelectItem: (item: KakaoPlaceDocument) => void;
}) {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    placeQuery,
  } = useSearchPlace({ query: searchQuery, page: currentPage, size: 5 });

  const { data:placeData, isLoading, refetch } = placeQuery;
  const pageableCount = placeData?.meta.pageable_count;

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

      <S.ResultWrapper>
        주소 검색결과 총 {pageableCount || 0}건
      </S.ResultWrapper>

      {isLoading && <SearchSkeleton />}

      {!isLoading && placeData && placeData.documents.length > 0 && (
        <ResultList
          results={placeData.documents}
          handleSelectItem={handleSelectItem}
        />
      )}

      {placeData && (
        <Pagination
          currentPage={currentPage}
          totalItems={placeData.meta.pageable_count}
          itemsPerPage={5}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
