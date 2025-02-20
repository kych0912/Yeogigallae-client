import { BudgetResponse } from "./types";

// budget-get
export const budgetMock: BudgetResponse = {
    httpStatus: "100 CONTINUE",
    code: "string",
    message: "string",
    result: 
        {
            location: "경기도 부천시 역곡동 45-18",
            imageUrl: "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image3.jpg",
            startDate: "2025-07-15",
            endDate: "2025-07-17",
            dailyAssignments: [
                {
                    day: "1일차",
                    assignments: [  
                        {
                            placeName: "차이나타운, 용현시장, 평화시장",
                            budgetType: "FOOD",
                            recommendedAmount: 120000, 
                        },
                        {
                            placeName: "월미도, 롯데월드타워",
                            budgetType: "ACTIVITY",
                            recommendedAmount: 30000,
                        },
                        {
                            placeName: "로데오, 더 현대",
                            budgetType: "SHOPPING",
                            recommendedAmount: 30000,
                        },
                        {
                            placeName: "6인승 차 렌트",
                            budgetType: "TRANSPORTATION",
                            recommendedAmount: 60000,
                        },
                    ],
                },
                {
                    day: "2일차",
                    assignments: [
                        {
                            placeName: "차이나타운, 용현시장, 평화시장",
                            budgetType: "FOOD",
                            recommendedAmount: 120000,
                        },
                        {
                            placeName: "월미도, 롯데월드타워",
                            budgetType: "ACTIVITY",
                            recommendedAmount: 30000,
                        },
                        {
                            placeName: "로데오, 더 현대",
                            budgetType: "SHOPPING",
                            recommendedAmount: 30000,
                        },
                        {
                            placeName: "6인승 차 렌트",
                            budgetType: "TRANSPORTATION",
                            recommendedAmount: 60000,
                        },
                    ],
                },
                {
                    day: "3일차차",
                    assignments: [
                        {
                            placeName: "차이나타운, 용현시장, 평화시장",
                            budgetType: "FOOD",
                            recommendedAmount: 120000,
                        },
                        {
                            placeName: "월미도, 롯데월드타워",
                            budgetType: "ACTIVITY",
                            recommendedAmount: 30000,
                        },
                        {
                            placeName: "로데오, 더 현대",
                            budgetType: "SHOPPING",
                            recommendedAmount: 30000,
                        },
                        {
                            placeName: "6인승 차 렌트",
                            budgetType: "TRANSPORTATION",
                            recommendedAmount: 60000,
                        },
                    ],
                }
            ]
        },
};

export const budgetPageDataMock = {
    httpStatus: "OK", 
    code: "200",
    message: "여행 정보 조회에 성공하였습니다.", 

    result: {
        location: "경기도 부천시 역곡동 45-18", 
        description: "관광 명소 방문 위주로 진행 예정",
        imageUrl: "https://yeogigallae.s3.ap-southeast-2.amazonaws.com/uploads/building_image3.jpg",
        
        customLocation: "제주시", 
        price: "20만원", 
        minDays: 3, 
        maxDays: 7, 
        month: 2,

        roomName: "여행가보자고", 
        userCount: 5, 
        userName: "고민균", 

        masterName: "곰구마", 
        voteLimitTime: "THIRTY_MINUTES", 

        startDate: "2025-02-01",
        endDate: "2025-02-07",
    }
};
