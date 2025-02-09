import * as S from "./Notice.style";
import Skeleton from "../../../../components/Skeleton";


export default function NoticeSkeleton(){
    return (
        <>
            {
                Array.from({length: 5}, (_, i) => i).map((index) => (
                    <S.Wrapper.NoticeWrapper key={index}>
                        <Skeleton variant="text" width="100%" height="3.5rem" />
                    </S.Wrapper.NoticeWrapper>
                ))
            }
        </>
    );
}


