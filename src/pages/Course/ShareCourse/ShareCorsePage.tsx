import Detail from "./Detail";
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import List from "./List";
import Share from "./Share";
import CommonContainer from "../../../components/Layout/CommonContainer";
import Modal from "../../../components/Modal/core";
import { ShareCourseListSchema } from "./schema";
import * as z from "zod";
import { DefaultPlace } from "../constants";

export type ShareCourseData = z.infer<typeof ShareCourseListSchema>;

export type TShareCourseContext = {
  여행상세: Record<string, never>,
  코스목록?: ShareCourseData,
  공유?: Record<string, never>,
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

    return (
    <CommonContainer>
      <Modal />
      <Funnel>
        <Funnel.Step name="여행상세"> 
          <Detail 
            dailyRoutes={dayOnCourseQueries}
            onNext={()=>setStep<"여행상세">("코스목록",{})}
            title={title}
          />
        </Funnel.Step>

        <Funnel.Step name="코스목록"> 
          <List 
            onNext={()=>setStep<"코스목록">("공유",[DefaultPlace])}
            context={context}
          />

        </Funnel.Step>

        <Funnel.Step name="공유">
          <Share title={title} />
        </Funnel.Step>
      </Funnel>
    </CommonContainer>
    )
}
