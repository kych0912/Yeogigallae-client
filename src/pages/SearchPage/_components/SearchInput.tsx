import Input from "../../../components/Input";
import { SearchInputProps } from "../types/types";

export default function SearchInput({
  query,
  setQuery,
  isError,
  handleSearch,
  isButtonDisabled,
}: SearchInputProps) {
  return (
    <Input
      variant="search" 
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onSearch={handleSearch} 
      isSearchButtonDisabled={isButtonDisabled}
      isError={isError}
      placeholder="도로명 또는 지번을 입력하세요"
    />
  );
}
