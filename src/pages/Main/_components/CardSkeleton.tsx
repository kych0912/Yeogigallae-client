import Skeleton from "../../../components/Skeleton";
import * as V from "./VotingItem/VotingItem.Styles";
import * as U from "./UpcomingItem/UpcomingItem.Styles";
import * as H from "./TravelListItem/TravelListItem.Styles";
import * as S from "./Main.Styles";

export function VotingCardSkeleton() {
    return (
        <V.VotingItem>
            <V.Box>
                <S.Box>
                    <Skeleton variant="text" width="90px" height="24px" />
                    <Skeleton variant="text" width="90px" height="24px" />
                </S.Box>
                <S.Box>
                    <Skeleton variant="text" width="50px" height="14px" />
                </S.Box>
            </V.Box>
            <S.Box>
                <Skeleton variant="text" width="100px" height="24px" />
                <Skeleton variant="text" width="140px" height="24px" />
            </S.Box>
        </V.VotingItem>
    );
}

export function FullVotingCardSkeleton() {
    return (
        <V.FullVotingItem>
            <S.Type>
                <Skeleton variant="text" width="100px" height="24px" />
            </S.Type>
            <V.Box>
                <S.Box>
                    <Skeleton variant="text" width="90px" height="24px" />
                    <Skeleton variant="text" width="90px" height="24px" />
                </S.Box>
                <S.Box>
                    <Skeleton variant="text" width="50px" height="14px" />
                </S.Box>
            </V.Box>
            <S.Box>
                <Skeleton variant="text" width="100px" height="24px" />
                <Skeleton variant="text" width="140px" height="24px" />
            </S.Box>
        </V.FullVotingItem>
    );
}

export function UpcomingCardSkeleton() {
    return (
        <U.TravelList>
            <U.ImageWrapper>
                <Skeleton variant="rectangular" width="8.125rem" height="8.125rem" />
            </U.ImageWrapper>
            <U.InfoWrapper>
                <S.TextBox>
                    <Skeleton variant="text" width="100px" height="24px" />
                    <Skeleton variant="text" width="50px" height="14px" />
                </S.TextBox>
                <U.Date>
                    <Skeleton variant="text" width="160px" height="24px" />
                </U.Date>
            </U.InfoWrapper>
        </U.TravelList>
    );
}

export function HistoryCardSkeleton() {
    return (
        <H.TravelListItem>
            <H.ImageWrapper>
                <Skeleton variant="rectangular" width="100%" height="100%" />
            </H.ImageWrapper>
            <H.InfoWrapper>
                <S.TextBox>
                    <Skeleton variant="text" width="100px" height="24px" />
                    <Skeleton variant="text" width="50px" height="14px" />
                </S.TextBox>
                <Skeleton variant="text" width="150px" height="14px" />
            </H.InfoWrapper>
        </H.TravelListItem>
    );
}
