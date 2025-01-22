import * as S from "./Notice.style"
import Vote from "../../../../assets/icons/Notice/VoteNoticeIcon.svg?react"
import Course from "../../../../assets/icons/Notice/CourseNoticeIcon.svg?react"
import Budget from "../../../../assets/icons/Notice/BudgetNoticeIcon.svg?react"

interface INoticeItemProps extends React.HTMLAttributes<HTMLDivElement>{
    title:string,
    caption:string,
    isRead:boolean,
    type:NoticeType
}

type NoticeType = "VOTE" | "COURSE" | "BUDGET";

export default function NoticeItem({
    title,
    caption,
    isRead,
    type,
    onClick
}:INoticeItemProps){

    const TypeIcon:React.FC<{type:NoticeType}> = ({type}) => {
        if(type === "VOTE") return <Vote/>
        if(type === "COURSE") return <Course/>
        if(type === "BUDGET") return <Budget/>
    }


    return(
        <S.Wrapper.NoticeWrapper onClick={onClick}>
            <S.Wrapper.LeftWrapper> 
                <S.Wrapper.IconWrapper>
                    <TypeIcon type={type}/>
                </S.Wrapper.IconWrapper>
                <S.NoticeItem.TitleContainer>
                    <S.NoticeItem.Title $isRead={isRead}>
                        {title}
                    </S.NoticeItem.Title>
                    <S.NoticeItem.Caption>
                        {caption}
                    </S.NoticeItem.Caption>
                </S.NoticeItem.TitleContainer>
            </S.Wrapper.LeftWrapper>

            <S.Wrapper.RightWrapper>
                {!isRead && <S.Wrapper.NoticeUpdateCircle/>}
            </S.Wrapper.RightWrapper>
        </S.Wrapper.NoticeWrapper>
    )
}

