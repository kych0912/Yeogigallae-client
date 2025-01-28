import React from "react";
import * as S from "./ResultList.styles";
import MapComponent from "./SearchMap/SearchMap";
import ToggleIcon from "../../../assets/icons/ToggleIcon.svg?react";
import { Place } from "../../../hooks/useSearchLogic";

interface ResultListProps {
  results: Place[];
  selectedResult: Place | null;
  handleSelectItem: (item: Place) => void;
}

export default function ResultList({
  results,
  selectedResult,
  handleSelectItem,
}: ResultListProps) {
  return (
    <S.Results $isVisible={results.length > 0}>
      {results.map((result, index) => {
        const isSelected = selectedResult?.id === result.id;

        return (
          <React.Fragment key={result.id}>
            <S.ResultWrapper>
              <S.ResultItem
                $isFirst={index === 0}
                $isLast={index === results.length - 1}
                onClick={() => handleSelectItem(result)}
                $isSelected={isSelected}
              >
                <S.ZipCode>{result.zone_no || "우편번호 없음"}</S.ZipCode>
                <S.PlaceName>{result.place_name}</S.PlaceName>
                <S.InfoContainer>
                  <S.AddressName>
                    {result.road_address_name || result.address_name}
                  </S.AddressName>
                  <S.MapButton>
                    지도
                    <S.RotateIcon $isRotated={isSelected}>
                      <ToggleIcon />
                    </S.RotateIcon>
                  </S.MapButton>
                </S.InfoContainer>
              </S.ResultItem>
            </S.ResultWrapper>

            {isSelected && (
              <MapComponent
                center={{
                  x: result.x.toString(),
                  y: result.y.toString(),
                }}
                results={[{ ...result, x: result.x.toString(), y: result.y.toString() }]}
                mapContainerId={`map-${result.id}`}
              />
            )}

            {index < results.length - 1 && <S.Divider />}
          </React.Fragment>
        );
      })}
    </S.Results>
  );
}
