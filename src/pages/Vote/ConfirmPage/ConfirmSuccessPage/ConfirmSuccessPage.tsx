import Recommend from "../_components/Recommend/Recommend";
import SuccessText from "../_components/SuccessText";
import VoteCard from "../../VoteCard/_components/VoteCard";
import * as S from "../../_components/Vote.styles";

export default function VoteAgreePage() {
    return (
        <>
            <S.Custom>
                <SuccessText />
            </S.Custom>

            <VoteCard />

            <S.CustomItem>
                <Recommend />
            </S.CustomItem>
        </>
    );
};

