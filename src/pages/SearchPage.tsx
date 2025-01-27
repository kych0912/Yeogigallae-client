import * as S from "./Functional/SearchPage/Styles";
import SearchInput from "./Functional/SearchPage/_components/SearchInput";
import ResultList from "./Functional/SearchPage/_components/ResultList";
import Pagination from "./Functional/SearchPage/_components/Pagination";
import { useSearchLogic } from "../hooks/useSearchLogic";

export default function SearchPage() {
  const {
    query,
    setQuery,
    results,
    paginatedResults,
    loading,
    isError,
    handleSearch,
    selectedResult,
    handleSelectItem,
    currentPage,
    setCurrentPage,
  } = useSearchLogic();

  return (
    <>
      <SearchInput
        query={query}
        setQuery={setQuery}
        isError={isError}
        handleSearch={handleSearch}
        isButtonDisabled={!query.trim()}
      />

      {!loading && results.length > 0 && (
        <S.ResultWrapper>
          주소 검색결과 총 {results.length}건
        </S.ResultWrapper>
      )}

      {!loading && !isError && results.length > 0 && (
        <ResultList
          results={paginatedResults}
          selectedResult={selectedResult}
          handleSelectItem={handleSelectItem}
        />
      )}

      {!loading && !isError && results.length > 5 && (
        <Pagination
          currentPage={currentPage}
          totalItems={results.length}
          itemsPerPage={5}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
