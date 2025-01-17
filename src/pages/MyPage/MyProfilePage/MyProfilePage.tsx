// 프로필 화면
import React from 'react';
import * as S from './_components/Profile.style'; 
import UserProfile from './_components/UserProfile';

const MyProfilePage: React.FC = () => {
    return (
        <S.Container>
            <UserProfile avatar={"https://picsum.photos/200/300"} />
        </S.Container>
    );
};

export default MyProfilePage;
