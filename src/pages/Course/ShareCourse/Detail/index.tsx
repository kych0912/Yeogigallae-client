import { useEffect } from "react";
import { Route } from "../../../../apis/map/types";
import DetailCard from "./_components/DetailCard";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../../types/header/header";

export default function OverView({
    dailyRoutes,
    onNext,
    title
}: {
    dailyRoutes: Route | null | undefined,
    onNext:()=>void,
    title:string

}){
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

    useEffect(()=>{
        setHeaderConfig({title:title,number:4});
    },[]);

    
    return (
        <>
            <DetailCard 
                dailyRoutes={dailyRoutes}
                onNext={onNext}
            />
        </>
    )
}
