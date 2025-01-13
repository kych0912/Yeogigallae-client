import React from "react";
import * as S from "./ResultList.styles";

interface ResultListProps {
  results: any[];
  handleSelectItem: (selected: { x: string; y: string; name: string }) => void;
}

const ResultList: React.FC<ResultListProps> = ({ results, handleSelectItem }) => {
  if (results.length === 0) return null;

  return (
    <S.Results $isVisible={results.length > 0}>
      {results.map((result, index) => (
        <S.ResultItem
          key={index}
          onClick={() =>
            handleSelectItem({
              x: result.x,
              y: result.y,
              name: `${result.place_name} [${result.road_address_name || result.address_name}]`,
            })
          }
        >
          <S.PlaceName>{result.place_name}</S.PlaceName>
          <S.AddressName>
            {result.road_address_name || result.address_name}
          </S.AddressName>
        </S.ResultItem>
      ))}
    </S.Results>
  );
};

export default ResultList;
