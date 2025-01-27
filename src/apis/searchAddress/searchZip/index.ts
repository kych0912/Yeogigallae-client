import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { KakaoCoordToAddressParams, KakaoCoordToAddressResponse, KakaoPlaceDocument } from '../types';

const BASE_COORD_TO_ADDRESS_URL = 'https://dapi.kakao.com/v2/local/geo/coord2address.json';
const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

/**
 * 좌표로 우편번호를 가져오는 함수
 * @param params KakaoCoordToAddressParams - 좌표 파라미터 (x, y)
 * @returns Promise<Partial<KakaoPlaceDocument>> - 우편번호가 추가된 장소 데이터
 */
export const fetchZipForPlace = async (
  params: KakaoCoordToAddressParams
): Promise<Partial<KakaoPlaceDocument>> => {
  try {
    const response = await axios.get<KakaoCoordToAddressResponse>(BASE_COORD_TO_ADDRESS_URL, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
      params,
    });

    const road_address = response.data.documents[0]?.road_address;
    const zone_no = road_address?.zone_no;

    return {
      x: params.x,
      y: params.y,
      road_address_name: road_address?.road_address_name || '',
      zone_no,
    };
  } catch (error) {
    console.error('API 호출 실패:', error);
    throw error;
  }
};


/**
 * 좌표 기반 우편번호 검색용 React Query Mutation
 */
export const useFetchZipForPlace = () => {
  return useMutation<Partial<KakaoPlaceDocument>, Error, KakaoCoordToAddressParams>({
    mutationFn: fetchZipForPlace, 
    onError: (error: Error, variables: KakaoCoordToAddressParams) => {
      console.error(
        `좌표 (${variables.x}, ${variables.y})에 대한 우편번호 가져오기 실패:`,
        error.message
      );
    },
  });
};
