import axios from "axios";
import { Route } from "./types";

interface Point {
    name: string;
    lat: number;
    lng: number;
  }
  
export const getCarDirection = async (
    start: Point, 
    end: Point, 
    waypoints: Point[] = []
): Promise<Route> => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const url = 'https://apis-navi.kakaomobility.com/v1/waypoints/directions';

    const origin = {
        name: start.name,
        x: start.lng,
        y: start.lat
    };

    const destination = {
        name: end.name,
        x: end.lng,
        y: end.lat
    };
    
    const waypointsParam = waypoints.map(point => ({
        name: point.name,
        x: point.lng,
        y: point.lat
    }));

    const headers = {
    Authorization: `KakaoAK ${REST_API_KEY}`,
    'Content-Type': 'application/json'
    };

    const requestBody = {
    origin,
    destination,
    waypoints: waypointsParam,
    priority: 'RECOMMEND',
    car_hipass: true,
    avoid: ["uturn"]
    };
    
    const response = await axios.post(url, requestBody, { headers });
    return response.data;
}