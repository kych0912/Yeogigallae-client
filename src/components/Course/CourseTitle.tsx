import { TitleWrapper, Caption, Content, StyledDivider } from "../../pages/course/Style";

export default function CourseTitle({ caption, content }: { caption: string, content: string }) {
    return (
        <TitleWrapper>
            <Caption>{caption}</Caption>
            <StyledDivider/>
            <Content>{content}</Content> 
        </TitleWrapper>
    );
}
