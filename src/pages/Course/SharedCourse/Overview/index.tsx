import { Route } from "../../../../apis/map/types";
import { useOutletContext, useNavigate } from "react-router-dom";
import { HeaderConfig } from "../../../../types/header/header";
import { useEffect } from "react";
import Card from "../../../../components/Card";
import CommonContainer from "../../../../components/Layout/CommonContainer";
import CourseTitle from "../../_components/CourseTitle";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Course.style";
import CoursePlaces from "../../_components/CoursePlaces";
import Map from "../../../../components/Map";
import modal from "../../../../components/Modal";
import { TTripInfo } from "../../ShareCourse/ShareCorsePage";

export default function Overview({
    courseInfo,
    dailyRoutes,
    onNext,
}:{dailyRoutes:Route[] | null | undefined,onNext:()=>void,courseInfo:TTripInfo}){
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();
    const {result} = courseInfo;

    const navigate = useNavigate();
    useEffect(()=>{
        setHeaderConfig({title:result.roomName,number:result.userCount});
    },[]);

    //유효한 코스 Route만 추출
    const validDailyRoutes = dailyRoutes?.filter((route)=>{
        return route.routes;
    });

    if(!validDailyRoutes || validDailyRoutes.length === 0) {
        modal.confirm.show({
            message:"코스가 존재하지 않아요",
            isOneButton:true,
            onConfirm:()=>{
                navigate(-1);
            },
            onCancel:()=>{
                navigate(-1);
            }
        })
        
        return (
        <CommonContainer>
            <Card>
                <Card.Title>
                    {"코스가 존재하지 않습니다."}
                </Card.Title>
            </Card>
        </CommonContainer>
    );}

    return (
        <CommonContainer>
            <Card>
                <Card.Image>
                    <Map 
                        width="100%" 
                        height="100%" 
                        dailyRoutes={validDailyRoutes[0].routes[0]}
                        level={3}
                    />
                </Card.Image>

                <Card.Item>
                    <CourseTitle 
                        caption="코스 AI 추천"
                        content={`${validDailyRoutes.length}박 일정으로 추천드립니다.`}
                    />
                </Card.Item>

                <Card.Item>
                    <CoursePlaces overview={true} places={validDailyRoutes[0].routes[0]} />
                </Card.Item>

                <Card.Item>
                    <Button 
                        style={{marginTop:'1.125rem'}} 
                        size="large" 
                        color="primary"
                        onClick={onNext}
                    >
                        {"코스 자세히 보기"}    
                    </Button>
                </Card.Item>

            </Card>

            <S.CompleteMessage>
                {"AI 코스 생성이 완료되었습니다."}
            </S.CompleteMessage>
        </CommonContainer>
    );
}