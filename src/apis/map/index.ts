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
    const REST_API_KEY = import.meta.env.VITE_MAP_REST_API_KEY;
    const url = 'https://apis-navi.kakaomobility.com/v1/waypoints/directions';

    const origin = {
        name: start.name,
        x: start.lat,
        y: start.lng
    };

    const destination = {
        name: end.name,
        x: end.lat,
        y: end.lng
    };
    
    const waypointsParam = waypoints.map(point => ({
        name: point.name,
        x: point.lat,
        y: point.lng
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