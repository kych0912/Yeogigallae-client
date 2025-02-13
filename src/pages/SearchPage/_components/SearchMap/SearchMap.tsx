import { useEffect, useRef } from "react";
import * as S from "./SearchMap.style";
import { useSearch } from "../../context/SearchContext";
import Card from "../../../../components/Card";

export default function MapSearch({ mapContainerId }: { mapContainerId: string }) {
    const { centerCoords, results } = useSearch();
    const mapRef = useRef<kakao.maps.Map | null>(null);

    useEffect(() => {
        const { kakao } = window;
        if (!kakao || !kakao.maps || !centerCoords) return;

        const mapContainer = document.getElementById(mapContainerId);
        if (!mapContainer) return;

        if (!mapRef.current) {
            mapRef.current = new kakao.maps.Map(mapContainer, {
                center: new kakao.maps.LatLng(Number(centerCoords.y), Number(centerCoords.x)),
                level: 3,
            });
        } else {
            mapRef.current.setCenter(new kakao.maps.LatLng(Number(centerCoords.y), Number(centerCoords.x)));
        }

        const map = mapRef.current;
        const markers: kakao.maps.Marker[] = [];

        results.forEach((result) => {
            const markerPosition = new kakao.maps.LatLng(Number(result.y), Number(result.x));

            const markerImageSrc =
                "data:image/svg+xml," +
                encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="80" viewBox="0 0 30 35">
            <path fill="#3b46f1" d="M15 0c8.3 0 15 6.7 15 15 0 12.5-15 20-15 20S0 27.5 0 15C0 6.7 6.7 0 15 0z"/>
            <circle cx="15" cy="15" r="5" fill="white"/> 
          </svg>
        `);

            const markerImageSize = new kakao.maps.Size(27, 37);
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
    }, [centerCoords, results, mapContainerId]);

    return (
        <Card>
            <S.Map id={mapContainerId} />
        </Card>
    );
}
