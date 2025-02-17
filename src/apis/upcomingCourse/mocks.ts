import { CourseResponse } from "./types";

export const courseMock: CourseResponse = {
    httpStatus: "100 CONTINUE",
    code: "string",
    message: "코스 정보 조회 성공",
    result: {
        roomName: "테스트 룸",
        totalRoomMember: 4,
        dailyItineraries: [
            {
                day: "2025-02-15",
                places: [
                    {
                        id: 1,
                        placeName: "해운대 해수욕장",
                        address: "부산 해운대구 해운대해변로 264",
                        latitude: 35.1587,
                        longitude: 129.1603,
                        image: "https://example.com/image1.jpg",
                        description: "부산의 대표적인 해변",
                        userName: "사용자1",
                        profileImage: "https://example.com/profile1.jpg",
                    },
                    {
                        id: 2,
                        placeName: "광안리 해수욕장",
                        address: "부산 수영구 광안해변로 219",
                        latitude: 35.1531,
                        longitude: 129.1185,
                        image: "https://example.com/image2.jpg",
                        description: "야경이 아름다운 해변",
                        userName: "사용자2",
                        profileImage: "https://example.com/profile2.jpg",
                    },

                    {
                        id: 3,
                        placeName: "태종대",
                        address: "부산 영도구 전망로 24",
                        latitude: 35.0517,
                        longitude: 129.0856,
                        image: "https://example.com/image3.jpg",
                        description: "부산의 절경을 감상할 수 있는 명소",
                        userName: "사용자3",
                        profileImage: "https://example.com/profile3.jpg",
                    },
                    {
                        id: 4,
                        placeName: "부산 타워",
                        address: "부산 중구 용두산길 37-30",
                        latitude: 35.1006,
                        longitude: 129.0323,
                        image: "https://example.com/image4.jpg",
                        description: "부산의 전망을 한눈에 볼 수 있는 곳",
                        userName: "사용자4",
                        profileImage: "https://example.com/profile4.jpg",
                    },
                ],
            },
        ],
    },
};
