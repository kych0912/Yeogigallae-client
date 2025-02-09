import * as S from "./ResultList.styles";
import { ResultListProps } from "../types/types";
import SearchListItem from "./SearchListItem";

export default function ResultList({
  results,
  handleSelectItem
}: ResultListProps) {
  return (
    <S.Results $isVisible={results.length > 0}>
      {results.map((result, index) => {
        return (
          <SearchListItem
            key={result.id}
            result={result}
            index={index}
            results={results}
            handleSelectItem={handleSelectItem}
          />
        );
      })}
    </S.Results>

  );
}
