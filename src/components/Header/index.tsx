import * as S from "./Header.styles";

interface HeaderProps {
    children?: React.ReactNode;
}

export function Header({children}:HeaderProps){
    return(
        <S.Header>
            <S.HeaderWrapper>
                {children}
            </S.HeaderWrapper>
        </S.Header>
    )   
}

Header.leftContent = ({children}:HeaderProps) => {
    return <S.Left>{children}</S.Left>
}

Header.centerContent = ({children}:HeaderProps) => {
    return <S.Center>{children}</S.Center>
}

Header.rightContent = ({children}:HeaderProps) => {
    return <S.Right>{children}</S.Right>
}
