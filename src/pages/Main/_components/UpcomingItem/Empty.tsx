import * as S from "../Main.Styles";
import * as U from "./UpcomingItem.Styles";

export default function Empty() {
    return (
        <S.Emptylist>
            <U.EmptyBox>
                <S.Text>친구들을 추가하여 여행을 계획해보세요!</S.Text>
            </U.EmptyBox>
        </S.Emptylist>
    );
}
