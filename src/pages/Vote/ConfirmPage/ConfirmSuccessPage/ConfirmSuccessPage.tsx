import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TripInfoContext } from "../../context/tripInfo/TripInfoContext";
import SuccessText from "../_components/SuccessText";
import VoteCard from "../../VoteCard/_components/VoteCard";
import * as S from "../../_components/Vote.styles";
import ConfirmSuccessPage from "../../ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "../../ConfirmPage/ConfirmFailPage/ConfirmFailPage";
import { useVoteResultQuery } from "../../../../react-query/queries/vote/useVoteResultQuerie";
import { VoteResultItemType } from "../../context/vote/VoteResultTypes";

export default function VoteAgreePage() {
    const { tripId } = useParams<{ tripId: string }>();
    const parsedTripId = tripId ? parseInt(tripId, 10) : null;
    const tripInfoContext = useContext(TripInfoContext);

    const { data: voteResultData } = useVoteResultQuery(parsedTripId ?? 0);
    const voteResults: VoteResultItemType[] = voteResultData?.result ?? [];

    if (!tripInfoContext || tripInfoContext.isLoading) {
        return <p>여행 정보를 불러오는 중입니다...</p>;
    }

    if (tripInfoContext.error) {
        return <p>여행 정보를 불러오는 데 실패했습니다.</p>;
    }

    const goodVotes = voteResults.reduce<number>(
        (acc, vote) => (vote.type === "GOOD" ? acc + (vote.count ?? 0) : acc),
        0
    );

    const badVotes = voteResults.reduce<number>(
        (acc, vote) => (vote.type === "BAD" ? acc + (vote.count ?? 0) : acc),
        0
    );

    // ✅ badVotes가 더 많을 때 ConfirmSuccessPage 표시
    const isConfirm = voteResults.length > 0 ? badVotes > goodVotes : null;

    return (
        <>
            {isConfirm && (
                <S.Custom>
                    <SuccessText />
                </S.Custom>
            )}

            {isConfirm === null ? (
                <p>투표 결과를 불러오는 중입니다...</p>
            ) : isConfirm ? (
                <>
                    <VoteCard showConfirmMessage={false} isConfirm={true} />
                    <ConfirmSuccessPage />
                </>
            ) : (
                <ConfirmFailPage />
            )}
        </>
    );
}
