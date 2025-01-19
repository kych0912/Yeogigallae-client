import { searchPlace } from './searchPlace';
import { searchZip } from './searchZip';
import { KakaoPlaceSearchParams } from './types';

/**
 * 장소 검색 및 우편번호 결합 함수
 * @param params KakaoPlaceSearchParams - 검색 파라미터
 * @returns Promise<any[]> - 전체 주소와 우편번호가 포함된 결과
 */
export const searchPlaceWithZip = async (params: KakaoPlaceSearchParams): Promise<any[]> => {
  try {
    // 장소 검색
    const placeData = await searchPlace(params);

    // 우편번호 추가
    const resultsWithZip = await Promise.all(
      placeData.documents.map(async (document) => {
        const zone_no = await searchZip(document.x, document.y); // 좌표 기반 우편번호 요청
        return { ...document, zone_no }; // 우편번호 추가
      })
    );

    return resultsWithZip; // 우편번호가 포함된 데이터 반환
  } catch (error) {
    console.error('Error while fetching places with zip codes:', error);
    throw error;
  }
};
