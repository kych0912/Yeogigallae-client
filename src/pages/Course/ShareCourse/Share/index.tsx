import InfoToggle from "./_components/InfoToggle";
import ChatInterface from "./_components/ChatInterface";
import useSetHeader from "../../../../hooks/useSetHeader";
import { TShareCourseContext } from "../ShareCorsePage";
import { useGetCourseList } from "../../../../react-query/queries/course/queries";
import ShareSkeleton from "./_components/ShareSkeleton";

export default function Share({context}:{context:TShareCourseContext}){

    const {data, isLoading} = useGetCourseList(context.여행상세.tripId);

    const { userCount, roomName, masterName,voteLimitTime } = context.여행상세.result;

    useSetHeader({
        title:roomName,
        number:userCount
    });

    if(isLoading){
        return <ShareSkeleton/>
    }
     
    if(!data?.result){
        return <div>데이터가 없습니다.</div>
    }

    return(
        <div>
            <InfoToggle masterName={masterName} voteLimitTime={voteLimitTime} />

            <ChatInterface messages={data.result.places} />
        </div>
    )
}