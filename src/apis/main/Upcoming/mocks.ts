import { UpcomingResult } from "./types";

export const DEFAULT_Upcoming: UpcomingResult = {
    totalCount: 1,
    rooms: [
        {
            tripPlanId: 1,
            roomName: "동창 여행",
            location: "강릉",
            startDate: "2025-01-10",
            endDate: "01-15",
            imageUrl: "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image2.jpg",
            roomId: 1,
            aiCourseId: 1,
            tripPlanType: "COURSE",
        },
    ],
};
