import Card from "../../../../../components/Card";
import * as S from "../../../_components/Course.style";
import NaverIcon from "../../../../../assets/icons/Naver.svg?react";
import { ShareCourseData } from "../../ShareCorsePage";

export default function ListCard({ place,onChange }:{
    place:ShareCourseData[number],
    onChange:(place:ShareCourseData[number])=>void
}) {
    
    return (
        <>
            <Card>
                <Card.Image>    </Card.Image>

                <Card.Item>
                    <S.TextArea
                        value={place.description}
                        onChange={(e) => onChange({...place, description: e.target.value})}
                        placeholder="친구에게 전달할 메세지를 작성하세요."
                    />
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
            </Card>
        </>
    );
}