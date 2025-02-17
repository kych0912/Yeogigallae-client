import { useContext } from "react";
import { TripInfoContext } from "../../context/tripInfo/TripInfoContext";
import { useVoteContext } from "../../context/VoteResultContext";
import Recommend from "../_components/Recommend/Recommend";
import SuccessText from "../_components/SuccessText";
import VoteCard from "../../VoteCard/_components/VoteCard";
import * as S from "../../_components/Vote.styles";
import ConfirmSuccessPage from "../../ConfirmPage/ConfirmSuccessPage/ConfirmSuccessPage";
import ConfirmFailPage from "../../ConfirmPage/ConfirmFailPage/ConfirmFailPage";

export default function VoteAgreePage() {
    const { state } = useVoteContext();
    const tripInfoContext = useContext(TripInfoContext);
    
    if (!tripInfoContext || tripInfoContext.isLoading) {
        return <p>Loading Trip Data...</p>;
    }

    if (tripInfoContext.error) {
        return <p>Error loading trip data</p>;
    }

    const { tripInfo } = tripInfoContext;
    const isMaster = tripInfo?.result.masterId;

    const goodVotes = state.voteResult.filter((vote) => vote.type === "GOOD").reduce((acc, vote) => acc + vote.count, 0);
    const badVotes = state.voteResult.filter((vote) => vote.type === "BAD").reduce((acc, vote) => acc + vote.count, 0);

    const isSuccess = goodVotes > badVotes;

    return (
        <>
            <S.Custom>
                <SuccessText />
            </S.Custom>

            <VoteCard showConfirmMessage={false} isSuccess={isSuccess} />

            {isMaster && (
                <S.CustomItem>
                    <Recommend />
                </S.CustomItem>
            )}

            {isSuccess === true ? <ConfirmSuccessPage /> : isSuccess === false ? <ConfirmFailPage /> : null}
        </>
    );
}
