import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAddressToZip } from "../../../apis/searchAddress";
import { KakaoPlaceDocument } from "../../../apis/searchAddress/types";
import * as S from "./ResultList.styles";
import ToggleIcon from "../../../assets/icons/ToggleIcon.svg?react";
import MapComponent from "./SearchMap/SearchMap";
import Skeleton from "../../../components/Skeleton"; 

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
  const [zoneNo, setZoneNo] = useState(result.zone_no || "우편번호 없음");
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!result.zone_no) {
      setIsLoading(true); 
      getAddressToZip({ x: result.x, y: result.y })
        .then((response) => {
          const newZoneNo = response.documents[0]?.road_address?.zone_no || "우편번호 없음";
          setZoneNo(newZoneNo);
        })
        .catch((error) => {
          console.error("📢 우편번호 조회 실패:", error);
        })
        .finally(() => {
          setIsLoading(false); 
        });
    }
  }, [result]);

  return (
    <>
      <S.ResultWrapper>
        <S.ResultItem $isFirst={index === 0} $isLast={index === results.length - 1}>
          <S.ZipCode>
            {isLoading ? <Skeleton variant="text" width="70px" height="16px" /> : zoneNo}
          </S.ZipCode>

          <S.PlaceName>{result.place_name}</S.PlaceName>
          <S.InfoContainer>
            <S.AddressName>{result.road_address_name || result.address_name}</S.AddressName>

            <S.MapButton
              onClick={(e) => {
                e.stopPropagation();
                setIsMapOpen(!isMapOpen);
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
