import { useQueries } from "@tanstack/react-query";
import { getCarDirection } from "../../apis/map";

export interface Place {
    id: number;
    name: string;
    coordinates: { lat: number; lng: number };
}

// 전체 일정에 대한 병렬 조회
export const useGetAllCourses = (dailyPlaces: Place[][]) => {
    return useQueries({
        queries: dailyPlaces.map((places, dayIndex) => ({
            queryKey: ["course", dayIndex],
            queryFn: () => {
                if (places.length < 2) return null;

                const start = { name: places[0].name, lat: places[0].coordinates.lat, lng: places[0].coordinates.lng };
                const end = { name: places[places.length - 1].name, lat: places[places.length - 1].coordinates.lat, lng: places[places.length - 1].coordinates.lng };
                const waypoints = places.slice(1, -1).map((place) => ({ name: place.name, lat: place.coordinates.lat, lng: place.coordinates.lng }));

                return getCarDirection(start, end, waypoints);
            },
            enabled: !!places && places.length > 1,
        })),
    });
};
