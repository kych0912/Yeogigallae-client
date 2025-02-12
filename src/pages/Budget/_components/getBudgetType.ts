import Mealexpenses from "../../../assets/icons/Mealexpenses.svg";
import activity from "../../../assets/icons/activity.svg";
import Shopping from "../../../assets/icons/Shopping.svg";
import transportation from "../../../assets/icons/transportation.svg";

export const getBudgetType = (category: string) => {
    switch (category) {
        case "FOOD":
            return { icon: Mealexpenses, text: "식사비" };

        case "ACTIVITY":
            return { icon: activity, text: "활동비" };

        case "SHOPPING":
            return { icon: Shopping, text: "쇼핑비" };

        case "TRANSPORTATION":
            return { icon: transportation, text: "교통비" };

        default:
            return { icon: "", text: "기타" };
    }
};
