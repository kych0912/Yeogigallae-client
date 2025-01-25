import { Route } from "../../../../apis/map/types";
import CourseOverviewCard from "./_components/CourseOverviewCard";

export default function Overview({dailyRoutes,onNext}:{dailyRoutes:Route | null | undefined,onNext:()=>void}){
    return(
        <CourseOverviewCard dailyRoutes={dailyRoutes} onNext={onNext} />
    )
}