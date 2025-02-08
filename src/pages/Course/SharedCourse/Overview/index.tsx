import { Route } from "../../../../apis/map/types";
import { useOutletContext } from "react-router-dom";
import { HeaderConfig } from "../../../../types/header/header";
import { useEffect } from "react";
import Card from "../../../../components/Card";
import CommonContainer from "../../../../components/Layout/CommonContainer";
import CourseTitle from "../../_components/CourseTitle";
import { Button } from "../../../../components/Button";
import * as S from "../../_components/Course.style";
import CoursePlaces from "../../_components/CoursePlaces";
import Map from "../../../../components/Map";

export default function Overview({
    dailyRoutes,
    onNext,
    title
}:{dailyRoutes:Route | null | undefined,onNext:()=>void,title:string}){
    const {setHeaderConfig} = useOutletContext<{setHeaderConfig: (config: HeaderConfig) => void}>();

    useEffect(()=>{
        setHeaderConfig({title:title,number:4});
    },[]);


    if(!dailyRoutes) return (
        <Card>
            <Card.Title>
                {"코스가 존재하지 않습니다."}
            </Card.Title>
        </Card>
    );
    
    return (
        <CommonContainer>
            <Card>
                <Card.Image>
                    <Map 
                        width="100%" 
                        height="100%" 
                        dailyRoutes={dailyRoutes.routes[0]}
                        level={3}
                    />
                </Card.Image>

                <Card.Item>
                    <CourseTitle 
                        caption="코스 AI 추천"
                        content="2박 일정으로 추천드립니다."
                    />
                </Card.Item>

                <Card.Item>
                    <CoursePlaces overview={true} places={dailyRoutes.routes[0]} />
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
                <br/>
                {"6시간 안에 코스에 대한 의견을 결정해주세요."}
            </S.CompleteMessage>
        </CommonContainer>
    );
}