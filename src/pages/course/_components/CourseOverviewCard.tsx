import Card from "../../../components/Card";
import CourseTitle from './CourseTitle';
import Map from "../../../components/Map";
import CoursePlaces from './CoursePlaces';
import { Route } from "../../../apis/map/types";
import { StyledCard } from "../Style";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export default function CourseCard({ dailyRoutes }:{
    dailyRoutes: Route | null | undefined,
}) {
    const navigate = useNavigate();

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
                <CoursePlaces overview={true} places={dailyRoutes.routes[0]} />
            </Card.Item>

            <Card.Item>
                <Button 
                    style={{marginTop:'1.125rem'}} 
                    size="large" 
                    color="primary"
                    onClick={() => {
                        navigate(`/course?courseId=${dailyRoutes.trans_id}`);
                    }}
                >
                    {"코스 자세히 보기"}
                </Button>
            </Card.Item>

        </StyledCard>
    );
}