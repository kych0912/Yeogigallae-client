import { useNavigate } from "react-router-dom";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import Voting from "../../../assets/icons/Voting.svg";
import VotingItem from "./VotingItem/VotingItem";
//import { votingRooms } from "../MainPage/test";
import Empty from "./VotingItem/Empty";
import { useGetVoting } from "../../../react-query/queries/main/Voting/queries";

export default function MainVotingList() {
    const navigate = useNavigate();

    const { data: votingRooms = [], isLoading, error } = useGetVoting();

    // 로딩 상태에서 콘솔 로그
    if (isLoading) {
        console.log("Loading voting rooms...");
    }

    // 에러 상태에서 콘솔 로그
    if (error) {
        console.error("Error loading voting rooms:", error); // 에러 로그 출력
    }

    return (
        <S.Container onClick={() => navigate("/vote")}>
            <MainSection
                leftContent={
                    <>
                        <img src={Voting} alt="Voting Icon" /> 투표중
                    </>
                }
                rightContent={votingRooms.length}
            />

            {/*카드부분*/}
            {votingRooms.length > 0 ? <VotingItem /> : <Empty />}
        </S.Container>
    );
}
