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

      const mapOption = {
        center: new window.kakao.maps.LatLng(Number(center.y), Number(center.x)),
        level: 3,
      };

      // 지도 생성
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // 마커 추가
      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(Number(center.y), Number(center.x)),
        map: map,
      });

      const infowindow = new window.kakao.maps.InfoWindow({
        content: `<div style="padding:5px;font-size:12px;">${results[0]?.place_name || "선택된 위치"}</div>`,
      });

      // 마커에 이벤트 추가
      window.kakao.maps.event.addListener(marker, "mouseover", () =>
        infowindow.open(map, marker)
      );
      window.kakao.maps.event.addListener(marker, "mouseout", () =>
        infowindow.close()
      );
    };

    if (!window.kakao || !window.kakao.maps) {
      // 스크립트를 동적으로 로드
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_REST_API_KEY&libraries=services`;
      script.async = true;
      script.onload = () => loadKakaoMap();
      document.head.appendChild(script);
    } else {
      loadKakaoMap();
    }
  }, [center, results]);

  return <S.Map id="map" />;
};

export default MapSearch;
