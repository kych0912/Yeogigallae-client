import Card from "../../../../../components/Card";
import { Route } from "../../../../../apis/map/types";
import * as S from "../../../_components/Course.style";
import NaverIcon from "../../../../../assets/icons/naver.svg?react";

export default function ListCard({ dailyRoutes }:{
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
        <>
            <S.StyledCard>
                    <Card.Image>    </Card.Image>

                <Card.Item>
                    <S.TextArea placeholder="친구에게 전달할 메세지를 작성하세요."/>
                </Card.Item>

                <Card.Item>
                    <Card.Divider/>
                </Card.Item>


                <Card.Item>
                    <S.TitleWrapper>
                        <S.Caption>{"장소"}</S.Caption>

                        <S.NaverContent>
                            <NaverIcon/>{"네이버 지도 URL을 첨부해주세요."}
                        </S.NaverContent>
                    </S.TitleWrapper>
                </Card.Item>



            </S.StyledCard>
        </>
    );
}