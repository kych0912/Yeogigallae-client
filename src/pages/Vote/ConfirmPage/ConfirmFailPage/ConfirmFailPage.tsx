import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Styles";
import HomeIcon from "../../../../assets/icons/Home.svg?react";
import BackIcon from "../../../../assets/icons/Back.svg?react";
import Header from "../../../../components/Header/index";
import ConfirmFailCard from "../_components/ConfirmFailCard/ConfirmFailCard";
import { IconButton } from "../../../../components/Button";
import { afterData } from "../../VoteCompletePage/_data/afterData";

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
                centerContent={<S.Typography>{afterData.groupId}{afterData.groupMembers}</S.Typography>}
                rightContent={<IconButton><HomeIcon /></IconButton>}
            />
            <S.VoteCardWrapper>
                <ConfirmFailCard />
            </S.VoteCardWrapper>
        </S.Container>
    );
};

export default VoteAgreePage;
