import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Onboarding1 from "../../../assets/icons/onboarding1.svg";
import Onboarding2 from "../../../assets/icons/onboarding2.svg";
import Onboarding3 from "../../../assets/icons/onboarding3.svg";
import * as S from "./Styles";

const images = [Onboarding1, Onboarding2, Onboarding3];
const texts = [
    ["여행일정을", "간단한 투표로 정해요"],
    ["추천 코스를", "AI가 직접 짜줘요!"],
    ["짜여진 코스를 바탕으로", "AI가 예상 예산을 알려줘요!"],
];

const Onboarding = () => {
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        setPage((prev) => Math.min(prev + 1, images.length - 1));
    };

    const handleSkip = () => {
        navigate("/login");
    };

    return (
        <S.Container>
            <S.PaginationContainer>
                {images.map((_, index) => (
                    <S.Dot key={index} $active={index === page} />
                ))}
            </S.PaginationContainer>

            <S.Image key={page} src={images[page]} alt={`Page ${page + 1}`} />
            <S.Text key={`text-${page}`}>
                {texts[page].map((line, index) => (
                    <span key={index}>
                        {line}
                        {index !== texts[page].length - 1 && <br />}
                    </span>
                ))}
            </S.Text>

            <S.ButtonContainer>
                {page < images.length - 1 ? (
                    <>
                        <S.Button onClick={handleSkip}>건너뛰기</S.Button>
                        <S.NextButton onClick={handleNext}>다음</S.NextButton>
                    </>
                ) : (
                    <S.LButton onClick={handleSkip}>시작하기</S.LButton>
                )}
            </S.ButtonContainer>
        </S.Container>
    );
};

export default Onboarding;
