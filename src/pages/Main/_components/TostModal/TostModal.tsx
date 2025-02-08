import React from "react";
import * as S from "./Styles";

const TostModal: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
    if (!isVisible) return null;

    return (
        <S.Container>
            <S.ModalContent>
                <S.CloseButton onClick={onClose}>✖</S.CloseButton>
                <S.Title>필터링하고 싶은 항목을 선택하세요</S.Title>
                <S.Options>
                    <S.Option>
                        <S.Icon src="/assets/icons/budget.svg" alt="예산" />
                        <S.OptionText>예산 짜기</S.OptionText>
                    </S.Option>
                    <S.Option selected>
                        <S.Icon src="/assets/icons/course.svg" alt="코스" />
                        <S.OptionText>코스 짜기</S.OptionText>
                    </S.Option>
                    <S.Option>
                        <S.Icon src="/assets/icons/schedule.svg" alt="일정" />
                        <S.OptionText>일정 짜기</S.OptionText>
                    </S.Option>
                </S.Options>
                <S.ApplyButton>적용하기</S.ApplyButton>
            </S.ModalContent>
        </S.Container>
    );
};

export default TostModal;
