import { useNavigate } from "react-router-dom";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import Voting from "../../../assets/icons/Voting.svg";
import SeeMore from "../../../assets/icons/SeeMore.svg";
import VotingItem from "./VotingItem/VotingItem";
import Empty from "./VotingItem/Empty";
import { useGetVoting } from "../../../react-query/queries/main/Voting/queries";
import { VotingCardSkeleton } from "./CardSkeleton";

export default function MainVotingList() {
    const navigate = useNavigate();

    const { data, isLoading, error } = useGetVoting();
    const votingRooms = data?.rooms ?? [];

    // // 로딩 상태에서 콘솔 로그
    // if (isLoading) {
    //     console.log("Loading voting rooms...");
    // }

    // 에러 상태에서 콘솔 로그
    if (error) {
        console.error("Error loading voting rooms:", error);
    }

    return (
        <S.Container>
            <MainSection
                leftContent={
                    <>
                        <img src={Voting} alt="Voting Icon" /> 투표중
                    </>
                }
                rightContent={
                    <S.HighlightedText onClick={() => navigate("/fulllist")}>
                        전체보기
                        <img src={SeeMore} alt="SeeMore Icon" style={{ padding: "0 0.4rem" }} />
                    </S.HighlightedText>
                }
            />

            {/*카드부분*/}
            {isLoading ? <VotingCardSkeleton /> : votingRooms.length > 0 ? <VotingItem rooms={votingRooms} /> : <Empty />}
        </S.Container>
    );
}
