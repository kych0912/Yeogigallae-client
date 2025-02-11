import React, { useState } from "react";
import * as S from "./Styles";
import xBtn from "../../../../assets/icons/xBtn.svg";
import Course from "../../../../assets/icons/course.svg";
import Budget from "../../../../assets/icons/budget.svg";
import Schedule from "../../../../assets/icons/calendar3.svg";

const TostModal: React.FC<{
    isVisible: boolean;
    onClose: () => void;
    onFilterChange: (filter: string) => void;
}> = ({ isVisible, onClose, onFilterChange }) => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isHiding, setIsHiding] = useState(false);

    const handleOptionChange = (option: string) => {
        setSelectedOption(option);
    };

    const handleApplyFilter = () => {
        onFilterChange(selectedOption);
        handleClose();
    };

    const handleClose = () => {
        setIsHiding(true);
        setTimeout(() => {
            onClose();
            setIsHiding(false);
        }, 300);
    };

    if (!isVisible && !isHiding) return null;

    return (
        <S.Container>
            <S.ModalContent className={isHiding ? "hidden" : ""}>
                <S.CloseButton onClick={handleClose}>
                    <img src={xBtn} alt="Close" />
                </S.CloseButton>
                <S.Title>필터링하고 싶은 항목을 선택하세요</S.Title>
                <S.Options>
                    <label style={{ flex: 1 }}>
                        <S.Option selected={selectedOption === "BUDGET"}>
                            <S.RadioButton name="filter" value="BUDGET" checked={selectedOption === "BUDGET"} onChange={() => handleOptionChange("BUDGET")} />
                            <S.Icon src={Budget} alt="예산" />
                            <S.OptionText>예산 짜기</S.OptionText>
                        </S.Option>
                    </label>
                    <label style={{ flex: 1 }}>
                        <S.Option selected={selectedOption === "COURSE"}>
                            <S.RadioButton name="filter" value="COURSE" checked={selectedOption === "COURSE"} onChange={() => handleOptionChange("COURSE")} />
                            <S.Icon src={Course} alt="코스" />
                            <S.OptionText>코스 짜기</S.OptionText>
                        </S.Option>
                    </label>
                    <label style={{ flex: 1 }}>
                        <S.Option selected={selectedOption === "SCHEDULE"}>
                            <S.RadioButton name="filter" value="SCHEDULE" checked={selectedOption === "SCHEDULE"} onChange={() => handleOptionChange("SCHEDULE")} />
                            <S.Icon src={Schedule} alt="일정" />
                            <S.OptionText>일정 짜기</S.OptionText>
                        </S.Option>
                    </label>
                </S.Options>
                <S.Button onClick={handleApplyFilter}>적용하기</S.Button>
            </S.ModalContent>
        </S.Container>
    );
};

export default TostModal;
