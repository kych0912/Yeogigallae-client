import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { KakaoPlaceDocument } from "../../../apis/searchAddress/types";
import * as S from "./ResultList.styles";
import ToggleIcon from "../../../assets/icons/ToggleIcon.svg?react";
import MapComponent from "./SearchMap/SearchMap";
import { useSearch } from "../context/SearchContext";

interface SearchListItemProps {
  result: KakaoPlaceDocument;
  index: number;
  results: KakaoPlaceDocument[];
  zoneNo: string | undefined;
}

export default function SearchListItem({ result, index, results, zoneNo }: SearchListItemProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const navigate = useNavigate();
  const { selectPlace, centerCoords } = useSearch();

  return (
    <>
      <S.ResultWrapper
        onClick={() => {
          selectPlace(result); 
          navigate(-1);
        }}
      >
        <S.ResultItem $isFirst={index === 0} $isLast={index === results.length - 1}>
          <S.ZipCode>{zoneNo || "우편번호 없음"}</S.ZipCode>
          <S.PlaceName>{result.place_name}</S.PlaceName>
          <S.InfoContainer>
            <S.AddressName>{result.road_address_name || result.address_name}</S.AddressName>
            <S.MapButton
              onClick={(e) => {
                e.stopPropagation();
                setIsMapOpen(!isMapOpen);
                selectPlace(result);
              }}
            >
              지도
              <S.RotateIcon $isRotated={isMapOpen}>
                <ToggleIcon />
              </S.RotateIcon>
            </S.MapButton>
          </S.InfoContainer>
        </S.ResultItem>
      </S.ResultWrapper>

      {isMapOpen && centerCoords && (
        <MapComponent
          mapContainerId={`map-${result.id}`}
        />
      )}

      {index < results.length - 1 && <S.Divider />}
    </>
  );
}
