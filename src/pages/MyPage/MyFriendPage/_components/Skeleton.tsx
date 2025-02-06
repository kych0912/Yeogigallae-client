import Skeleton from "../../../../components/Skeleton";
import * as S from "./Friend.style";

export function AccordionTitleSkeleton(){


    return (
        <S.Accordion.Title>
            <Skeleton width="50%" height="1.5rem" />
            <S.Item.ToggleWrapper>
                <Skeleton width="1rem" height="1rem" />
            </S.Item.ToggleWrapper>
        </S.Accordion.Title>

    );
}
