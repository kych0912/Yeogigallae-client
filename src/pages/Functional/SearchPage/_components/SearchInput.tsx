import React from "react";
import * as S from "./SearchInput.styles";

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  setIsTouched: React.Dispatch<React.SetStateAction<boolean>>;
  handleSearch: () => void;
  isButtonDisabled: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  isError,
  setIsTouched,
  handleSearch,
  isButtonDisabled,
}) => {
  return (
    <>
      <S.SearchInput
        $isError={isError}
        placeholder="도로명, 지번 주소 또는 장소명 입력"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsTouched(true)}
      />
      <S.SearchButton disabled={isButtonDisabled} onClick={handleSearch}>
        검색
      </S.SearchButton>
    </>
  );
};

export default SearchInput;
