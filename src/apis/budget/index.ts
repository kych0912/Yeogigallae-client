import axios from "axios";
import { budgetMock } from "./mocks";
import { BudgetResponse } from "./types";

/**
 * 공통 API 오류 처리 함수
 * @param error 발생한 오류
 * @param fallbackData 대체 데이터 (Mock 데이터)
 * @returns fallbackData 반환
 */
const handleApiError = (error: unknown, fallbackData: any) => {
    console.error("API 호출 오류:", error);
    return fallbackData;
};

export const getBudgetInfo = async (budgetId: number): Promise<BudgetResponse> => {
    if (import.meta.env.MODE === "development") {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return budgetMock;
    }

    return axios.get<BudgetResponse>(`${import.meta.env.VITE_API_URL}/api/budget/${budgetId}`)
        .then(response => response.data)
        .catch(error => handleApiError(error, budgetMock)); 
};
