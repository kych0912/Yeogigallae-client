import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { TripInfoContext } from "../../context/tripInfo/TripInfoContext";
import Recommend from "../_components/Recommend/Recommend";
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
    const [isConfirm, setIsConfirm] = useState<boolean | null>(null);

    const { data: voteResultData } = useVoteResultQuery(parsedTripId ?? 0);
    const voteResults: VoteResultItemType[] = voteResultData?.result ?? [];

    if (!tripInfoContext || tripInfoContext.isLoading) {
        return <p>여행 정보를 불러오는 중입니다...</p>;
    }

    if (tripInfoContext.error) {
        return <p>여행 정보를 불러오는 데 실패했습니다.</p>;
    }

    const { tripInfo } = tripInfoContext;
    const currentUserId = tripInfo?.masterId;
    const isMaster = tripInfo?.masterId === currentUserId;

    const calculatedConfirm = useMemo(() => {
        if (voteResults.length === 0) return null;

        const goodVotes = voteResults.reduce<number>((acc, vote) => {
        return vote.type === "GOOD" ? acc + (vote.count ?? 0) : acc;
        }, 0);

        const badVotes = voteResults.reduce<number>((acc, vote) => {
        return vote.type === "BAD" ? acc + (vote.count ?? 0) : acc;
        }, 0);

        return goodVotes > badVotes;
    }, [voteResults]);

    useState(() => setIsConfirm(calculatedConfirm));

    return (
        <>
        <S.Custom>
            <SuccessText />
        </S.Custom>

        <VoteCard showConfirmMessage={false} isConfirm={!!isConfirm} />

        {isMaster && (
            <S.CustomItem>
            <Recommend />
            </S.CustomItem>
        )}

        {isConfirm === null ? (
            <p></p>
        ) : isConfirm ? (
            <ConfirmSuccessPage />
        ) : (
            <ConfirmFailPage />
        )}
        </>
    );
}
