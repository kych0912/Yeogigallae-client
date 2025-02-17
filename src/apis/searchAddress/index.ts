import axios from 'axios';
import { KakaoPlaceSearchParams, KakaoPlaceSearchResponse, KakaoCoordToAddressParams, KakaoCoordToAddressResponse } from './types';
/*
  주소 검색 쿼리
  @param params KakaoPlaceSearchParams - 주소 검색 파라미터
  @returns Promise<KakaoPlaceSearchResponse> - 검색 결과
*/

export const getSearchPlace = async (params: KakaoPlaceSearchParams) => {
  const { data: searchResults } = await axios.get<KakaoPlaceSearchResponse>(
    'https://dapi.kakao.com/v2/local/search/keyword.json',

    {
      headers: { Authorization: `KakaoAK ${import.meta.env.VITE_MAP_REST_API_KEY}` },
      params,
    }
  );
  return searchResults;
};

export const getAddressToZip = async (params: KakaoCoordToAddressParams) => {
  const { data: searchResults } = await axios.get<KakaoCoordToAddressResponse>(
    'https://dapi.kakao.com/v2/local/geo/coord2address.json',
    {

      headers: { Authorization: `KakaoAK ${import.meta.env.VITE_MAP_REST_API_KEY}` },
      params,
    }
  );
  return searchResults;
};

