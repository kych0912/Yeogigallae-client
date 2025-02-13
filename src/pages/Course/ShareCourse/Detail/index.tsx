import { Route } from "../../../../apis/map/types";
import DetailCard from "./_components/DetailCard";
import useSetHeader from "../../../../hooks/useSetHeader";

export default function OverView({
    dailyRoutes,
    onNext,
    title
}: {
    dailyRoutes: Route | null | undefined,
    onNext:()=>void,
    title:string

}){
    useSetHeader({
        title:title,
        number:4
    });
    
    return (
        <>
            <DetailCard 
                dailyRoutes={dailyRoutes}
                onNext={onNext}
            />
        </>
    )
}
