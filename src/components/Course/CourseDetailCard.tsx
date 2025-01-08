import Card from "../Card";
import CourseTitle from './CourseTitle';
import Map from "../Map";
import CoursePlaces from './CoursePlaces';
import { Route } from "../../apis/map/types";
import { StyledCard } from "../../pages/course/Style";

export default function CourseDetailCard({ dailyRoutes }:{
    dailyRoutes: Route | null | undefined,
}) {
    if(!dailyRoutes) return (
        <Card>
            <Card.Title>
                {"코스가 존재하지 않습니다."}
            </Card.Title>
        </Card>
    );
    
    return (
        <StyledCard>
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
                <CoursePlaces places={dailyRoutes.routes[0]} />
            </Card.Item>

        </StyledCard>
    );
}