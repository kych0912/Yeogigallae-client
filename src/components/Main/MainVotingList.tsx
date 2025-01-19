import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";
import Voting from "../../assets/icons/Voting.svg";
import VotingItem from "./VotingItem";

const MainVotingList: React.FC = () => {
    return (
        <S.Container>
            <MainSection
                leftContent={
                    <>
                        <img src={Voting} alt="Voting Icon" /> 투표중
                    </>
                }
                rightContent={0}
            ></MainSection>

            {/*카드부분*/}
            <VotingItem />
        </S.Container>
    );
};

export default MainVotingList;
