import { useContext, useEffect, useState } from "react";
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
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    if (!tripInfoContext || tripInfoContext.isLoading) {
        return <p>Loading Trip Data...</p>;
    }

    if (tripInfoContext.error) {
        return <p>Error loading trip data</p>;
    }

    const { tripInfo } = tripInfoContext;
    const userCount = tripInfo?.userCount ?? 0;
    const isMaster = tripInfo?.masterId === state.voteResult.userId;

    useEffect(() => {
        setIsSuccess(state.voteResult.count > userCount / 2);
    }, [state.voteResult.count, userCount]);

    return (
        <>
            <S.Custom>
                <SuccessText />
            </S.Custom>

            <VoteCard showConfirmMessage={false}/>

            {isMaster && (
                <S.CustomItem>
                    <Recommend />
                </S.CustomItem>
            )} 

            {isSuccess !== null && (isSuccess ? <ConfirmSuccessPage /> : <ConfirmFailPage />)}
        </>
    );
}
