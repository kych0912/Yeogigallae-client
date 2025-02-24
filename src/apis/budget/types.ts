// budget-get
export type Assignment = {
  placeName: string;
  budgetType: string;
  recommendedAmount: number;
};

export type BudgetDay = {
  day: string;
  assignments: Assignment[];
};

export interface BudgetInfo {
  imageUrl: string;
  startDate: string;
  endDate: string;
  location: string;
  dailyAssignments: BudgetDay[];
}

export type BudgetResponse = {
  httpStatus: string;
  code: string;
  message: string;
  result: BudgetInfo;
};

export type BudgetIdResponse = {
  httpStatus: string;
  code: string;
  message: string;
  result: {
    budgetId: string;
  }[];
};

