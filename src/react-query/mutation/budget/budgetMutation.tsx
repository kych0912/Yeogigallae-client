import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postBudgetCourse } from "../../../apis/budget";
import { BudgetCourseResult } from "../../../apis/budget/types";

export const usePostBudgetCourse = () => {
    const queryClient = useQueryClient();

    return useMutation<
        BudgetCourseResult[],
        Error, 
        { budgetData: BudgetCourseResult[] },
        { previousBudget?: BudgetCourseResult[] } 
    >({
        mutationFn: ({ budgetData }) => postBudgetCourse(budgetData),

        onMutate: async ({ budgetData }) => {
            await queryClient.cancelQueries({ queryKey: ["budget"] });

            const previousBudget = queryClient.getQueryData<BudgetCourseResult[]>(["budget"]);

            if (previousBudget) {
                queryClient.setQueryData(["budget"], [...previousBudget, ...budgetData]);
            }

            return { previousBudget }; 
        },

        onError: (_, __, context) => {
            if (context?.previousBudget) {
                queryClient.setQueryData(["budget"], context.previousBudget);
            }
        },

        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ["budget"] });
        },
    });
};
