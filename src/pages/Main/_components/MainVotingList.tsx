import { useNavigate } from "react-router-dom";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import Voting from "../../../assets/icons/Voting.svg";
import SeeMore from "../../../assets/icons/SeeMore.svg";
import VotingItem from "./VotingItem/VotingItem";
import { votingRooms } from "../MainPage/test";
import Empty from "./VotingItem/Empty";

export default function MainVotingList() {
    const navigate = useNavigate();

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
            {votingRooms.length > 0 ? <VotingItem /> : <Empty />}
        </S.Container>
    );
}
