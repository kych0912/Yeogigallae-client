import { useQuery } from "@tanstack/react-query";
import { getBudgetInfo } from "../../../apis/budget";
import { BudgetResponse } from "../../../apis/budget/types";

export const useGetBudgetInfo = (budgetId: string) => {
    return useQuery<BudgetResponse>({
        queryKey: ["budget", budgetId],
        queryFn: () => getBudgetInfo(budgetId),
        enabled: !!budgetId,  
        retry: false, 
        refetchOnWindowFocus: false, 
        refetchOnMount: true, 
        refetchOnReconnect: false, 
        refetchInterval: false,  
        refetchIntervalInBackground: false,  
    });
};
