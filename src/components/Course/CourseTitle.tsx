import * as S from "./Course.style";

export default function CourseTitle({ caption, content }: { caption: string, content: string }) {
    return (
        <S.TitleWrapper>
            <S.Caption>{caption}</S.Caption>
            <S.StyledDivider/>
            <S.Content>{content}</S.Content> 
        </S.TitleWrapper>
    );
}
