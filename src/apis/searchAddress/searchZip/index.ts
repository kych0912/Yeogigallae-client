import axios from 'axios';
import { KakaoCoordToAddressResponse } from '../types';

const BASE_COORD_TO_ADDRESS_URL = 'https://dapi.kakao.com/v2/local/geo/coord2address.json';
const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;

/**
 * 좌표를 사용하여 주소 정보를 가져오는 함수
 * @param params KakaoCoordToAddressParams - 좌표 정보
 * @returns Promise<string | null> - 우편번호 (없을 경우 null 반환)
 */

export const searchZip = async (
  x: string,
  y: string
): Promise<string | null> => {
  try {
    const response = await axios.get<KakaoCoordToAddressResponse>(BASE_COORD_TO_ADDRESS_URL, {
      headers: {
        Authorization: `KakaoAK ${KAKAO_API_KEY}`,
      },
      params: { x, y },
    });

    return response.data.documents[0]?.road_address?.zone_no || null;
  } catch (error) {
    console.error('Error while fetching address by coordinates:', error);
    return null;
  }
};
