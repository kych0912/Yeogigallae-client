import React from "react";
import * as S from "../Main.Styles";
import * as U from "./UpcomingItem.Styles";

const Empty: React.FC = () => {
    return (
        <S.Emptylist>
            <U.EmptyBox>
                <S.Text>친구들을 추가하여 여행을 계획해보세요!</S.Text>
            </U.EmptyBox>
        </S.Emptylist>
    );
};

export default Empty;
