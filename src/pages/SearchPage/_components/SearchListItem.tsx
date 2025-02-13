import { useState } from "react";
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

export default function SearchListItem({
    result,
    index,
    results,
    zoneNo,
    handleSelectItem,
}: SearchListItemProps) {
    const [isMapOpen, setIsMapOpen] = useState(false);

    return (
        <>
          <S.ResultWrapper onClick={() => {
            handleSelectItem(result)
          }}>
            <S.ResultItem
              $isFirst={index === 0}
              $isLast={index === results.length - 1}

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
