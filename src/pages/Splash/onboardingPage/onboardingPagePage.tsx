import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Onboarding1 from "../../../assets/icons/onboarding1.svg";
import Onboarding2 from "../../../assets/icons/onboarding2.svg";
import Onboarding3 from "../../../assets/icons/onboarding3.svg";

import BaseButton from "../../../components/Button/Button";

const images = [Onboarding1, Onboarding2, Onboarding3];
const texts = [
    ["여행일정을", "간단한 투표로 정해요"],
    ["추천 코스를", "AI가 직접 짜줘요!"],
    ["짜여진 코스를 바탕으로", "AI가 예상 예산을 알려줘요!"],
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background || "#f0f0f0"};
    overflow-x: hidden;
    box-sizing: border-box;
`;

const Image = styled.img<{ marginBottom?: string }>`
    width: 100%;
    margin-bottom: ${({ marginBottom }) => marginBottom}; // 기본 값은 2.5rem
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 5rem;
    justify-content: space-between;
    padding: 0 1.25rem;
`;

const Button = styled.button`
    padding: 0 2.5rem;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.GrayText};
    font-family: ${({ theme }) => theme.fontFamily.regular};
`;

const NextButton = styled(Button)`
    color: ${({ theme }) => theme.colors.primary};
`;

const Text = styled.div`
    font-size: 1.75rem;
    text-align: center;
    color: white;
    font-family: ${({ theme }) => theme.fontFamily.semiBold};
    line-height: 1.5;
    margin-bottom: 4.625rem;
`;

const LButton = styled(BaseButton)`
    color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    margin: 0 1.25rem;
`;

const PaginationContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 5%;
`;

const Dot = styled.div<{ active: boolean }>`
    width: ${({ active }) => (active ? "20px" : "10px")};
    height: 10px;
    border-radius: 999px;
    background: ${({ active }) => (active ? ({ theme }) => theme.colors.primary : ({ theme }) => theme.colors.GrayText)};
    transition: width 0.3s ease-in-out;
    align-self: center;
`;

const Onboarding = () => {
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        setPage((prev) => prev + 1);
    };

    const handleSkip = () => {
        navigate("/login");
    };

    // 마진값 설정
    const imageMarginBottom = page === 1 ? "2.5rem" : "0";

    return (
        <Container>
            <PaginationContainer>
                {images.map((_, index) => (
                    <Dot key={index} active={index === page} />
                ))}
            </PaginationContainer>

            <Image src={images[page]} alt={`Page ${page + 1}`} marginBottom={imageMarginBottom} />
            <Text>
                {texts[page].map((line, index) => (
                    <span key={index}>
                        {line}
                        {index !== texts[page].length - 1 && <br />}
                    </span>
                ))}
            </Text>
            <ButtonContainer>
                {page < images.length - 1 ? (
                    <>
                        <Button onClick={handleSkip}>건너뛰기</Button>
                        <NextButton onClick={handleNext}>다음</NextButton>
                    </>
                ) : (
                    <LButton onClick={handleSkip}>시작하기</LButton>
                )}
            </ButtonContainer>
        </Container>
    );
};

export default Onboarding;
