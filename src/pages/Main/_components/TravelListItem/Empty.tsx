import * as S from "../Main.Styles";
import * as H from "./TravelListItem.Styles";

export default function Empty() {
    return (
        <S.Emptylist>
            <H.EmptyBox>
                <S.Text>친구들을 추가하여 여행을 계획해보세요!</S.Text>
            </H.EmptyBox>
        </S.Emptylist>
    );
}
