import { KakaoPlaceDocument } from "../../../apis/searchAddress/types";

// 장소 입력창창
export interface SearchInputProps {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  isError: boolean;
  handleSearch: () => void;
  isButtonDisabled: boolean;
}

// 장소 리스트
export interface ResultListProps {
  results: KakaoPlaceDocument[];
  coords: { zoneNo: string | undefined }[];
  handleSelectItem: (item: KakaoPlaceDocument) => void;
}

// 장소 찾기 지도
export interface MapProps {
  center: { x: string; y: string };
  results: { x: string; y: string; place_name: string }[];
  mapContainerId: string; // 동적으로 생성된 ID를 받을 수 있도록 수정
}

// 페이지네이션
export interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}