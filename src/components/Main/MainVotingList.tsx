import React from "react";
import * as S from "./Main.Styles";
import MainSection from "./MainSection/MainSection";

const MainVotingList: React.FC = () => {
    return (
        <S.Container>
            <MainSection leftContent={"🙏 투표중"} rightContent={0}></MainSection>
            <S.TravelList>
                <S.ListItem>
                    <S.Text>
                        여행 투표와 AI코스 생성을 통해
                        <br />더 이상 여행을 미루지마세요!
                    </S.Text>
                </S.ListItem>
            </S.TravelList>
        </S.Container>
    );
};

export default MainVotingList;
