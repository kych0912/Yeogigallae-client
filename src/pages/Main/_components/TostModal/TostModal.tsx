import React, { useState } from "react";
import * as S from "./Styles";
import xBtn from "../../../../assets/icons/xBtn.svg";
import Course from "../../../../assets/icons/course.svg";
import Budget from "../../../../assets/icons/budget.svg";
import Schedule from "../../../../assets/icons/calendar3.svg";

const TostModal: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
    const [selectedOption, setSelectedOption] = useState<string>("코스 짜기");

    if (!isVisible) return null;

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    return (
        <S.Container>
            <S.ModalContent>
                <S.CloseButton onClick={onClose}>
                    <img src={xBtn} alt="Close" />
                </S.CloseButton>
                <S.Title>필터링하고 싶은 항목을 선택하세요</S.Title>
                <S.Options>
                    <label>
                        <S.Option selected={selectedOption === "예산 짜기"}>
                            <S.RadioButton name="filter" value="예산 짜기" checked={selectedOption === "예산 짜기"} onChange={() => handleOptionChange("예산 짜기")} />
                            <S.Icon src={Budget} alt="예산" />
                            <S.OptionText>예산 짜기</S.OptionText>
                        </S.Option>
                    </label>
                    <label>
                        <S.Option selected={selectedOption === "코스 짜기"}>
                            <S.RadioButton name="filter" value="코스 짜기" checked={selectedOption === "코스 짜기"} onChange={() => handleOptionChange("코스 짜기")} />
                            <S.Icon src={Course} alt="코스" />
                            <S.OptionText>코스 짜기</S.OptionText>
                        </S.Option>
                    </label>
                    <label>
                        <S.Option selected={selectedOption === "일정 짜기"}>
                            <S.RadioButton name="filter" value="일정 짜기" checked={selectedOption === "일정 짜기"} onChange={() => handleOptionChange("일정 짜기")} />
                            <S.Icon src={Schedule} alt="일정" />
                            <S.OptionText>일정 짜기</S.OptionText>
                        </S.Option>
                    </label>
                </S.Options>
                <S.Button>적용하기</S.Button>
            </S.ModalContent>
        </S.Container>
    );
};

export default TostModal;
