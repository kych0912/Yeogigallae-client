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

// 1일차 일정 타입
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
    result: FirstDayCourse; // 배열이 아니라 단일 객체로 변경
};
