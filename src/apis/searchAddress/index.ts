import { useMutation } from '@tanstack/react-query';
import { fetchZipForPlace } from './searchZip';
import axios from 'axios';
import { KakaoPlaceSearchParams, KakaoPlaceDocument } from './types';

export const useSearchPlaceWithZip = () => {
  return useMutation<
    KakaoPlaceDocument[], 
    Error,                
    KakaoPlaceSearchParams 
  >({
    mutationFn: async (params: KakaoPlaceSearchParams) => {
      if (!params.query) {
        throw new Error('Query is required');
      }

      // 장소 검색
      const { data: searchResults } = await axios.get<{ documents: KakaoPlaceDocument[] }>(
        'https://dapi.kakao.com/v2/local/search/keyword.json',
        {
          headers: { Authorization: `KakaoAK ${import.meta.env.VITE_KAKAO_REST_API_KEY}` }, // 수정
          params,
        }
      );

      if (!searchResults.documents || searchResults.documents.length === 0) {
        console.warn('검색 결과가 없습니다.');
        return [];
      }

      const resultsWithZip: KakaoPlaceDocument[] = await Promise.all(
        searchResults.documents.map(async (document) => {
          try {
            const zipResult = await fetchZipForPlace({ x: document.x, y: document.y });
            return { ...document, zone_no: zipResult?.zone_no }; 
          } catch (error) {
            console.warn('우편번호 가져오기 실패:', error);
            return { ...document, zone_no: undefined }; 
          }
        })
      );

      return resultsWithZip;
    },
    onError: (error: Error) => {
      console.error('장소 검색 및 우편번호 추가 실패:', error.message);
    },
  });
};

