import * as S from './Profile.style';

export default function UserProfile({avatar}: {avatar: string}) {
    return (
        <S.UserProfile.Container>
            <S.UserProfile.Avatar src={avatar} alt="avatar" />
            <S.UserProfile.NameContainer>
                <S.UserProfile.NameTypography>
                    {"왕지님, 안녕하세요!"}
                </S.UserProfile.NameTypography>
                <S.UserProfile.InfoTypography>
                    {"여행 친구들과 여행을 계획해보세요!"}
                </S.UserProfile.InfoTypography>
            </S.UserProfile.NameContainer>
        </S.UserProfile.Container>
    );
}

