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
    day: string;
    places: CoursePlace[];
};

export type CourseResponse = {
    httpStatus: string;
    code: string;
    message: string;
    result: FirstDayCourse; // 배열이 아닌 단일 객체로 수정
};
