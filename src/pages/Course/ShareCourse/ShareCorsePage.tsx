import Detail from "./Detail";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import List from "./List";
import Share from "./Share";
import CommonContainer from "../../../components/Layout/CommonContainer";
import Modal from "../../../components/Modal/core";
import { ShareCourseListSchema } from "./schema";
import * as z from "zod";
import { DefaultPlace } from "../constants";
import { ICourseInfo } from "../../../apis/course/types";

export type ShareCourseData = z.infer<typeof ShareCourseListSchema>;

export type TTripInfo = ICourseInfo & {
  roomId: string;
  tripId: string;
}

export type TShareCourseContext = {
  여행상세: TTripInfo,
  코스목록?: ShareCourseData,
  공유?: Record<string, never>,
}

export default function ShareCorsePage({courseInfo,title}:{courseInfo:TTripInfo,title:string})
{
    const [Funnel,setStep,context] = useFunnel<TShareCourseContext>({
      steps:["여행상세","코스목록","공유"],
      init:{
        step:"여행상세",
        context:courseInfo,
      },
      stepQueryKey:"step",
    });

    return (
    <CommonContainer>
      <Modal />
      <Funnel>
        <Funnel.Step name="여행상세"> 
          <Detail 
            courseInfo={courseInfo}
            onNext={()=>setStep<"여행상세">("코스목록",courseInfo)}
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
