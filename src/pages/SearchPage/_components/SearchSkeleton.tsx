import Skeleton from "../../../components/Skeleton";
import * as S from "./ResultList.styles";

export default function SearchSkeleton() {
    return (
        <S.SkeletonWrapper>
            {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} width="100%" height="5rem" />
            ))}
        </S.SkeletonWrapper>

    )

}