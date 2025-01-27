import React from "react";
import * as S from "./SearchInput.styles";
import SearchIcon from "../../../../assets/icons/SearchIcon.svg?react";

interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  handleSearch: () => void;
  isButtonDisabled: boolean;
}

export default function SearchInput({
  query,
  setQuery,
  isError,
  handleSearch,
  isButtonDisabled,
}: SearchInputProps) {
  const handleClear = () => setQuery("");

  return (
    <S.Container $isError={isError}>
      <S.InputWrapper>
        <S.SearchInput
          placeholder="도로명 또는 지번을 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <S.ClearButton onClick={handleClear}>
            ⨉
          </S.ClearButton>
        )}
      </S.InputWrapper>
      <S.SearchButton
        $disabled={isButtonDisabled}
        onClick={handleSearch}
        disabled={isButtonDisabled}
      >
        <SearchIcon />
      </S.SearchButton>
    </S.Container>
  );
}
