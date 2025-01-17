import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import HomeIcon from "../../../../assets/icons/Home.svg?react";
import BackIcon from "../../../../assets/icons/Back.svg?react";
import Header from "../../../../components/Header/index";
import ConfirmSuccessCard from "../_components/ConfirmSuccessCard/ConfirmSuccessCard";
import { IconButton } from "../../../../components/Button";
import { voteData } from "../../voteData";
import Recommend from "../_components/Recommend/Recommend";
import SuccessText from "../_components/SuccessText"

const VoteAgreePage: React.FC = () => {
    const navigate = useNavigate(); 
    return (
        <S.Container>
            <Header
                leftContent={
                    <IconButton onClick={() => {
                        navigate(`/vote?`);
                    }}>
                        <BackIcon />
                    </IconButton>
                }
                centerContent={<S.Typography>{voteData.groupId}{voteData.groupMembers}</S.Typography>}
                rightContent={<IconButton><HomeIcon /></IconButton>}
            />
            <SuccessText />
            <S.VoteCardWrapper>
                <ConfirmSuccessCard />
            </S.VoteCardWrapper>
            <Recommend />
        </S.Container>
    );
};

export default VoteAgreePage;
