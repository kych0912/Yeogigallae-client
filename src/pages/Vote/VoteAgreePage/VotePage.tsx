// VotePage.tsx
import React from "react";
import * as S from "../VoteAgreePage/Vote.styles";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import { IconButton } from "../../../components/Button";
import { tempData } from "../VoteAgreePage/_components/TravelCard/tempData";
import TravelCard from "../VoteAgreePage/_components/TravelCard/TravelCard"

const VotePage: React.FC = () => {
    return (
        <S.Container>
            <Header
                leftContent={<IconButton><BackIcon /></IconButton>}
                centerContent={<S.Typography>{tempData.groupId}</S.Typography>}
                rightContent={<IconButton><HomeIcon /></IconButton>}
            />
            <S.TravelCardWrapper>
                <TravelCard />
            </S.TravelCardWrapper>
        </S.Container>
    );
};

export default VotePage;

