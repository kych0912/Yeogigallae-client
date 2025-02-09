import { KakaoPlaceDocument } from "../../../apis/searchAddress/types";
import * as S from "./ResultList.styles";
import ToggleIcon from "../../../assets/icons/ToggleIcon.svg?react";
import MapComponent from "./SearchMap/SearchMap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SearchListItemProps {
    result: KakaoPlaceDocument;
    index: number;
    results: KakaoPlaceDocument[];
    handleSelectItem: (item: KakaoPlaceDocument) => void;
}

export default function SearchListItem({
    result,
    index,
    results,
    handleSelectItem,
}: SearchListItemProps) {
    const [isMapOpen, setIsMapOpen] = useState(false);
    const navigate = useNavigate();
    
    return (
        <>
          <S.ResultWrapper onClick={() => {
            handleSelectItem(result)
            navigate(-1);
          }}>
            <S.ResultItem
              $isFirst={index === 0}

              $isLast={index === results.length - 1}

            >
              <S.ZipCode>{result.zone_no || "우편번호 없음"}</S.ZipCode>
              <S.PlaceName>{result.place_name}</S.PlaceName>
              <S.InfoContainer>
                <S.AddressName>
                  {result.road_address_name || result.address_name}
                </S.AddressName>
                <S.MapButton onClick={(e) => {
                    e.stopPropagation();
                    setIsMapOpen(!isMapOpen)
                }}>
                  지도
                  <S.RotateIcon $isRotated={isMapOpen}>
                    <ToggleIcon />

                  </S.RotateIcon>
                </S.MapButton>
              </S.InfoContainer>
            </S.ResultItem>
          </S.ResultWrapper>

          {isMapOpen && (
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
        </>
      );
}
