import React, { useState} from "react";
import * as S from "./ResultList.styles";
import MapComponent from "./SearchMap/SearchMap";
import ToggleIcon from "../../../../assets/icons/ToggleIcon.svg?react";

interface ResultListProps {
  results: any[];
  selectedResult: string | null; 
  handleSelectItem: (selected: { id: string | null }) => void;
}

const ResultList: React.FC<ResultListProps> = ({
  results,
  selectedResult,
  handleSelectItem,
}) => {
  const [rotatedId, setRotatedId] = useState<string | null>(null);

  if (results.length === 0) return null;

  const toggleSelectItem = (id: string) => {
    handleSelectItem({ id: selectedResult === id ? null : id });

    setRotatedId(selectedResult === id ? null : id);
  };

  return (
    <S.Results $isVisible={results.length > 0}>
      {results.map((result, index) => (
        <React.Fragment key={result.id}>
          <S.ResultWrapper>
            <S.ResultItem
              $isFirst={index === 0}
              $isLast={index === results.length - 1}
              onClick={() => toggleSelectItem(result.id)}
            >
              <S.ZipCode>{result.zone_no || "우편번호 없음"}</S.ZipCode>
              <S.PlaceName>{result.place_name}</S.PlaceName>
              <S.InfoContainer>
                <S.AddressName>
                  {result.road_address_name || result.address_name}
                </S.AddressName>
                <S.MapButton>
                  지도
                  <S.RotateIcon $isRotated={rotatedId === result.id}>
                    <ToggleIcon />
                  </S.RotateIcon>
                </S.MapButton>
              </S.InfoContainer>
            </S.ResultItem>

            {selectedResult === result.id && (
              <MapComponent
                center={{ x: result.x, y: result.y }}
                results={[result]}
              />
            )}
          </S.ResultWrapper>

          {index < results.length - 1 && <S.Divider />}
        </React.Fragment>
      ))}
    </S.Results>
  );
};

export default ResultList;
