// 여행 가보자고 - 투표 동의 화면
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./VoteAgree.styles";
import HomeIcon from "../../../assets/icons/Home.svg?react";
import BackIcon from "../../../assets/icons/Back.svg?react";
import Header from "../../../components/Header/index";
import VoteCard from "./_components/VoteCard/VoteCard";
import { IconButton } from "../../../components/Button";

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
                centerContent={<S.Typography>{"투표중"}</S.Typography>}
                rightContent={<IconButton><HomeIcon /></IconButton>}
            />
            <S.VoteCardWrapper>
                <VoteCard />
            </S.VoteCardWrapper>
        </S.Container>
    );
};

export default VoteAgreePage;
