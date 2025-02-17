export type CourseResponse = {
    httpStatus: string;
    code: string;
    message: string;
    result: FirstDayCourse;
};

export type CoursePlace = {
    id: number;
    placeName: string;
    address: string;
    latitude: number;
    longitude: number;
    image: string;
    description: string;
    userName: string;
    profileImage: string;
};

export type FirstDayCourse = {
    roomName: string;
    totalRoomMember: number;
    dailyItineraries: [FirstDayItinerary];
};

export type FirstDayItinerary = {
    day: string;
    places: CoursePlace[];
};
