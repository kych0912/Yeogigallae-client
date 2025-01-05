import { TitleWrapper, Caption, Content, StyledDivider } from "../Style";

export default function CourseTitle({ caption, content }: { caption: string, content: string }) {
    return (
        <TitleWrapper>
            <Caption>{caption}</Caption>
            <StyledDivider/>
            <Content>{content}</Content> 
        </TitleWrapper>
    );
}
