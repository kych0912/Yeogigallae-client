import { PropsWithChildren } from "react";
import * as S from "./Button.styles";
import { ButtonProps } from "./types";

/**
 * 버튼 컴포넌트입니다. props로 variant, size, color, html 속성들을 받을 수 있습니다.
 * @param children 버튼 내부에 들어갈 컴포넌트
 * @param size 버튼 크기
 * @param disabled 버튼 비활성화 여부
 * @param color 버튼 색상
 * @param variant 버튼 스타일 종류
 * @param rest html 속성들
 * @returns 
 */

function Button({ 
    children, 
    size = 'medium', 
    color = 'primary',
    variant="contained",
    ...rest
}: PropsWithChildren<ButtonProps>) {
    return (
        <S.BaseButton 
            size={size}
            color={color}
            variant={variant}
            {...rest}
        >
            {children}
        </S.BaseButton>
    );
}

export default Button;