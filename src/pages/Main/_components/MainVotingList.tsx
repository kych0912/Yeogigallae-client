import { useNavigate } from "react-router-dom";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import Voting from "../../../assets/icons/Voting.svg";
import SeeMore from "../../../assets/icons/SeeMore.svg";
import VotingItem from "./VotingItem/VotingItem";
import Empty from "./VotingItem/Empty";
import { useGetVoting } from "../../../react-query/queries/main/Voting/queries";
import { VotingCardSkeleton } from "./CardSkeleton";
import { VotingRoom } from "../../../apis/main/Voting/types";

export default function MainVotingList() {
    const navigate = useNavigate();

    const { data, isLoading, error } = useGetVoting();
    const votingRooms: VotingRoom[] = data?.rooms ?? [];

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

            {isLoading ? <VotingCardSkeleton /> : votingRooms.length > 0 ? <VotingItem rooms={votingRooms} /> : <Empty />}

            <MainSection
                leftContent={
                    <>
                        <img src={Voting} alt="Voting Icon" /> 투표 완료
                    </>
                }
                rightContent={data?.totalCount || 0}
            />

            {isLoading ? <VotingCardSkeleton /> : votingRooms.length > 0 ? <VotingItem rooms={votingRooms} /> : <Empty />}
        </S.Container>
    );
}
