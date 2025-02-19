import Card from "../../../../../components/Card";
import CourseTitle from '../../../_components/CourseTitle';
import Map from "../../../../../components/Map";
import CoursePlaces from '../../../_components/CoursePlaces';
import { Route } from "../../../../../apis/map/types";

export default function CourseDetailCard({ dailyRoutes,allCoursesQueries }:{
    dailyRoutes: Route | null | undefined,
    allCoursesQueries: Route[] | null | undefined,
}) {
    if(!dailyRoutes) return (
        <Card>
            <Card.Title>
                {"코스가 존재하지 않습니다."}
            </Card.Title>
        </Card>
    );
    
    return (
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
                    content={`${allCoursesQueries?.length}박 일정으로 추천드립니다.`}
                />
            </Card.Item>

            <Card.Item>
                <CoursePlaces places={dailyRoutes.routes[0]} />
            </Card.Item>

        </Card>
    );
}