import * as S from "./Style";
import XBtn from "../../../../../assets/icons/xBtn.svg?react";

export default function DeleteTitle({
    title,
    remove
}:{
    title:string,
    remove:()=>void
}){
    return(
        <S.Delete.Wrapper>
            <S.Delete.TitleWrapper>
                <S.Delete.Text>
                    {title}
                </S.Delete.Text>
                <XBtn type="button" onClick={remove} />
            </S.Delete.TitleWrapper>
            <S.Delete.Caption>
                {"친구들과 함께 가고 싶은 장소를 공유해주세요"}
            </S.Delete.Caption>
        </S.Delete.Wrapper>
    )
}
