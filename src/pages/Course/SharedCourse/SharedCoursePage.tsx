import 'swiper/swiper-bundle.css';
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import Detail from "./Detail";
import { UseQueryResult } from "@tanstack/react-query";
import Overview from "./Overview";
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { HeaderConfig } from "../../../types/header/header";

export default function SharedCoursePage({allCoursesQueries,title}:
{allCoursesQueries:UseQueryResult<Route | null, Error>[],title:string}){

  const {Funnel,Step,setStep,currentStep} = useFunnel("코스개요");
  const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

  useEffect(()=>{
    switch(currentStep){
      case "코스개요":
        setHeaderConfig({title:title, number:4});
        break;
      case "코스목록":
        setHeaderConfig({title:"코스 확인중"});
        break;
    }
  },[currentStep,setHeaderConfig,title]);

    return (
    <>
      <Funnel>
        <Step name="코스개요">
          <Overview 
            dailyRoutes={allCoursesQueries[0].data}
            onNext={()=>setStep("코스목록")}
          />
        </Step>
        <Step name="코스목록">
          <Detail 
            allCoursesQueries={allCoursesQueries}
          />
        </Step>

      </Funnel>
    </>
    )
}