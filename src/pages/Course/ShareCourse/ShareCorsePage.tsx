import Detail from "./Detail";
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import List from "./List";
import Share from "./Share";
import CommonContainer from "../../../components/Layout/CommonContainer";

export type ShareCourseData = {
  image:string;
  description:string;
  place:string;
}[]

export type TShareCourseContext = {
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  여행상세:{},
  코스목록:ShareCourseData,
  //eslint-disable-next-line @typescript-eslint/no-empty-object-type
  공유:{},
}

export default function ShareCorsePage({dayOnCourseQueries,title}:{dayOnCourseQueries:Route | undefined | null,title:string})
{
    const [Funnel,setStep,context] = useFunnel<TShareCourseContext>({
      steps:["여행상세","코스목록","공유"],
      init:{
        step:"여행상세",
        context:{},
      },
      stepQueryKey:"step",
    });
    
    console.log(context);

    return (
    <CommonContainer>
      <Funnel>
        <Funnel.Step name="여행상세"> 
          <Detail 
            dailyRoutes={dayOnCourseQueries}
            onNext={()=>setStep<"여행상세">("코스목록",{})}
          />
        </Funnel.Step>

        <Funnel.Step name="코스목록"> 
          <List 
            onNext={(data)=>setStep<"코스목록">("공유",data)}
            context={context}
          />

        </Funnel.Step>

        <Funnel.Step name="공유">
          <Share />
        </Funnel.Step>

      </Funnel>
    </CommonContainer>
    )
}
