import { BudgetCourseResult } from "./types";
import { BudgetResponse } from "./types";

// budget-post
export type BudgetCourseMock = {
  httpStatus: string;
  code: string;
  message: string;
  result: BudgetCourseResult[]; 
};

export const budgetCourseMock: BudgetCourseMock = {
  httpStatus: "100 CONTINUE",
  code: "string",
  message: "좋은 여행",
  result: [
    {
      id: 1,
      aiCourseId: 1,
      tripPlanId: 1,
      roomId: 1,
    },
    {
      id: 2,
      aiCourseId: 2,
      tripPlanId: 2,
      roomId: 2,
    },
    {
      id: 3,
      aiCourseId: 3,
      tripPlanId: 3,
      roomId: 3,
    },
    {
      id: 4,
      aiCourseId: 4,
      tripPlanId: 4,
      roomId: 4,
    },
    {
      id: 5,
      aiCourseId: 5,
      tripPlanId: 5,
      roomId: 5,
    },
  ],
};

// budget-get
export const budgetMock: BudgetResponse = {
  httpStatus: "100 CONTINUE",
  code: "string",
  message: "string",
  result: [
    {
      day: "2025-02-15",
      assignments: [
        {
          placeName: "Grand Hotel",
          budgetType: "Accommodation",
          recommendedAmount: 200,
        },
        {
          placeName: "City Park",
          budgetType: "Entertainment",
          recommendedAmount: 50,
        },
      ],
    },
    {
      day: "2025-02-16",
      assignments: [
        {
          placeName: "Sunny Beach",
          budgetType: "Leisure",
          recommendedAmount: 100,
        },
      ],
    },
    {
      day: "2025-02-17",
      assignments: [
        {
          placeName: "Mountain Cabin",
          budgetType: "Accommodation",
          recommendedAmount: 150,
        },
        {
          placeName: "Downtown Cafe",
          budgetType: "Food",
          recommendedAmount: 30,
        },
      ],
    },
    {
      day: "2025-02-18",
      assignments: [
        {
          placeName: "Theme Park",
          budgetType: "Entertainment",
          recommendedAmount: 120,
        },
      ],
    },
    {
      day: "2025-02-19",
      assignments: [
        {
          placeName: "Luxury Restaurant",
          budgetType: "Food",
          recommendedAmount: 250,
        },
      ],
    },
  ],
};



