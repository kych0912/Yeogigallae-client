export interface Route {
    trans_id: string;
    routes: RouteDetail[];
  }
  
export interface RouteDetail {
    result_code: number;
    result_msg: string;
    summary: RouteSummary;
    sections: Section[];
  }
  
  interface RouteSummary {
    origin: Location;
    destination: Location;
    waypoints: Waypoint[];
    priority: string;
    bound: Bound;
    fare: Fare;
    distance: number;
    duration: number;
  }
  
  interface Location {
    name: string;
    x: number;
    y: number;
  }
  
  interface Waypoint extends Location {
    name: string;
  }
  
  interface Bound {
    min_x: number;
    min_y: number;
    max_x: number;
    max_y: number;
  }
  
  interface Fare {
    taxi: number;
    toll: number;
  }
  
  export interface Section {
    distance: number;
    duration: number;
    bound?: Bound;
    roads?: Road[];
    guides?: Guide[];
  }
  
  interface Road {
    name: string;
    distance: number;
    duration: number;
    traffic_speed: number;
    traffic_state: number;
    vertexes: number[];
  }
  
  interface Guide {
    name: string;
    x: number;
    y: number;
    distance: number;
    duration: number;
    type: number;
    guidance: string;
    road_index: number;
  }
  