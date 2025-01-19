import React from "react";
import * as S from "./ResultList.styles";
import MapComponent from "./SearchMap/SearchMap";

interface ResultListProps {
  results: any[];
  selectedResult: string | null; // 선택된 항목의 ID
  handleSelectItem: (selected: { id: string }) => void;
}

const ResultList: React.FC<ResultListProps> = ({ results, selectedResult, handleSelectItem }) => {
  if (results.length === 0) return null;

  return (
    <S.Results $isVisible={results.length > 0}>
      {results.map((result, index) => (
        <div key={index}>
          <S.ResultItem
            onClick={() => handleSelectItem({ id: result.id })}
          >
            <S.PlaceName>{result.place_name}</S.PlaceName>
            <S.AddressName>
              {result.road_address_name || result.address_name}
            </S.AddressName>
          </S.ResultItem>
          
          {selectedResult === result.id && (
            <MapComponent center={{ x: result.x, y: result.y }} results={[result]} />
          )}
        </div>
      ))}
    </S.Results>
  );
};

export default ResultList;
