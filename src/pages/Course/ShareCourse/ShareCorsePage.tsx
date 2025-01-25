import Detail from "./Detail";
import { Route } from "../../../apis/map/types";
import { useFunnel } from "../../../hooks/useFunnel/useFunnel";
import List from "./List";
import Share from "./Share";
import CommonContainer from "../../../components/Layout/CommonContainer";

export default function ShareCorsePage({dayOnCourseQueries}:{dayOnCourseQueries:Route | undefined | null})
{
    const {Funnel,Step,setStep} = useFunnel("여행상세");
    
    return (
    <CommonContainer>
      <Funnel>
        <Step name="여행상세"> 
          <Detail 
            dailyRoutes={dayOnCourseQueries}
            onNext={()=>setStep("코스목록")}
          />
        </Step>

        <Step name="코스목록"> 
          <List 
            dailyRoutes={dayOnCourseQueries}
            onNext={()=>setStep("공유")}
          />
        </Step>

        <Step name="공유">
          <Share />
        </Step>

      </Funnel>
    </CommonContainer>
    )
}
