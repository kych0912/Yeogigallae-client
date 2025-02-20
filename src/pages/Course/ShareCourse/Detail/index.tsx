import useSetHeader from "../../../../hooks/useSetHeader";
import { ICourseInfo } from "../../../../apis/course/types";
import { CompleteMessage } from "../../_components/Course.style";
import Card from "../../../../components/Card";
import { Button } from "../../../../components/Button";

export default function OverView({
    courseInfo,
    onNext,
}: {
    courseInfo: ICourseInfo,
    onNext:()=>void,
}){

    const {result} = courseInfo;

    const { location,description,imageUrl,startDate,endDate,masterName,userCount, roomName } = result;


    useSetHeader({
        title:roomName,
        number:userCount
    });
    
    return (
        <>
            <Card>
                <Card.Image>
                    <img src={imageUrl} 
                    alt="course" 
                    style={{width:'100%', height:'100%',objectFit:'cover',borderRadius:'1.5rem'}}
                    />
                </Card.Image>

                <Card.Title>
                    {description}
                </Card.Title>

                <Card.Divider/> 

                <Card.Item label="장소">
                    {location}
                </Card.Item>

                <Card.Divider/>

                <Card.Item label="기간">
                    {`${startDate} ~ ${endDate}`}
                </Card.Item>

                <Button 
                    style={{marginTop:'1.125rem'}} 
                    size="large" 
                    color="primary"
                    onClick={onNext}
                >
                    {"원하는 장소 공유하기"}
                </Button>

            </Card>

            <CompleteMessage>
                {`${masterName}님이 코스짜기를 시작했습니다.`}
                <br/>
                {"6시간 이후 종료됩니다."}
            </CompleteMessage>
        </>
    );
}

