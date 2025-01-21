import React from "react";
import * as S from "../Main.Styles";
import * as V from "./VotingItem.Styles";

const Empty: React.FC = () => {
    return (
        <S.Emptylist>
            <V.EmptyBox>
                <S.Text>
                    여행 투표와 AI 코스 생성을 통해
                    <br />더 이상 여행을 미루지마세요!
                </S.Text>
            </V.EmptyBox>
        </S.Emptylist>
    );
};

export default Empty;
