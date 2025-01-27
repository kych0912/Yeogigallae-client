import * as S from "./MainSection.Styles";

interface HeaderProps {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
}

/**
 * 헤더 컴포넌트로 좌측, 우측에 각각 콘텐츠를 배치할 수 있습니다.
 * @param leftContent 왼쪽 컨텐츠
 * @param rightContent 오른쪽 컨텐츠
 */

export default function MainSection({ leftContent, rightContent }: HeaderProps) {
    return (
        <S.Header>
            <S.HeaderWrapper>
                <S.Section>{leftContent}</S.Section>
                <S.Section>{rightContent}</S.Section>
            </S.HeaderWrapper>
        </S.Header>
    );
}
