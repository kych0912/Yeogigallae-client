import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { KakaoPlaceSearchParams, KakaoPlaceSearchResponse } from '../types';

const BASE_URL = 'https://dapi.kakao.com/v2/local/search/keyword.json';
const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

/**
 * 장소 검색 API 호출 함수
 * @param params KakaoPlaceSearchParams - 검색 파라미터
 * @returns Promise<KakaoPlaceSearchResponse> - 검색 결과
 */
const fetchSearchPlace = async (params: KakaoPlaceSearchParams): Promise<KakaoPlaceSearchResponse> => {
  const response = await axios.get<KakaoPlaceSearchResponse>(BASE_URL, {
    headers: {
      Authorization: `KakaoAK ${KAKAO_API_KEY}`,
    },
    params,
  });
  return response.data;
};

/**
 * React Query 기반 장소 검색 Hook
 * @param params KakaoPlaceSearchParams - 검색 파라미터
 */
export const useSearchPlace = (params: KakaoPlaceSearchParams) => {
  return useQuery({
    queryKey: ['searchPlace', params],
    queryFn: () => fetchSearchPlace(params),
    enabled: !!params.query, 
  });
};
