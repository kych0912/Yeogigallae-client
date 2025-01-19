import React, { useEffect } from "react";
import * as S from "./SearchMap.style";

interface MapProps {
  center: { x: string; y: string };
  results: { x: string; y: string; place_name: string }[];
}

const MapSearch: React.FC<MapProps> = ({ center, results }) => {
  useEffect(() => {
    const loadKakaoMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error("카카오 맵 API가 로드되지 않았습니다.");
        return;
      }

      const mapContainer = document.getElementById("map");
      if (!mapContainer) return;

      // 지도 옵션 설정
      const mapOption = {
        center: new window.kakao.maps.LatLng(Number(center.y), Number(center.x)),
        level: 3,
        mapTypeId: window.kakao.maps.MapTypeId.ROADMAP,
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 지도 크기 및 해상도 업데이트
      const updateMapSize = () => {

        mapContainer.style.width = `100%`;
        mapContainer.style.height = `15rem`;
        map.relayout(); 
      };

      updateMapSize(); 
      window.addEventListener("resize", updateMapSize); 

      // 마커 생성
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(Number(center.y), Number(center.x)),
        map: map,
      });

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${results[0]?.place_name || "선택된 위치"}</div>`,
      });

      // 마커 이벤트 추가
      window.kakao.maps.event.addListener(marker, "mouseover", () =>
        infowindow.open(map, marker)
      );
      window.kakao.maps.event.addListener(marker, "mouseout", () =>
        infowindow.close()
      );

      return () => {
        window.removeEventListener("resize", updateMapSize); // 이벤트 리스너 정리
      };
    };

    const initializeKakaoMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        const script = document.createElement("script");
        script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_REST_API_KEY&libraries=services`;
        script.async = true;
        script.onload = () => loadKakaoMap();
        document.head.appendChild(script);
      } else {
        loadKakaoMap();
      }
    };

    initializeKakaoMap();
  }, [center, results]);

  return (
    <S.StyledCard>
      <S.Map id="map" />
    </S.StyledCard>
  );
};

export default MapSearch;
