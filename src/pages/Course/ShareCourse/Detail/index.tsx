import { Route } from "../../../../apis/map/types";
import DetailCard from "./_components/DetailCard";

export default function OverView({
    dailyRoutes,
    onNext
}: {
    dailyRoutes: Route | null | undefined,
    onNext:()=>void
}){

    
    return (
        <>
            <DetailCard 
                dailyRoutes={dailyRoutes}
                onNext={onNext}
            />
        </>
    )
}
