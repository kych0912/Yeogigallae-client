import Card from "../../../../../components/Card";
import { Route } from "../../../../../apis/map/types";
import * as S from "../../../_components/Course.style";
import { Button } from "../../../../../components/Button";
import { CompleteMessage } from "../../../_components/Course.style";

export default function DetailCard({ dailyRoutes,onNext }:{
    dailyRoutes: Route | null | undefined,
    onNext:()=>void
}) {

    if(!dailyRoutes) return (
        <Card>
            <Card.Title>
                {"코스가 존재하지 않습니다."}
            </Card.Title>
        </Card>
    );
    
    return (
        <>
            <S.StyledCard>
                <Card.Image>
                    <img src={"https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
                    alt="course" 
                    style={{width:'100%', height:'100%',objectFit:'cover',borderRadius:'1.5rem'}}
                    />
                </Card.Image>

                <Card.Title>
                    {"저번에 말한 전주 한옥마을에서 가고 싶은곳 있는 사람은 공유하기///"}
                </Card.Title>

                <Card.Divider/>

                <Card.Item>
                    <S.TitleWrapper>
                        <S.Caption>{"장소"}</S.Caption>

                        <S.Content>{"전주 한옥마을"}</S.Content>
                    </S.TitleWrapper>
                </Card.Item>

                <Card.Divider/>

                <Card.Item>
                    <S.TitleWrapper>
                        <S.Caption>{"기간"}</S.Caption>

                        <>
                            <S.Content>{"1박 2일 / 날짜 미정"}</S.Content>
                        </>
                    </S.TitleWrapper>
                </Card.Item>

                <Button 
                    style={{marginTop:'1.125rem'}} 
                    size="large" 
                    color="primary"
                    onClick={onNext}
                >
                    {"원하는 장소 공유하기"}
                </Button>

            </S.StyledCard>

            <CompleteMessage>
                {"규림님이 코스짜기를 시작했습니다."}
                <br/>
                {"6시간 이후 종료됩니다."}
            </CompleteMessage>
        </>
    );
}