import { useEffect } from "react";
import * as S from "./SearchMap.style";
import { MapProps } from "../../types/types";

export default function MapSearch({ center, results, mapContainerId }: MapProps) {
    useEffect(() => {
        const { kakao } = window;

        if (!kakao || !kakao.maps) {
            return;
        }

        const mapContainer = document.getElementById(mapContainerId);
        if (!mapContainer) {
            return;
        }

        const mapOption = {
            center: new kakao.maps.LatLng(Number(center.y), Number(center.x)),
            level: 3,
        };

        const map = new kakao.maps.Map(mapContainer, mapOption);

        const markers: kakao.maps.Marker[] = [];

        results.forEach((result) => {
            const markerPosition = new kakao.maps.LatLng(Number(result.y), Number(result.x));

            const markerImageSrc =
                "data:image/svg+xml," +
                encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="60" viewBox="0 0 30 35">
            <path fill="#3b46f1" d="M15 0c8.3 0 15 6.7 15 15 0 12.5-15 20-15 20S0 27.5 0 15C0 6.7 6.7 0 15 0z"/>
            <circle cx="15" cy="15" r="6" fill="white"/> 
            <text x="15" y="19" text-anchor="middle" fill="#3b46f1" font-size="12px" font-weight="bold"></text>
          </svg>
        `);

            const markerImageSize = new kakao.maps.Size(28, 38);
            const markerImage = new kakao.maps.MarkerImage(markerImageSrc, markerImageSize);

            const marker = new kakao.maps.Marker({
                position: markerPosition,
                map,
                image: markerImage,
            });

            markers.push(marker);

            const infowindow = new kakao.maps.InfoWindow({
                content: `<div style="padding:5px; font-size:12px;">${result.place_name || "위치"}</div>`,
            });

            kakao.maps.event.addListener(marker, "mouseover", () => {
                infowindow.open(map, marker);
            });

            kakao.maps.event.addListener(marker, "mouseout", () => {
                infowindow.close();
            });
        });

        return () => {
            markers.forEach((marker) => marker.setMap(null));
        };
    }, [center, results, mapContainerId]);

    return (
        <>
            <S.Map id={mapContainerId} />
        </>
    );
}
