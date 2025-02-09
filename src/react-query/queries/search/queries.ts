import { useQuery, useQueries } from "@tanstack/react-query";
import { KakaoPlaceSearchParams } from "../../../apis/searchAddress/types";
import { getSearchPlace, getAddressToZip } from "../../../apis/searchAddress";

//keyword로 주소 검색 후 좌표로 변환
//변환된 좌표로 우편번호 검색
export const useSearchPlace = (params: KakaoPlaceSearchParams) => {
    const placeQuery = useQuery({
        queryKey: ['places', params],
        queryFn: () => getSearchPlace(params),
        enabled: !!params.query
    });

    const coordQueries = useQueries({
        queries: placeQuery.data?.documents.map(place => ({
            queryKey: ['address', place.x, place.y],
            queryFn: () => getAddressToZip({ x: place.x, y: place.y }),
            enabled: !!placeQuery.data
        })) ?? []
    });

    return {
        placeQuery,
        coordQueries
    };
};

