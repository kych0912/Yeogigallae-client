import UpwardTrend from "../../../../../assets/icons/UpwardTrend.svg?react";
import {CompleteMessage} from "../../../_components/Course.style";
import Down from "../../../../../assets/icons/Down.svg?react";
import * as S from "./Style";

export default function InfoToggle({masterName, voteLimitTime}:{masterName:string,voteLimitTime:string}){
    return(
        <>
            <S.Toggle.Wrapper>
                <UpwardTrend />
                <S.Toggle.Title>코스짜기 위한 장소 의견 받는중...</S.Toggle.Title>
                <Down />
            </S.Toggle.Wrapper>

            <CompleteMessage style={{marginTop:'0.5rem'}}>   
                {masterName}님이 코스짜기를 시작했습니다. 
                <br/>
                {voteLimitTime} 이후 종료 됩니다.
            </CompleteMessage>
        </>
    )
}